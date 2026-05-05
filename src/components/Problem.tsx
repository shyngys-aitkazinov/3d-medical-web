import { SectionLabel } from "./SectionLabel";

const failures = [
  "Oblique vessels and structures that cross the slice plane",
  "Small lesions whose shape only resolves across slices",
  "Anatomical context that lives in the volume, not any one frame",
];

export function Problem() {
  return (
    <section id="problem" className="scroll-mt-16 border-t hairline py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel
          number="01"
          kicker="The problem"
          title="The third dimension is missing from medical AI."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="font-display text-2xl font-light leading-snug text-ink-50/90 md:text-3xl">
              Modern radiology is volumetric. <span className="italic">Most
              medical AI is not.</span>
            </p>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-ink-50/75 md:text-lg">
              <p>
                CT, MRI, ultrasound — the studies that actually drive clinical
                decisions come off the scanner as three-dimensional volumes,
                not flat images. Yet the deep-learning work that reaches the
                clinic still tends to treat them as stacks of pictures: a 2D
                classifier called once per slice, a heatmap stitched back
                together at the end, the third dimension quietly flattened
                away.
              </p>
              <p>
                That gap is where pathology hides. The findings radiologists
                care about are rarely confined to a single slice — they are
                shapes, curvatures, and continuities that only make sense
                across depth.
              </p>
              <p>
                We build deep-learning systems that read the volume directly,
                and we focus on the imaging problems where the slice-by-slice
                approach hurts most. Detection of intracranial aneurysms from
                CT angiography is our first target — chosen because it is hard
                in exactly the right way.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="border hairline p-8">
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-50/55">
                Where 2D struggles
              </p>
              <ul className="divide-y divide-ink-50/10">
                {failures.map((f, i) => (
                  <li key={f} className="flex items-baseline gap-5 py-5">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base leading-snug text-ink-50/80">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
