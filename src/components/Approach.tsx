import { SectionLabel } from "./SectionLabel";

const pillars = [
  {
    code: "A",
    title: "Native 3D representations",
    body: "Our backbones operate on the volume directly — 3D convolutions, 3D self-attention, depth-aware patch embeddings — so spatial relationships across slices are first-class, not an afterthought of slice-by-slice 2D nets.",
  },
  {
    code: "B",
    title: "Vessel-aware attention",
    body: "Aneurysms occur on vessels. We bias compute toward the vascular tree using soft segmentation priors and learned attention gates, so the model spends its parameters where pathology can actually live.",
  },
  {
    code: "C",
    title: "Calibrated uncertainty",
    body: "A clinical second-read is only useful if the model knows when not to speak. We pair detection with deep-ensemble and conformal-prediction calibration so triage thresholds map cleanly to acceptable miss-rates.",
  },
  {
    code: "D",
    title: "Benchmarked end-to-end",
    body: "We benchmark against the RSNA Intracranial Aneurysm Detection challenge and our own held-out CTA cohorts, with detection, localisation, and reader-time metrics — not just AUC on a slice classifier.",
  },
];

const pipeline = [
  { step: "I/O", label: "DICOM volume in" },
  { step: "Pre", label: "Skull-strip · vessel prior" },
  { step: "Net", label: "3D backbone + attention" },
  { step: "Cal", label: "Ensemble + conformal" },
  { step: "Out", label: "Ranked candidates · heatmap" },
];

export function Approach() {
  return (
    <section
      id="approach"
      className="scroll-mt-16 border-t hairline bg-ink-950/40 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel
          number="02"
          kicker="The approach"
          title="Volumetric models, vessel-aware compute."
        />

        {/* Pipeline strip */}
        <div className="mb-16 overflow-x-auto">
          <ol className="flex min-w-full items-stretch gap-0 border hairline">
            {pipeline.map((p, i) => (
              <li
                key={p.step}
                className={`flex-1 px-5 py-5 ${
                  i < pipeline.length - 1 ? "border-r hairline" : ""
                }`}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  {p.step}
                </p>
                <p className="mt-2 text-xs leading-snug text-ink-50/70 md:text-sm">
                  {p.label}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
          {pillars.map((p) => (
            <article key={p.code} className="border-l hairline pl-6">
              <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-50/55">
                <span className="text-accent">{p.code}</span>
                <span>Pillar</span>
              </div>
              <h3 className="font-display text-2xl font-light leading-snug text-ink-50 md:text-3xl">
                {p.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-50/70">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
