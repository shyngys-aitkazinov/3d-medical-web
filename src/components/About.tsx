import { SectionLabel } from "./SectionLabel";
import { EmailLink } from "./EmailLink";

const credits = [
  { year: "2025–", role: "ML Research Engineer", org: "Lyceum Technology" },
  { year: "2024–25", role: "ML Research Assistant", org: "Align Tech (3D dental)" },
  { year: "2022–24", role: "Data Scientist & Engineer", org: "Glassdome (industrial AI)" },
  { year: "2023–", role: "M.Sc. Data Science", org: "ETH Zürich" },
  { year: "2017–22", role: "B.Sc. EECS · Dean's List", org: "KAIST, South Korea" },
];

type LinkSpec =
  | { kind: "external"; label: string; href: string }
  | { kind: "email"; label: string; email: string };

const links: LinkSpec[] = [
  {
    kind: "external",
    label: "LinkedIn / shyngys-aitkazinov",
    href: "https://www.linkedin.com/in/shyngys-aitkazinov-00496b193/",
  },
  {
    kind: "external",
    label: "GitHub / shyngys-aitkazinov",
    href: "https://github.com/shyngys-aitkazinov",
  },
  {
    kind: "email",
    label: "saitkazinov@3d-medical.ch",
    email: "saitkazinov@3d-medical.ch",
  },
  {
    kind: "email",
    label: "saitkazinov@ethz.ch",
    email: "saitkazinov@ethz.ch",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t hairline py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel
          number="03"
          kicker="The founder"
          title="One engineer, four years of 3D ML in production."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <figure className="relative aspect-square w-full max-w-[320px] overflow-hidden border hairline">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/founder.jpg"
                alt="Portrait of Shyngys Aitkazinov"
                width={710}
                height={710}
                className="h-full w-full object-cover"
              />
              <figcaption className="absolute bottom-2 left-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-50/70 mix-blend-difference">
                Founder · 2026
              </figcaption>
            </figure>
            <p className="mt-6 font-display text-2xl font-light text-ink-50">
              Shyngys Aitkazinov
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-50/55">
              Founder · M.Sc. Data Science, ETH Zürich
            </p>
          </div>

          <div className="lg:col-span-8">
            <p className="font-display text-2xl font-light leading-snug text-ink-50/90 md:text-3xl">
              Trained at <span className="italic">KAIST</span> and{" "}
              <span className="italic">ETH Zürich</span>. Four years of shipping
              ML systems where the data is awkward and the cost of being wrong
              is real.
            </p>
            <div className="mt-8 grid gap-8 text-base leading-relaxed text-ink-50/75 md:grid-cols-2 md:text-lg">
              <p>
                At Align Tech I built spatial-CNN pipelines that find margin
                lines on 3-D dental meshes — geometry-first ML, mesh in,
                landmarks out. At Lyceum Technology I shipped GPU-resource
                prediction for arbitrary deep-learning jobs straight from
                source code.
              </p>
              <p>
                Before that, two years at Glassdome on production-grade anomaly
                detection over industrial sensor streams, plus an LLM-powered
                analytics chatbot that helped close two new clients. 3D-Medical
                is where that body of work meets the clinic.
              </p>
            </div>

            <div className="mt-12 border-t hairline pt-8">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-50/55">
                Selected work
              </p>
              <ul className="divide-y divide-ink-50/10">
                {credits.map((c) => (
                  <li
                    key={`${c.year}-${c.org}`}
                    className="grid grid-cols-12 gap-4 py-4 text-sm md:text-base"
                  >
                    <span className="col-span-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-50/55 md:col-span-2">
                      {c.year}
                    </span>
                    <span className="col-span-9 text-ink-50 md:col-span-5">
                      {c.role}
                    </span>
                    <span className="col-span-12 text-ink-50/65 md:col-span-5 md:text-right">
                      {c.org}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {links.map((l) => {
                const cls =
                  "font-mono text-[11px] uppercase tracking-[0.22em] text-ink-50/65 underline-offset-8 transition-colors hover:text-accent hover:underline";
                if (l.kind === "email") {
                  return (
                    <EmailLink key={l.email} email={l.email} className={cls}>
                      → {l.label}
                    </EmailLink>
                  );
                }
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className={cls}
                  >
                    → {l.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
