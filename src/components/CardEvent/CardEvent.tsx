import React from "react";

/* ------------------------------------------------------------------ */
/*  Sisal DS - Card Event Detail                                      */
/*  Shows a market type with rows of odds selection buttons            */
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
        <div className="flex items-center gap-1 pt-0">
          <span className="flex-1 text-xs font-medium leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] font-['Roboto',sans-serif]">
            {additionalInfo}
          </span>
        </div>
      )}
      <div className="flex gap-2 items-center w-full">
        {buttons.map((btn, i) => (
          <OddsButton key={i} {...btn} />
        ))}
      </div>
    </div>
  );
}

export interface CardEventProps {
  marketType?: string;
  info?: boolean;
  myCombo?: boolean;
  groups?: OddsRowProps[][];
  onInfoClick?: () => void;
  className?: string;
}

export function CardEvent({
  marketType = "Market type",
  info = true,
  myCombo = false,
  groups = [],
  onInfoClick,
  className,
}: CardEventProps) {
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
      {/* Title row */}
      <div className="flex items-center justify-between h-6 w-full">
        <span className="flex-1 text-sm font-medium leading-[18px] text-[var(--appereance-font-color-active,#262c2f)]">
          {marketType}
        </span>
        {myCombo && (
          <span className="inline-flex items-center h-[14px] px-1 rounded-[2px] bg-[var(--badge-default-fill-new,#bed62f)] text-[10px] font-medium text-[var(--badge-default-text-color-bg-light-default,#262c2f)]">
            My Combo
          </span>
        )}
        {info && (
          <button
            type="button"
            onClick={onInfoClick}
            className="w-6 h-6 flex items-center justify-center text-[var(--appereance-font-color-alt,#5c6063)]"
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
    </div>
  );
}

export { CardEvent as default };
