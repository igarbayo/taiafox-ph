/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Partners from "@/components/Partners";
import LoiPhoto from "@/components/LoiPhoto";

export const metadata: Metadata = {
  title: "Taiafox — Estudio de negocio",
  description:
    "Dos compradores con presupuesto ya nos cogen el teléfono. Validación, mercado y equipo de Taiafox.",
};

const lois = [
  {
    tag: "LOI 1 · PÚBLICO · EUROPA",
    photo: "/photos/pablo.jpg",
    name: "Pablo Fernández Vila",
    role: "Delegado Territorial de la Xunta en Pontevedra",
    value: "213 M€",
    label: "PLADIGA 2026",
    src: "https://www.laregion.es/galicia/xunta-galicia-aprueba-plan-antincendios_1_20260413-4234618.html",
    proof: "/photos/foto-pablo.png",
    proofLabel: "Foto Pablo",
    linkedin: "https://www.linkedin.com/in/pablo-fern%C3%A1ndez-vila-416a2425/",
  },
  {
    tag: "LOI 2 · PRIVADO REGULADO · EE. UU.",
    photo: "/photos/andrew.png",
    name: "Andrew Abranches",
    role: "VP of Wildfire Mitigation, PG&E",
    value: "16 M",
    label: "PERSONAS SERVIDAS · 180.000 KM²",
    src: "https://www.prnewswire.com/news-releases/three-year-wildfire-mitigation-plan-builds-upon-proven-layers-of-protection-includes-nearly-1-100-miles-of-undergrounding-and-further-integration-of-new-technologies-302422274.html",
    proof: "/photos/foto-andrew.jpeg",
    proofLabel: "Foto Andrew",
    linkedin: "https://www.linkedin.com/in/andrewabranches/",
  },
];

const SRC = {
  cpuc: "https://www.nossaman.com/assets/htmldocuments/eAlerts/CPUC%20SB%20254%20Study%20Information%20and%20Recommendations.pdf",
  sce: "https://www.utilitydive.com/news/southern-california-edison-eix-wildfire-costs-earnings/812656/",
  sceplan: "https://www.yahoo.com/news/southern-california-edison-submits-three-205722925.html",
  nardac: "https://nardac.com/wildfire-mitigation-in-the-utility-industry-technology-investment-and-the-shift-to-resilience/",
  galicia: "https://www.laregion.es/galicia/fuego-arraso-118-966-hectareas_1_20260101-4110388.html",
  pladiga: "https://www.laregion.es/galicia/xunta-galicia-aprueba-plan-antincendios_1_20260413-4234618.html",
};

type Stat = { value: string; label: string; accent?: boolean; src?: string };

const eaton: Stat[] = [
  { value: "3:25 h", label: "PRIMERA ORDEN DE EVACUACIÓN", accent: true, src: "https://www.yahoo.com/news/17-deaths-eaton-fire-were-024433120.html" },
  { value: "17 / 19", label: "MUERTES EN LA ZONA SIN AVISO", src: "https://www.yahoo.com/news/articles/california-announces-investigation-delayed-evacuation-221654651.html" },
  { value: "13.500 M$", label: "EXPOSICIÓN DE UNA SOLA UTILITY", src: SRC.sce },
];

const galicia: Stat[] = [
  { value: "118.966", label: "HECTÁREAS", src: SRC.galicia },
  { value: "1.492", label: "INCENDIOS", src: SRC.galicia },
  { value: "2.200", label: "CONFINAMIENTOS" },
  { value: "400", label: "EVACUACIONES", accent: true, src: SRC.galicia },
];

const chain = [
  {
    step: "Ver",
    who: [
      { name: "Pano", href: "https://www.pano.ai/" },
      { name: "Dryad", href: "https://tracxn.com/d/companies/pano/__R_zHOlL7ggv51kv9OBijrS2mFETLtc-92-SmuGfjGCU" },
    ],
  },
  { step: "Predecir", who: [{ name: "Technosylva", href: "https://technosylva.com/" }] },
  {
    step: "Avisar",
    who: [
      {
        name: "Everbridge",
        href: "https://techcrunch.com/2024/03/01/thoma-bravo-takes-critical-event-management-software-company-everbridge-private-in-1-5b-deal/",
      },
      { name: "Genasys", href: "https://genasys.com/wildfires/" },
    ],
  },
];

