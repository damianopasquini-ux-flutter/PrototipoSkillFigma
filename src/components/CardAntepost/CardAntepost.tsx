import React from "react";

/* ------------------------------------------------------------------ */
/*  Sisal DS - Card Antepost                                          */
/*  Pre-match / future event card with date, market and odds groups   */
/* ------------------------------------------------------------------ */

export interface OddsButtonProps {
  label?: string;
  odds?: string;
  selected?: boolean;
  onClick?: () => void;
}

function OddsButton({ label = "1", odds = "1.55", selected = false, onClick }: OddsButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex flex-1 flex-col items-center justify-center gap-[2px] h-9 px-2 rounded-lg overflow-hidden",
        "font-['Roboto',sans-serif] text-xs text-center whitespace-nowrap transition-colors",
        selected
          ? "bg-[var(--appereance-odds-selection-fill-selected,#262c2f)] text-[var(--appereance-odds-selection-text-selected,#bed62f)]"
          : "bg-[var(--appereance-odds-selection-fill-active,#e9eaea)] text-[var(--appereance-odds-selection-text-active,#262c2f)]",
      ].join(" ")}
    >
      <span className="font-normal leading-[14px]">{label}</span>
      <span className="font-bold leading-[100%]">{odds}</span>
    </button>
  );
}

export interface OddsRowProps {
  additionalInfo?: string;
  buttons: OddsButtonProps[];
}

function OddsRow({ additionalInfo, buttons }: OddsRowProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {additionalInfo && (
        <span className="text-xs font-medium leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] font-['Roboto',sans-serif]">
          {additionalInfo}
        </span>
      )}
      <div className="flex gap-2 items-center w-full">
        {buttons.map((btn, i) => (
          <OddsButton key={i} {...btn} />
        ))}
      </div>
    </div>
  );
}

export interface CardAntepostProps {
  dateTime?: string;
  marketType?: string;
  info?: boolean;
  onInfoClick?: () => void;
  groups?: OddsRowProps[][];
  link?: { label: string; href: string };
  className?: string;
}

export function CardAntepost({
  dateTime = "22/05 - 20:45",
  marketType = "Market type",
  info = false,
  onInfoClick,
  groups = [],
  link,
  className,
}: CardAntepostProps) {
  return (
    <div
      className={[
        "flex flex-col items-start gap-4 p-2 w-[312px] rounded-lg",
        "bg-[var(--appereance-surface-frame-default,white)]",
        "shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)]",
        "font-['Roboto',sans-serif]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Title */}
      <div className="flex gap-4 items-start w-full">
        <div className="flex flex-1 flex-col gap-1 font-medium min-w-0">
          <span className="text-[10px] leading-[18px] text-[var(--appereance-font-color-alt-2,#929597)]">
            {dateTime}
          </span>
          <span className="text-sm leading-[18px] text-[var(--appereance-font-color-active,#262c2f)]">
            {marketType}
          </span>
        </div>
        {info && (
          <button
            type="button"
            onClick={onInfoClick}
            className="w-6 h-6 flex items-center justify-center shrink-0 text-[var(--appereance-font-color-alt,#5c6063)]"
            aria-label="Info"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
          </button>
        )}
      </div>

      {/* Odds groups */}
      {groups.map((group, gi) => (
        <div key={gi} className="flex flex-col gap-2 w-full">
          {group.map((row, ri) => (
            <OddsRow key={ri} {...row} />
          ))}
        </div>
      ))}

      {/* Link */}
      {link && (
        <div className="flex items-center justify-center w-full">
          <a
            href={link.href}
            className="text-xs font-medium leading-[14px] text-[var(--font-color-link,#00653b)] underline"
          >
            {link.label}
          </a>
        </div>
      )}
    </div>
  );
}

export { CardAntepost as default };
