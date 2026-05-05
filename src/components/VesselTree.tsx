export function VesselTree({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 700"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stylised vascular tree of the brain, with one vessel marked as a candidate aneurysm"
      className={className}
    >
      <defs>
        <linearGradient id="vt-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#0e7490" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id="vt-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#22d3ee" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* containing skull silhouette — soft, abstract */}
      <ellipse
        cx="300"
        cy="320"
        rx="220"
        ry="270"
        fill="none"
        stroke="rgba(245,240,230,0.10)"
        strokeWidth="1"
      />
      <ellipse
        cx="300"
        cy="320"
        rx="180"
        ry="220"
        fill="none"
        stroke="rgba(245,240,230,0.05)"
        strokeWidth="1"
        strokeDasharray="2 6"
      />

      {/* main carotid trunk rising from base */}
      <g
        fill="none"
        stroke="url(#vt-stroke)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M300 600 C 300 540, 300 500, 300 460" />
        {/* circle of Willis-ish ring */}
        <path d="M300 460 C 240 440, 200 420, 220 380 C 250 350, 290 360, 300 380" />
        <path d="M300 460 C 360 440, 400 420, 380 380 C 350 350, 310 360, 300 380" />

        {/* left branch tree */}
        <path d="M220 380 C 180 360, 150 340, 150 300" />
        <path d="M150 300 C 150 270, 130 240, 110 220" />
        <path d="M150 300 C 170 280, 200 260, 200 230" />
        <path d="M110 220 C 95 205, 85 190, 95 170" />
        <path d="M110 220 C 100 200, 80 190, 70 175" />
        <path d="M200 230 C 190 215, 195 200, 210 195" />
        <path d="M200 230 C 215 220, 230 210, 240 200" />

        {/* right branch tree */}
        <path d="M380 380 C 420 360, 450 340, 450 300" />
        <path d="M450 300 C 450 270, 470 240, 490 220" />
        <path d="M450 300 C 430 280, 400 260, 400 230" />
        <path d="M490 220 C 505 205, 515 190, 505 170" />
        <path d="M490 220 C 500 200, 520 190, 530 175" />
        <path d="M400 230 C 410 215, 405 200, 390 195" />
        <path d="M400 230 C 385 220, 370 210, 360 200" />

        {/* lower-anterior small branches */}
        <path d="M300 600 C 270 590, 250 580, 240 560" />
        <path d="M300 600 C 330 590, 350 580, 360 560" />
        <path d="M240 560 C 230 545, 220 535, 215 520" />
        <path d="M360 560 C 370 545, 380 535, 385 520" />

        {/* anterior loop */}
        <path d="M260 410 C 270 400, 290 395, 300 405" />
        <path d="M340 410 C 330 400, 310 395, 300 405" />
      </g>

      {/* candidate aneurysm marker — single asymmetric bulge */}
      <g>
        <circle cx="110" cy="220" r="40" fill="url(#vt-glow)" />
        <circle
          cx="110"
          cy="220"
          r="9"
          fill="#0a0e1a"
          stroke="#22d3ee"
          strokeWidth="1.5"
        />
        <circle
          cx="110"
          cy="220"
          r="20"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="0.8"
          strokeDasharray="1 3"
        />
        <line
          x1="110"
          y1="220"
          x2="42"
          y2="220"
          stroke="rgba(245,240,230,0.45)"
          strokeWidth="0.8"
        />
        <line
          x1="42"
          y1="220"
          x2="42"
          y2="240"
          stroke="rgba(245,240,230,0.45)"
          strokeWidth="0.8"
        />
      </g>

      {/* technical labels */}
      <g
        fill="rgba(245,240,230,0.55)"
        fontFamily="var(--font-mono), ui-monospace, monospace"
        fontSize="9"
        letterSpacing="0.08em"
      >
        <text x="14" y="234">CANDIDATE</text>
        <text x="14" y="246">A-COMM · 3.4 mm</text>
        <text x="14" y="22">CTA · 0.6 mm slice</text>
        <text x="14" y="36" fillOpacity="0.4">VOL 512 × 512 × 220</text>
        <text x="500" y="22" textAnchor="end">PT-0184</text>
        <text x="500" y="36" textAnchor="end" fillOpacity="0.4">2026-04-12</text>
      </g>

      {/* corner crosshairs */}
      <g stroke="rgba(245,240,230,0.25)" strokeWidth="0.8">
        <path d="M10 10 H 28 M 10 10 V 28" fill="none" />
        <path d="M590 10 H 572 M 590 10 V 28" fill="none" />
        <path d="M10 690 H 28 M 10 690 V 672" fill="none" />
        <path d="M590 690 H 572 M 590 690 V 672" fill="none" />
      </g>
    </svg>
  );
}
