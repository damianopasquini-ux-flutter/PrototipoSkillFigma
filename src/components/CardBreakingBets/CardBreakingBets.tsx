import React from "react";

/* ------------------------------------------------------------------ */
/*  Card / Breaking Bets (Monoquota)                                   */
/*  Figma node 7776:130200 - file 1KwGa2GwNraywm2ukpfGHe              */
/* ------------------------------------------------------------------ */

interface OddsSelectionProps {
  label?: string;
  value?: string;
  selected?: boolean;
}

function OddsSelection({
  label = "1",
  value = "1.55",
  selected = false,
}: OddsSelectionProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-[2px] w-[52px] h-[52px] rounded-[var(--radius-default,8px)] px-[var(--spacing-8,8px)] overflow-hidden shrink-0 ${
        selected
          ? "bg-[var(--appereance-odds-selection-fill-selected,#262c2f)] text-[var(--appereance-odds-selection-text-selected,white)]"
          : "bg-[var(--appereance-odds-selection-fill-active,#e9eaea)] text-[var(--appereance-odds-selection-text-active,#262c2f)]"
      }`}
    >
      <span className="font-['Roboto',sans-serif] font-normal text-[var(--font-size-xs,12px)] leading-[var(--font-line-height-xs,14px)]">
        {label}
      </span>
      <span className="font-['Roboto',sans-serif] font-bold text-[var(--font-size-xs,12px)] leading-[100%]">
        {value}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export interface CardBreakingBetsProps {
  text?: string;
  odds?: { label: string; value: string; selected?: boolean };
}

export function CardBreakingBets({
  text = "Atque omnium primum ad cursus lunae in duodecim menses discribit annum",
  odds = { label: "1", value: "1.55" },
}: CardBreakingBetsProps) {
  return (
    <div
      className="bg-[var(--appereance-surface-frame-default,white)] flex flex-col gap-[var(--spacing-8,0px)] items-start p-[var(--spacing-8,8px)] rounded-[var(--radius-alt,8px)] w-[280px] min-w-[280px] h-[68px] max-h-[68px]"
      style={{
        boxShadow:
          "var(--elevation-level-2-x,0px) var(--elevation-level-2-y,2px) var(--elevation-level-2-blur,8px) 0px var(--elevation-fill-elevation-10,rgba(0,0,0,0.1))",
      }}
    >
      <div className="flex items-center gap-[var(--spacing-8,8px)] flex-1 w-full min-h-0">
        {/* Description text */}
        <span className="font-['Roboto',sans-serif] font-medium text-[var(--font-size-xs,12px)] leading-[var(--font-line-height-xs,14px)] text-[var(--appereance-font-color-active,#262c2f)] flex-1 min-w-0 overflow-hidden text-ellipsis line-clamp-3">
          {text}
        </span>

        {/* Single odds button */}
        <OddsSelection
          label={odds.label}
          value={odds.value}
          selected={odds.selected}
        />
      </div>
    </div>
  );
}

export default CardBreakingBets;