const spend = [
  { item: "IOUs de California en mitigación, 2024-2025", amount: "> 9.000 M$", src: SRC.cpuc },
  { item: "Plan trienal de SCE 2026-2028", amount: "6.200 M$", src: SRC.sceplan },
  { item: "CAL FIRE · protección y gestión", amount: "4.100 M$", src: SRC.cpuc },
  { item: "Gestión federal de incendios en EE. UU.", amount: "6.800 M$", src: SRC.cpuc },
  {
    item: "IOUs del noroeste (WA, OR, MT, ID), 2026",
    amount: "> 700 M$",
    src: "https://www.sightline.org/2026/06/16/northwest-utilities-wildfire-risk-and-spending-is-skyrocketing/",
  },
  { item: "Pladiga 2026, Xunta de Galicia", amount: "213 M€ (+18%)", src: SRC.pladiga },
];

const whyNow = [
  {
    title: "El dinero se ha movido",
    text: "Las IOUs de California gastaron más que CAL FIRE y que toda la gestión federal. El comprador con presupuesto ya es privado y decide rápido.",
    src: SRC.cpuc,
  },
  {
    title: "La regulación creó el proceso de compra",
    text: "Nueve estados exigen plan de mitigación. Un plan aprobado activa la recuperación de costes vía tarifas: presupuesto plurianual asegurado.",
    src: SRC.nardac,
  },
  {
    title: "La responsabilidad es existencial",
    text: "13.500 M$ de exposición estimada para una sola compañía por un solo incendio. Contra eso, un contrato de software es ruido contable.",
    src: SRC.sce,
  },
];

const market: Stat[] = [
  { value: "1.400 M$", label: "TAM · GASTO OPERATIVO ANUAL", src: SRC.cpuc },
  { value: "390 M$", label: "SAM · VENDIBLE HOY" },
  { value: "20 M$", label: "SOM · ARR A 5 AÑOS · 100 CUENTAS", accent: true },
];

const budget = [
  { value: "1.200 €", label: "Teléfonos y minutos en tres países" },
  { value: "1.800 €", label: "Inferencia y APIs, 6 meses" },
  { value: "800 €", label: "Infraestructura y observabilidad" },
  { value: "1.200 €", label: "Viajes a Pontevedra y San Francisco" },
];

const team = [
  { photo: "/photos/ignacio.png", name: "Ignacio Garbayo", role: "Engineer @ Factorial", uni: "USC", linkedin: "https://www.linkedin.com/in/ignaciogarbayo/" },
  { photo: "/photos/luis.png", name: "Luis Garbayo", role: "Engineer @ Histora", uni: "Uvigo", linkedin: "https://www.linkedin.com/in/luis-garbayo/" },
  { photo: "/photos/carlos.jpg", name: "Carlos Cao López", uni: "USC", linkedin: "https://www.linkedin.com/in/carlos-cao-l%C3%B3pez-205297335/" },
  { photo: "/photos/hugo.jpg", name: "Hugo Nienhausen", role: "SRE @ Glovo", uni: "UPC", linkedin: "https://www.linkedin.com/in/hugonienhausen/" },
];

