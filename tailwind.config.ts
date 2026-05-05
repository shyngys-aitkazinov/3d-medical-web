import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          50: "#f5f0e6",
          100: "#e8dfcc",
          200: "#c8bda6",
          300: "#8e8470",
          400: "#5d5645",
          500: "#3a3528",
          900: "#0a0e1a",
          950: "#05070d",
        },
        accent: {
          DEFAULT: "#22d3ee",
          warm: "#f5b14d",
          deep: "#0e7490",
        },
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "47%": { opacity: "1" },
          "48%": { opacity: "0.4" },
          "49%": { opacity: "1" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        flicker: "flicker 6s ease-in-out infinite",
        rise: "rise 700ms cubic-bezier(0.2, 0.8, 0.2, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
