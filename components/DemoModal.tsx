"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";

const API = process.env.NEXT_PUBLIC_DEMO_API ?? "https://taiafox.ignaciogarbayo.com";
const SCENARIO_ID = "wildfire_ridge";

type Role = { key: string; label: string; explica?: string };

type Status = {
  busy: boolean;
  ends_in_s: number | null;
  run_max_s: number | null;
  inbound_number: string;
  phone_roles: Role[];
  default_scenario?: string;
};

/* Fallback si /api/demo/status no responde: los cinco papeles del escenario. */
const FALLBACK_ROLES: Role[] = [
  { key: "fire_crew", label: "Retén de bomberos" },
  { key: "ambulance", label: "Dotación de la ambulancia" },
  { key: "pueblo_a", label: "Responsable de Pueblo A" },
  { key: "pueblo_b", label: "Pueblo B" },
  { key: "neighbor", label: "Vecino que llama" },
];

const E164 = /^\+[1-9]\d{6,14}$/;

function minutes(seconds: number) {
  return Math.max(1, Math.ceil(seconds / 60));
}

/* El 422 de FastAPI llega como detail[].msg = "Value error, fire_crew: '…' no es …" */
function fieldErrorsFrom422(body: unknown, roles: Role[]): Record<string, string> {
  const out: Record<string, string> = {};
  const detail = (body as { detail?: unknown })?.detail;
  if (!Array.isArray(detail)) return out;
  for (const item of detail) {
    const msg = String((item as { msg?: unknown })?.msg ?? "");
    const clean = msg.replace(/^Value error,\s*/, "");
    const role = roles.find((r) => clean.startsWith(`${r.key}:`));
    if (role) out[role.key] = clean.slice(role.key.length + 1).trim();
  }
  return out;
}

