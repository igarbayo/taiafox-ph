/* eslint-disable @next/next/no-img-element */
import Partners from "@/components/Partners";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <img src="/logos/taiafox-C-rounded.svg" alt="taiafox" className="header-logo" />
          <a href="#waitlist" className="header-cta">
            Join the waitlist
          </a>
        </div>
      </header>

      <section className="hero dark">
        <div className="container stack">
          <h1>Crisis response in real time.</h1>
          <p className="hero-lead">
            taiafox filters a hundred incoming messages down to the three that matter, coordinates
            responders by voice, and re-plans in under a second when the fire turns.
          </p>
          <Partners />
          <div className="hero-shot">
            <div className="frame">
              <img src="/shots/map.png" alt="Mapa en directo de taiafox" />
            </div>
          </div>
        </div>
      </section>

      <section className="feature">
        <div className="container stack">
          <div className="headline-row">
            <h2 className="display">100 messages in.</h2>
            <span className="display accent">3 matter.</span>
          </div>
          <div className="eyebrow">PRIORITY QUEUE · LIVE</div>
          <div className="frame">
            <img src="/shots/queue.png" alt="Cola de prioridad" />
          </div>
        </div>
      </section>

      <section className="feature tail">
        <div className="container stack">
          <h2 className="display wrap">Every fact, every change, on screen.</h2>
          <div className="eyebrow">OBSERVED · INFERRED · ASSUMED</div>
          <div className="frame">
            <img src="/shots/facts.png" alt="Hechos y cambios" />
          </div>
        </div>
      </section>

      <section className="principle dark">
        <div className="container stack">
          <h2>The AI decides the priorities. It never assigns the ambulances.</h2>
          <div className="grid3 pipeline">
            <div>LLM → policy</div>
            <div>SOLVER → plan</div>
            <div>VERIFIER → veto</div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container grid3">
          <div className="stat">
            <div className="stat-value">&lt; 1s</div>
            <div className="stat-label">CALL → ACTION</div>
          </div>
          <div className="stat">
            <div className="stat-value accent">100 → 3</div>
            <div className="stat-label">MESSAGES THAT MATTER</div>
          </div>
          <div className="stat">
            <div className="stat-value">µs</div>
            <div className="stat-label">SOLVER</div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="waitlist dark">
        <div className="inner">
          <img src="/logos/taiafox-C-rounded.svg" alt="taiafox" className="waitlist-logo" />
          <h2>Join the waitlist.</h2>
          <p>
            We are onboarding a first group of emergency teams. Leave your email and we will get in
            touch.
          </p>
          <WaitlistForm />
          <Partners className="waitlist-partners" />
        </div>
      </section>
    </div>
  );
}