const faq = [
  {
    q: "¿Quién responde si el agente se equivoca?",
    a: "Ejecuta solo dentro de un sobre preautorizado. Nunca decide un triaje vital sin humano, y toda decisión queda trazada.",
  },
  {
    q: "¿Y si el regulador lo prohíbe?",
    a: "Por eso el modelo no asigna recursos: solver determinista, verificadores puros, traza completa desde el primer commit.",
  },
  {
    q: "Vuestro TAM es pequeño.",
    a: "Es pequeño a propósito. Con las lecturas favorables se multiplica por cuatro. Preferimos defender 1.400 millones.",
  },
  {
    q: "Esto es solo incendios.",
    a: "Es la cabeza de playa. El mismo bucle sirve para una inundación, un apagón o un brote. No lo ampliamos hasta tener 10 cuentas.",
  },
  {
    q: "¿Por qué no lo construye Pano o Everbridge?",
    a: "Su stack y su equipo comercial venden datos y aviso unidireccional. Y si lo intentan, el comparable de salida es 1.800 M$.",
  },
  {
    q: "¿Cuál es vuestro foso?",
    a: "El simulador y los registros de ejecución: un mundo donde el desastre ocurre mil veces. Ese dataset crece con cada cliente.",
  },
];

function Src({ href, label = "fuente" }: { href: string; label?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="vc-src">
      {label}
    </a>
  );
}