export default function DemoModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status | null>(null);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [phones, setPhones] = useState<Record<string, string>>({});
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [retryIn, setRetryIn] = useState<number | null>(null);

  const roles = status?.phone_roles?.length ? status.phone_roles : FALLBACK_ROLES;

  const loadStatus = useCallback(async () => {
    setLoading(true);
    setFormError(null);
    try {
      const res = await fetch(`${API}/api/demo/status`);
      if (!res.ok) throw new Error(`status responded ${res.status}`);
      const data: Status = await res.json();
      setStatus(data);
      setRetryIn(data.busy ? data.ends_in_s ?? null : null);
    } catch (err) {
      console.error(err);
      setStatus(null);
      setFormError("No hemos podido contactar con la demo. Inténtalo de nuevo en un momento.");
    } finally {
      setLoading(false);
    }
  }, []);

  function openModal() {
    setOpen(true);
    setFieldErrors({});
    setFormError(null);
    void loadStatus();
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (retryIn === null || retryIn <= 0) return;
    const id = setInterval(() => setRetryIn((s) => (s === null ? null : Math.max(0, s - 1))), 1000);
    return () => clearInterval(id);
  }, [retryIn]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);

    const local: Record<string, string> = {};
    for (const role of roles) {
      const value = (phones[role.key] ?? "").replace(/[\s.-]/g, "");
      if (!value) local[role.key] = "Obligatorio.";
      else if (!E164.test(value)) local[role.key] = "Formato internacional, con prefijo: +34600111222.";
    }
    setFieldErrors(local);
    if (Object.keys(local).length > 0) return;

    const payload = Object.fromEntries(
      roles.map((role) => [role.key, (phones[role.key] ?? "").replace(/[\s.-]/g, "")]),
    );

    setSending(true);
    try {
      const res = await fetch(`${API}/api/run`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          scenario_id: status?.default_scenario ?? SCENARIO_ID,
          phones: payload,
        }),
      });
      const data = await res.json().catch(() => null);

      if (res.ok && data?.watch_url) {
        window.location.href = data.watch_url;
        return;
      }
      if (res.status === 409) {
        const wait = Number(data?.detail?.retry_after_s ?? 0);
        setRetryIn(wait > 0 ? wait : null);
        setStatus((prev) => (prev ? { ...prev, busy: true } : prev));
        setFormError(
          wait > 0
            ? `Ya hay una demo en marcha. Vuelve en ${minutes(wait)} minutos.`
            : "Ya hay una demo en marcha. Vuelve en unos minutos.",
        );
        return;
      }
      if (res.status === 422) {
        const errors = fieldErrorsFrom422(data, roles);
        setFieldErrors(errors);
        setFormError(
          Object.keys(errors).length > 0
            ? "Revisa los números marcados."
            : "Alguno de los números no es válido.",
        );
        return;
      }
      throw new Error(`run responded ${res.status}`);
    } catch (err) {
      console.error(err);
      setFormError("No hemos podido arrancar la demo. Inténtalo de nuevo.");
    } finally {
      setSending(false);
    }
  }

  const busy = Boolean(status?.busy) || (retryIn !== null && retryIn > 0);

  return (
    <>
      <button type="button" className="header-cta demo-trigger" onClick={openModal}>
        Probar la demo
      </button>

      {open && (
        <div
          className="demo-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Arrancar la demo de Taiafox"
          onClick={() => setOpen(false)}
        >
          <div className="demo-panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="demo-close"
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
            >
              ✕
            </button>

            <h2 className="demo-title">Arranca la demo</h2>
            <p className="demo-lead">
              Cinco móviles reales recibirán la llamada de Taiafox durante el incendio de Wildfire
              Ridge. Todos los campos son obligatorios y en formato internacional (+34600111222).
            </p>

            {loading && <div className="demo-note">Comprobando si la demo está libre…</div>}

            {!loading && busy && (
              <div className="demo-alert">
                Ya hay una demo en marcha.{" "}
                {retryIn !== null && retryIn > 0
                  ? `Vuelve en ${minutes(retryIn)} minutos.`
                  : "Vuelve en unos minutos."}
              </div>
            )}

            {!loading && status?.inbound_number && (
              <div className="demo-inbound">
                <span className="demo-inbound-label">Tú haces de vecino: llama a</span>
                <a href={`tel:${status.inbound_number}`} className="demo-inbound-number">
                  {status.inbound_number}
                </a>
              </div>
            )}

            <form className="demo-form" onSubmit={onSubmit} noValidate>
              {roles.map((role) => (
                <label key={role.key} className="demo-field">
                  <span className="demo-field-label">{role.label}</span>
                  {role.explica && <span className="demo-field-help">{role.explica}</span>}
                  <input
                    type="tel"
                    inputMode="tel"
                    required
                    autoComplete="off"
                    placeholder="+34600111222"
                    value={phones[role.key] ?? ""}
                    aria-invalid={Boolean(fieldErrors[role.key])}
                    className={fieldErrors[role.key] ? "demo-input invalid" : "demo-input"}
                    onChange={(e) => {
                      const value = e.target.value;
                      setPhones((prev) => ({ ...prev, [role.key]: value }));
                      setFieldErrors((prev) => {
                        if (!prev[role.key]) return prev;
                        const next = { ...prev };
                        delete next[role.key];
                        return next;
                      });
                    }}
                  />
                  {fieldErrors[role.key] && (
                    <span className="demo-field-error">{fieldErrors[role.key]}</span>
                  )}
                </label>
              ))}

              <p className="demo-repeat">
                Puedes repetir el mismo número en varios papeles: está permitido, pero recibirás
                varias llamadas seguidas en el mismo móvil y alguna puede dar ocupado.
              </p>

              {formError && (
                <div className="demo-alert" role="alert">
                  {formError}
                </div>
              )}

              <button type="submit" className="demo-submit" disabled={sending || loading || busy}>
                {sending ? "Arrancando…" : busy ? "Demo ocupada" : "Empezar"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
