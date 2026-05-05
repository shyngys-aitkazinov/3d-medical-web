import { SphLogo } from "./SphLogo";
import { EmailLink } from "./EmailLink";

type LinkSpec =
  | { kind: "external"; label: string; href: string }
  | { kind: "email"; label: string; email: string };

const links: LinkSpec[] = [
  {
    kind: "external",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shyngys-aitkazinov-00496b193/",
  },
  {
    kind: "external",
    label: "GitHub",
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
              {links.map((l) => {
                const cls = "text-ink-50/75 transition-colors hover:text-accent";
                if (l.kind === "email") {
                  return (
                    <li key={l.email}>
                      <EmailLink email={l.email} className={cls}>
                        {l.label}
                      </EmailLink>
                    </li>
                  );
                }
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className={cls}
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
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