export default function VC() {
  return (
    <div className="page vc" lang="es">
      <header className="header">
        <div className="container header-inner">
          <a href="/" className="header-home">
            <img src="/logos/taiafox-C-rounded.svg" alt="taiafox" className="header-logo" />
          </a>
          <div className="vc-header-right">
            <div className="header-label">Estudio de negocio</div>
            <a href="/" className="header-cta">
              Volver a Home
            </a>
          </div>
        </div>
      </header>

      <section className="vc-section vc-hero dark">
        <div className="container stack">
          <div className="vc-kicker">Validación</div>
          <h1>Dos compradores con presupuesto ya nos cogen el teléfono.</h1>
          <div className="vc-lois">
            {lois.map((l) => (
              <div key={l.name} className="vc-loi">
                <div className="vc-loi-tag">{l.tag}</div>
                <div className="vc-loi-person">
                  <img src={l.photo} alt={l.name} className="vc-avatar" />
                  <div>
                    <div className="vc-loi-name">{l.name}</div>
                    <div className="vc-loi-role">{l.role}</div>
                  </div>
                </div>
                <div className="vc-loi-value">{l.value}</div>
                <div className="vc-loi-tag">
                  {l.label} · <Src href={l.src} />
                </div>
                <div className="vc-loi-actions">
                  <a href={l.linkedin} target="_blank" rel="noreferrer" className="vc-link">
                    LinkedIn →
                  </a>
                  <LoiPhoto src={l.proof} label={l.proofLabel} />
                </div>
              </div>
            ))}
          </div>
          <p className="vc-lead">
            Son cartas de intención de piloto, no contratos. Prueban lo único que toca probar en
            pre-seed.
          </p>
          <div>
            <a href="#" target="_blank" rel="noreferrer" className="vc-pill">
              Ver en Product Hunt
            </a>
          </div>
          <Partners />
        </div>
      </section>

      <section className="vc-section">
        <div className="container stack">
          <div className="vc-kicker accent">Lo que sucedió</div>
          <div className="eyebrow">EATON FIRE · 7 DE ENERO DE 2025</div>
          <h2 className="display vc-title">No faltaron cámaras. Faltó quien ejecutara.</h2>
          <div className="vc-grid vc-grid-230">
            {eaton.map((s) => (
              <div key={s.label} className="vc-stat">
                <div className={`stat-value${s.accent ? " accent" : ""}`}>{s.value}</div>
                <div className="stat-label">
                  {s.label}
                  {s.src && (
                    <>
                      {" · "}
                      <Src href={s.src} />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vc-section tail">
        <div className="container stack">
          <h2 className="display vc-title">Galicia, verano de 2025.</h2>
          <div className="vc-grid vc-grid-190">
            {galicia.map((s) => (
              <div key={s.label} className="vc-card">
                <div className={`vc-card-value${s.accent ? " accent" : ""}`}>{s.value}</div>
                <div className="stat-label">
                  {s.label}
                  {s.src && (
                    <>
                      {" · "}
                      <Src href={s.src} />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="frame">
            <img src="/shots/map.png" alt="Mapa operativo de Taiafox" />
          </div>
        </div>
      </section>

      <section className="vc-section dark">
        <div className="container stack">
          <h2 className="display vc-title">Ver, predecir, avisar. Nadie ejecuta.</h2>
          <div className="vc-chain">
            {chain.map((c) => (
              <div key={c.step}>
                <div className="vc-chain-step">{c.step}</div>
                <div className="vc-chain-who">
                  {c.who.map((w, i) => (
                    <span key={w.name}>
                      {i > 0 && " · "}
                      <Src href={w.href} label={w.name} />
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="vc-chain-us">
              <div className="vc-chain-step">Ejecutar</div>
              <div className="vc-chain-who">Taiafox</div>
            </div>
          </div>
          <div className="vc-grid vc-grid-260 vc-points">
            <div>El LLM emite política. Un solver determinista asigna.</div>
            <div>Bidireccional: lanza la llamada y absorbe la avalancha entrante.</div>
            <div>Software puro: sin hardware, sin inventario, despliegue en días.</div>
          </div>
        </div>
      </section>

      <section className="vc-section">
        <div className="container stack">
          <h2 className="display vc-title">El mercado, por lo bajo.</h2>
          <div className="vc-grid vc-grid-240">
            {market.map((s) => (
              <div key={s.label} className="vc-stat">
                <div className={`stat-value${s.accent ? " accent" : ""}`}>{s.value}</div>
                <div className="stat-label">
                  {s.label}
                  {s.src && (
                    <>
                      {" · "}
                      <Src href={s.src} />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="vc-body">
            Construido de abajo arriba desde presupuestos públicos. Cuando un dato admitía dos
            lecturas, cogimos la peor para nosotros.
          </p>
        </div>
      </section>

      <section className="vc-section tail">
        <div className="container stack">
          <h2 className="display vc-title">El bote que ya se gasta.</h2>
          <div className="vc-table-wrap">
            <table className="vc-table">
              <thead>
                <tr>
                  <th>Partida</th>
                  <th>Importe</th>
                  <th>Fuente</th>
                </tr>
              </thead>
              <tbody>
                {spend.map((r) => (
                  <tr key={r.item}>
                    <td className="vc-table-item">{r.item}</td>
                    <td className="vc-table-amount">{r.amount}</td>
                    <td>
                      <Src href={r.src} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="vc-grid vc-grid-260">
            <div className="vc-assume">
              <div className="vc-assume-value">55-86 %</div>
              <div className="vc-a">
                del presupuesto de mitigación es capex: soterrado y conductor. Nada de eso es
                nuestro. <Src href={SRC.nardac} label="NARDAC" />
              </div>
            </div>
            <div className="vc-assume">
              <div className="vc-assume-value">14 %</div>
              <div className="vc-a">
                <strong>Supuesto 1.</strong> Tomamos el extremo bajo del opex publicado, el peor
                caso para nosotros.
              </div>
            </div>
            <div className="vc-assume">
              <div className="vc-assume-value">20 %</div>
              <div className="vc-a">
                <strong>Supuesto 2.</strong> Solo esa parte del opex es emergencia, notificación y
                coordinación.
              </div>
            </div>
          </div>
          <div className="vc-grid vc-grid-260 vc-notes">
            <div className="vc-note-card vc-a">
              <strong>Supuesto 3.</strong> Los estados con plan obligatorio fuera de California y el
              noroeste gastan lo mismo que el noroeste. Nueve estados ya lo exigen; seis legislaron
              en 2025. <Src href={SRC.nardac} label="NARDAC" />
            </div>
            <div className="vc-note-card vc-a">
              <strong>Supuesto 4.</strong> Solo el 3% del presupuesto público de incendios va a
              coordinación y comunicación.
            </div>
            <div className="vc-note-card vc-a">
              <strong>Supuesto 5.</strong> España ≈ 5 × Galicia y UE ≈ 2 × España: Iberia concentró
              casi la mitad del millón de hectáreas que ardió en la UE en 2025.
            </div>
          </div>
        </div>
      </section>

      <section className="vc-section vc-faq">
        <div className="container stack">
          <h2 className="display vc-title">20 M$ de ARR, calculados por dos caminos.</h2>
          <div className="vc-grid vc-grid-300">
            <div className="vc-path">
              <div className="stat-label">CAMINO A · DESDE EL SAM</div>
              <div className="vc-assume-value">5 % × 390 M$</div>
              <div className="vc-a">= 19,5 M$ ARR</div>
            </div>
            <div className="vc-path">
              <div className="stat-label">CAMINO B · DESDE LAS CUENTAS</div>
              <div className="vc-assume-value">100 cuentas</div>
              <div className="vc-a">
                20 utilities × 400.000 $ · 50 agencias × 150.000 $ · 30 aseguradoras × 150.000 $ =
                20,0 M$ ARR
              </div>
            </div>
          </div>
          <div className="vc-callout dark">
            <div className="vc-callout-value">0,02 %</div>
            <div className="vc-callout-text">
              Un ACV de 400.000 $ es el 0,02% del plan trienal de 6.200 M$ de SCE. El riesgo no es
              parecer caros. <Src href={SRC.sceplan} />
            </div>
          </div>
        </div>
      </section>

      <section className="vc-section">
        <div className="container stack">
          <h2 className="display vc-title">Por qué ahora.</h2>
          <div className="vc-grid vc-grid-270">
            {whyNow.map((w) => (
              <div key={w.title} className="vc-qa">
                <div className="vc-q">{w.title}</div>
                <div className="vc-a">
                  {w.text} <Src href={w.src} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vc-section dark">
        <div className="container stack">
          <h2 className="display vc-title">Para esto necesitamos 5.000 €.</h2>
          <div className="vc-grid vc-grid-230">
            {budget.map((b) => (
              <div key={b.label} className="vc-budget">
                <div className="vc-card-value">{b.value}</div>
                <div className="vc-budget-label">{b.label}</div>
              </div>
            ))}
          </div>
          <p className="vc-closing">
            El producto ya funciona. Vamos a ser los socios más baratos de vuestra cartera.
          </p>
        </div>
      </section>

      <section className="vc-section">
        <div className="container stack">
          <h2 className="display vc-title">Somos estos. Preguntadnos.</h2>
          <div className="vc-grid vc-grid-240">
            {team.map((m) => (
              <div key={m.name} className="vc-member">
                <img src={m.photo} alt={m.name} className="vc-member-photo" />
                <div>
                  <div className="vc-member-name">{m.name}</div>
                  <div className="vc-member-role">{[("role" in m ? m.role : null), m.uni].filter(Boolean).join(" — ")}</div>
                  <a href={m.linkedin} target="_blank" rel="noreferrer" className="vc-link">
                    LinkedIn →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="vc-body">El verano de 2025 lo vivimos, no lo leímos.</p>
        </div>
      </section>

      <section className="vc-section vc-faq">
        <div className="container stack">
          <h2 className="display vc-title">Lo que nos vais a preguntar.</h2>
          <div className="vc-grid vc-grid-320">
            {faq.map((f) => (
              <div key={f.q} className="vc-qa">
                <div className="vc-q">{f.q}</div>
                <div className="vc-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vc-section vc-end dark">
        <div className="container vc-end-grid">
          <div className="stack vc-end-col">
            <div className="vc-kicker">Elevator pitch · 60 s</div>
            <div className="vc-video">Vídeo del pitch · placeholder</div>
            <div className="vc-note">Placeholder: sustituir por el vídeo del pitch.</div>
          </div>
          <div className="stack vc-end-cta">
            <h2 className="display vc-title">Volved cuando queráis.</h2>
            <div className="vc-qr-wrap">
              <img src="/qr-taiafox.svg" alt="QR a taiafox-ph-five.vercel.app" className="vc-qr" />
            </div>
            <a href="/" className="vc-pill">
              Ir a la landing
            </a>
          </div>
        </div>
      </section>

      <footer className="vc-footer dark">
        <div className="container vc-footer-inner">
          <img src="/logos/taiafox-C-rounded.svg" alt="taiafox" className="vc-footer-logo" />
          <Partners className="waitlist-partners" />
        </div>
      </footer>
    </div>
  );
}
