import React from "react";

/* ------------------------------------------------------------------ */
/*  Component 3 - Platform Badge                                       */
/*  Figma node 14394:54684 - file 1KwGa2GwNraywm2ukpfGHe              */
/* ------------------------------------------------------------------ */

export type PlatformVariant = "Piattaforma" | "Digital Betting" | "Digital Cross";

const VARIANT_STYLES: Record<
  PlatformVariant,
  { bg: string; text: string; label: string }
> = {
  Piattaforma: {
    bg: "bg-[var(--color-status-success-100,#e6fff0)]",
    text: "text-[var(--color-accent-primary-medium-500,#0b7d3e)]",
    label: "Piattaforma betting",
  },
  "Digital Betting": {
    bg: "bg-[var(--color-accent-secondary-purple-100,#e3d5ef)]",
    text: "text-[var(--color-accent-secondary-purple-500,#722dad)]",
    label: "Digital betting",
  },
  "Digital Cross": {
    bg: "bg-[var(--color-accent-secondary-orange-100,#ffe8cf)]",
    text: "text-[var(--color-accent-secondary-orange-500,#ff8e0d)]",
    label: "Digital cross app",
  },
};

/* ------------------------------------------------------------------ */

export interface Component3Props {
  variant?: PlatformVariant;
  className?: string;
}

export function Component3({
  variant = "Piattaforma",
  className,
}: Component3Props) {
  const style = VARIANT_STYLES[variant];

  return (
    <div
      className={`inline-flex items-center justify-center p-[10px] rounded-[4px] ${style.bg} ${className ?? ""}`}
    >
      <span
        className={`font-['Roboto',sans-serif] font-medium text-[var(--font-size-sm,14px)] leading-normal text-center whitespace-nowrap ${style.text}`}
      >
        {style.label}
      </span>
    </div>
  );
}

export default Component3;
