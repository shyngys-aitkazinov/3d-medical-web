import { SphLogo } from "./SphLogo";
import { VesselTree } from "./VesselTree";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* top hairline + meta bar */}
      <div className="border-b hairline">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-50/60">
          <span className="text-ink-50">3D-Medical</span>
          <span className="hidden md:inline">Volumetric ML for Radiology</span>
          <a
            href="https://sph.ethz.ch/"
            target="_blank"
            rel="noreferrer"
            aria-label="ETH Student Project House"
            className="group flex items-center gap-3 rounded-sm border border-ink-50/15 bg-ink-50/5 px-3 py-2 transition-colors hover:border-accent/50 hover:bg-ink-50/10"
          >
            <span className="hidden text-ink-50/55 group-hover:text-ink-50/80 sm:inline">
              Built at
            </span>
            <SphLogo className="h-7 w-auto text-ink-50" />
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:py-28 lg:grid-cols-12 lg:gap-8">
        {/* Left column — copy */}
        <div className="lg:col-span-7">
          <div className="mb-8 flex items-baseline gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-50/60">
            <span className="text-accent">00</span>
            <span className="h-px w-10 bg-ink-50/30" />
            <span>Zürich · 2026</span>
          </div>
          <h1 className="font-display text-[clamp(2.75rem,7vw,5.75rem)] font-light leading-[0.98] tracking-tightest text-ink-50">
            Reading the brain
            <br />
            <span className="italic">in three dimensions.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-50/75 md:text-xl">
            We build deep-learning systems that ingest a CT angiography volume
            as a true 3D signal — and surface intracranial aneurysms before
            they make the news.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="mailto:saitkazinov@3d-medical.ch"
              className="group inline-flex items-center gap-3 rounded-none border-b border-accent pb-1 text-sm font-medium uppercase tracking-[0.18em] text-ink-50 transition-colors hover:text-accent"
            >
              Open a conversation
              <svg
                aria-hidden
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#problem"
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-50/60 underline-offset-8 transition-colors hover:text-accent hover:underline"
            >
              ↓ Read the dossier
            </a>
          </div>

          {/* metadata strip */}
          <dl className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t hairline pt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-50/55">
            <div>
              <dt className="mb-2 text-ink-50/40">Modality</dt>
              <dd className="text-ink-50">CTA · 3D</dd>
            </div>
            <div>
              <dt className="mb-2 text-ink-50/40">Pathology</dt>
              <dd className="text-ink-50">Aneurysm</dd>
            </div>
            <div>
              <dt className="mb-2 text-ink-50/40">Stage</dt>
              <dd className="text-ink-50">Research</dd>
            </div>
          </dl>
        </div>

        {/* Right column — illustration */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto aspect-[6/7] w-full max-w-[420px] lg:max-w-none">
            <VesselTree className="h-full w-full animate-flicker" />
          </div>
          <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-ink-50/45">
            Fig. 01 · Stylised vascular tree, candidate marked
          </p>
        </div>
      </div>
    </section>
  );
}
