import React from "react";

/* ------------------------------------------------------------------ */
/*  Card / Player                                                      */
/*  Figma node 5552:45958 – file 1KwGa2GwNraywm2ukpfGHe               */
/* ------------------------------------------------------------------ */

type PlayerBadge = {
  yellowCards?: number;
  redCards?: number;
  goals?: number;
  autogoals?: number;
  substitution?: boolean;
  marketCount?: number;
};

export type CardPlayerProps = {
  className?: string;
  playerName?: string;
  teamName?: string;
  playerImageUrl?: string;
  type?: "default" | "basket";
  showTitolarita?: boolean;
  titolaritaPercent?: number;
  oddsLabel?: string;
  oddsValue?: string;
  badges?: PlayerBadge;
};

export function CardPlayer({
  className,
  playerName = "Player",
  teamName = "Team",
  playerImageUrl = "",
  type = "default",
  showTitolarita = false,
  titolaritaPercent = 84,
  oddsLabel = "1",
  oddsValue = "1.55",
  badges = { marketCount: 99 },
}: CardPlayerProps) {
  const progressColor =
    titolaritaPercent >= 85
      ? "bg-[var(--progress-bar-fantacalcio-85-100,#bed62f)]"
      : titolaritaPercent >= 50
        ? "bg-[#ff8e0d]"
        : "bg-[#e73947]";

  return (
    <div
      className={
        className ||
        "bg-[var(--appereance-surface-frame-default,white)] border border-[var(--appereance-border-default-active,#c9cacb)] flex gap-2 items-center p-2 rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)] w-[328px]"
      }
    >
      {/* Player avatar area */}
      <div className="flex flex-col gap-2 items-center justify-center shrink-0 w-[52px]">
        <div className="relative w-10 h-10 rounded-full">
          {/* Badges (cards, goals, etc.) */}
          {badges.yellowCards != null && (
            <div className="absolute -left-1 -top-[1px] w-3 h-3 z-10">
              <div className="absolute inset-[18%_28%] bg-[var(--icon-fill-warning,#ffbf00)] rounded-[3px] w-[7px] h-[10px]" />
            </div>
          )}
          {badges.redCards != null && (
            <div className="absolute left-0 -top-[3px] w-3 h-3 z-10">
              <div className="absolute inset-[18%_28%] bg-[var(--icon-fill-error,#e73947)] rounded-[3px] w-[7px] h-[10px]" />
            </div>
          )}

          {/* Player image */}
          <div className="w-10 h-10 rounded-full bg-[#e9eaea] overflow-hidden flex items-center justify-center">
            {playerImageUrl ? (
              <img src={playerImageUrl} alt={playerName} className="w-11 h-11 object-cover" />
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" fill="#929597" />
                <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" fill="#929597" />
              </svg>
            )}
          </div>

          {/* Market count badge */}
          {badges.marketCount != null && (
            <div className="absolute -bottom-0 -right-0 bg-[var(--appereance-badge-field-fill,white)] border border-[var(--appereance-badge-field-border,#5c6063)] flex items-center justify-center h-[14px] px-1 rounded-lg z-10">
              <span className="font-medium text-[10px] leading-[12px] text-[var(--appereance-font-color-selected,#262c2f)] text-right font-['Roboto',sans-serif]">
                + {badges.marketCount}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Player info */}
      <div className="flex flex-col flex-1 gap-1 items-start min-w-0">
        <span className="font-medium text-sm leading-[18px] text-[var(--appereance-font-color-active,#262c2f)] w-[138px] truncate font-['Roboto',sans-serif]">
          {playerName}
        </span>
        {!showTitolarita && (
          <span className="font-normal text-xs leading-[14px] text-[var(--appereance-font-color-alt,#5c6063)] font-['Roboto',sans-serif]">
            {teamName}
          </span>
        )}
        {showTitolarita && (
          <div className="flex gap-2 items-center h-[14px] w-[120px]">
            {/* Progress bar */}
            <div className="bg-[var(--appereance-widget-opta-tracker-progressa-bar-fill-active,#e9eaea)] flex items-center h-2 rounded-[1000px] w-[89px] pr-[10px]">
              <div
                className={`h-2 rounded-[10000px] ${progressColor}`}
                style={{ width: `${titolaritaPercent}%` }}
              />
            </div>
            <span className="font-medium text-xs leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] font-['Roboto',sans-serif]">
              {titolaritaPercent}%
            </span>
          </div>
        )}
      </div>

      {/* Odds or add button */}
      {type === "default" && (
        <div className="bg-[var(--appereance-odds-selection-fill-active,#e9eaea)] flex flex-col gap-[2px] items-center justify-center h-9 overflow-hidden px-2 rounded-lg shrink-0 w-14">
          <span className="font-normal text-xs leading-[14px] text-[var(--appereance-odds-selection-text-active,#262c2f)] text-center font-['Roboto',sans-serif]">
            {oddsLabel}
          </span>
          <span className="font-bold text-xs leading-[100%] text-[var(--appereance-odds-selection-text-active,#262c2f)] text-center font-['Roboto',sans-serif]">
            {oddsValue}
          </span>
        </div>
      )}
      {type === "basket" && (
        <div className="w-6 h-6 shrink-0 flex items-center justify-center cursor-pointer">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 0v12M0 6h12" stroke="#262c2f" strokeWidth="2" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default CardPlayer;
