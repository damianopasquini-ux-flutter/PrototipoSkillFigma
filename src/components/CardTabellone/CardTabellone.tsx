import React from "react";

/* ------------------------------------------------------------------ */
/*  Card / Tabellone                                                   */
/*  Figma node 14926:78278 - file 1KwGa2GwNraywm2ukpfGHe              */
/* ------------------------------------------------------------------ */

interface LabelPlayerProps {
  name?: string;
  loser?: boolean;
  qualificato?: boolean;
  bye?: boolean;
  badgeWin?: boolean;
  ritirato?: boolean;
}

function LabelPlayer({
  name = "Player",
  loser = false,
  qualificato = false,
  bye = false,
  badgeWin = false,
  ritirato = false,
}: LabelPlayerProps) {
  const textColor = loser
    ? "text-[var(--appereance-font-color-alt-2,#929597)]"
    : "text-[var(--appereance-font-color-active,#262c2f)]";

  return (
    <div className="flex items-center gap-[var(--spacing-4,4px)]">
      <span
        className={`font-['Roboto',sans-serif] font-medium text-[var(--font-size-xs,12px)] leading-[var(--font-line-height-xs,14px)] truncate ${textColor}`}
      >
        {name}
      </span>

      {!loser && qualificato && (
        <span className="font-['Roboto',sans-serif] font-normal text-[var(--font-size-xs,12px)] leading-[var(--font-line-height-xs,14px)] text-[var(--appereance-font-color-active,#262c2f)]">
          (Q)
        </span>
      )}

      {!loser && bye && (
        <span className="font-['Roboto',sans-serif] font-normal text-[var(--font-size-xs,12px)] leading-[var(--font-line-height-xs,14px)] text-[var(--appereance-font-color-active,#262c2f)]">
          (Bye)
        </span>
      )}

      {!loser && badgeWin && (
        <span className="inline-flex items-center justify-center h-[14px] px-1 rounded-[var(--badge-default-radius-default,2px)] bg-[var(--badge-default-fill-win,#1a924b)]">
          <span className="font-['Roboto',sans-serif] font-medium text-[var(--badge-default-text-size-xsm,10px)] text-[var(--badge-default-text-color-win,white)] leading-normal">
            V
          </span>
        </span>
      )}

      {loser && ritirato && (
        <span className="font-['Roboto',sans-serif] font-normal text-[var(--font-size-xs,12px)] leading-[var(--font-line-height-xs,14px)] truncate">
          (Ritirato)
        </span>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface RisultatiCardProps {
  scores?: number[][];
}

function RisultatiCard({
  scores = [
    [2, 2, 2, 2],
    [1, 1, 1, 1],
  ],
}: RisultatiCardProps) {
  return (
    <div className="flex items-center justify-end gap-[var(--spacing-4,4px)]">
      {scores[0].map((_, colIdx) => {
        const isCurrent = colIdx === scores[0].length - 1;
        return (
          <div key={colIdx} className="flex flex-col gap-1 items-center w-[10px]">
            {scores.map((row, rowIdx) => (
              <span
                key={rowIdx}
                className={`font-['Roboto',sans-serif] text-[var(--font-size-xs,12px)] leading-[var(--font-line-height-xs,14px)] text-center h-[14px] flex items-center justify-center ${
                  isCurrent
                    ? "font-bold text-[var(--appereance-font-color-active,#262c2f)]"
                    : "font-normal text-[var(--appereance-font-color-alt,#5c6063)]"
                }`}
              >
                {row[colIdx]}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
}

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
      className={`flex flex-col items-center justify-center gap-[2px] w-[52px] h-[52px] rounded-[var(--radius-default,8px)] px-[var(--spacing-8,8px)] overflow-hidden ${
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

export interface CardTabelloneProps {
  homePlayer?: string;
  awayPlayer?: string;
  dateTime?: string;
  odds?: { label: string; value: string; selected?: boolean }[];
  showOdds?: boolean;
  scores?: number[][];
  showScores?: boolean;
}

export function CardTabellone({
  homePlayer = "Player",
  awayPlayer = "Player",
  dateTime = "12/10 - 15:05",
  odds = [
    { label: "1", value: "1.55" },
    { label: "2", value: "1.55" },
  ],
  showOdds = true,
  scores,
  showScores = false,
}: CardTabelloneProps) {
  return (
    <div
      className="bg-[var(--appereance-surface-frame-default,white)] flex flex-col gap-[var(--spacing-8,0px)] items-start justify-center p-[var(--spacing-8,8px)] rounded-[var(--radius-alt,8px)] w-[272px] h-[68px]"
      style={{
        boxShadow:
          "var(--elevation-level-2-x,0px) var(--elevation-level-2-y,2px) var(--elevation-level-2-blur,8px) 0px var(--elevation-fill-elevation-10,rgba(0,0,0,0.1))",
      }}
    >
      <div className="flex items-start gap-[var(--spacing-8,8px)] w-full">
        {/* Team column */}
        <div className="flex flex-col flex-1 min-w-0 gap-[var(--spacing-4,4px)]">
          {/* Player rows */}
          <div className="flex flex-col gap-1 h-[32px] justify-center">
            <LabelPlayer name={homePlayer} />
            <LabelPlayer name={awayPlayer} />
          </div>

          {/* Time indicator */}
          <div className="flex items-center h-[16px]">
            <span className="font-['Roboto',sans-serif] font-normal text-[var(--font-size-xxs,10px)] leading-[var(--font-line-height-xxs,12px)] text-[var(--appereance-font-color-active,#262c2f)] whitespace-nowrap">
              {dateTime}
            </span>
          </div>
        </div>

        {/* Scores */}
        {showScores && scores && <RisultatiCard scores={scores} />}

        {/* Odds selection */}
        {showOdds && (
          <div className="flex items-center justify-end gap-1 shrink-0">
            {odds.map((odd, i) => (
              <OddsSelection
                key={i}
                label={odd.label}
                value={odd.value}
                selected={odd.selected}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CardTabellone;
