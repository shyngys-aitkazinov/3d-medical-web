"use client";

import { useState, type ReactNode } from "react";

export function EmailLink({
  email,
  className,
  children,
}: {
  email: string;
  className?: string;
  children?: ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <a
      href={`mailto:${email}`}
      data-email={email}
      onClick={() => {
        if (typeof navigator !== "undefined" && navigator.clipboard) {
          navigator.clipboard.writeText(email).catch(() => {});
        }
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      }}
      className={className}
    >
      {children ?? email}
      {copied && (
        <span
          aria-live="polite"
          className="ml-2 inline-block whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.18em] text-accent"
        >
          ✓ Copied
        </span>
      )}
    </a>
  );
}
