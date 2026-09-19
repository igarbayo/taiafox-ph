"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

export default function LoiPhoto({ src, label }: { src: string; label: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button type="button" className="vc-eye" onClick={() => setOpen(true)} aria-label={label} title={label}>
        <span>Ver LOI</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>
      {open && (
        <div className="vc-modal" role="dialog" aria-modal="true" aria-label={label} onClick={() => setOpen(false)}>
          <button type="button" className="vc-modal-close" onClick={() => setOpen(false)} aria-label="Cerrar">
            ✕
          </button>
          <img src={src} alt={label} className="vc-modal-img" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
