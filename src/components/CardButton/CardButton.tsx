import React from "react";

/* ------------------------------------------------------------------ */
/*  Sisal DS - Card Button                                            */
/*  Variants: Default (sport discipline), Manifestazioni (flag+label) */
/* ------------------------------------------------------------------ */

export interface CardButtonDefaultProps {
  icon?: React.ReactNode;
  label?: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

/** Single sport-discipline chip (e.g. "Calcio") */
export function CardButtonDefault({
  icon,
  label = "Label",
  selected = false,
  onClick,
  className,
}: CardButtonDefaultProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex flex-col items-center justify-center gap-0 px-1 py-[9px] rounded-lg font-['Roboto',sans-serif] text-xs font-medium text-center w-[76px] transition-colors",
        selected
          ? "bg-[var(--appereance-surface-frame-selected,#bed62f)] text-[var(--appereance-font-color-selected,#262c2f)]"
          : "bg-transparent text-[var(--appereance-font-color-alt,#5c6063)] hover:bg-[var(--appereance-surface-frame-selected,#bed62f)]/10",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {icon && <span className="w-6 h-6 flex items-center justify-center">{icon}</span>}
      <span className="leading-[14px] mt-1 line-clamp-2">{label}</span>
    </button>
  );
}

export interface CardButtonManifestazioniProps {
  flagSrc?: string;
  sport?: string;
  label?: string;
  preferita?: boolean;
  onClick?: () => void;
  className?: string;
}

/** Championship / manifestazione card with flag icon */
export function CardButtonManifestazioni({
  flagSrc,
  sport = "Label",
  label = "Label",
  preferita = false,
  onClick,
  className,
}: CardButtonManifestazioniProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "relative flex flex-col items-center gap-1 w-[92px] h-[90px] pt-1 pb-2 px-1",
        "bg-[var(--appereance-surface-frame-default,white)] rounded-lg",
        "shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)]",
        "font-['Roboto',sans-serif]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Flag / icon */}
      <span className="w-8 h-8 flex items-center justify-center">
        {flagSrc ? (
          <img src={flagSrc} alt="" className="w-6 h-6 object-contain" />
        ) : (
          <span className="w-6 h-6 rounded-full bg-[var(--appereance-border-default-alt,#e9eaea)]" />
        )}
      </span>

      {/* Text block */}
      <span className="flex flex-col gap-[2px] text-center w-full whitespace-nowrap">
        <span className="text-[10px] leading-[12px] font-normal text-[var(--appereance-font-color-alt,#5c6063)] overflow-hidden text-ellipsis">
          {sport}
        </span>
        <span className="text-xs leading-[14px] font-medium text-[var(--appereance-font-color-active,#262c2f)] overflow-hidden text-ellipsis h-7 flex items-center justify-center">
          {label}
        </span>
      </span>

      {/* Preferita star */}
      {preferita && (
        <span className="absolute top-1 right-1 w-4 h-4 text-[var(--icon-fill-warning,#ffbf00)]">
          <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full">
            <path d="M8 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.93L8 10.47l-3.52 1.88.67-3.93L2.3 5.64l3.94-.57L8 1.5z" />
          </svg>
        </span>
      )}
    </button>
  );
}

export interface CardButtonRowProps {
  children: React.ReactNode;
  className?: string;
}

/** Horizontal scrollable row of CardButton items */
export function CardButtonRow({ children, className }: CardButtonRowProps) {
  return (
    <div
      className={[
        "flex gap-2 items-center px-4 overflow-x-auto w-full",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

/* Default export: the full component set */
export default function CardButton() {
  return { CardButtonDefault, CardButtonManifestazioni, CardButtonRow };
}
