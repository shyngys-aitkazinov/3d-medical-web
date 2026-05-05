import { SphLogo } from "./SphLogo";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shyngys-aitkazinov-00496b193/",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/shyngys-aitkazinov",
    external: true,
  },
  {
    label: "saitkazinov@3d-medical.ch",
    href: "mailto:saitkazinov@3d-medical.ch",
    external: false,
  },
  {
    label: "saitkazinov@ethz.ch",
    href: "mailto:saitkazinov@ethz.ch",
    external: false,
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t hairline pb-10 pt-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-3xl font-light tracking-tightest text-ink-50">
              3D-Medical
            </p>
            <p className="mt-3 max-w-md text-sm text-ink-50/65">
              Volumetric machine learning for radiology. Built at ETH Zürich
              Student Project House.
            </p>
            <a
              href="https://sph.ethz.ch/"
              target="_blank"
              rel="noreferrer"
              aria-label="ETH Student Project House"
              className="mt-6 inline-flex items-center gap-4 rounded-sm border border-ink-50/15 bg-ink-50/5 px-4 py-3 transition-colors hover:border-accent/50 hover:bg-ink-50/10"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-50/55">
                Built at
              </span>
              <SphLogo className="h-9 w-auto text-ink-50" />
            </a>
          </div>

          <div className="md:col-span-4">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-50/55">
              Contact
            </p>
            <ul className="space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    {...(l.external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    className="text-ink-50/75 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-50/55">
              Index
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#problem" className="text-ink-50/75 transition-colors hover:text-accent">
                  01 — The problem
                </a>
              </li>
              <li>
                <a href="#approach" className="text-ink-50/75 transition-colors hover:text-accent">
                  02 — The approach
                </a>
              </li>
              <li>
                <a href="#about" className="text-ink-50/75 transition-colors hover:text-accent">
                  03 — The founder
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t hairline pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-50/45 md:flex-row md:items-center">
          <span>© {year} · 3D-Medical · Zürich</span>
          <span>Volumetric ML for Radiology</span>
        </div>
      </div>
    </footer>
  );
}
