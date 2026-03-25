import React from "react";

/* ------------------------------------------------------------------ */
/*  Sisal DS - Card Bet Builder (SGP)                                 */
/*  Same Game Parlay card with header, bullet-point selections, odds  */
/* ------------------------------------------------------------------ */

/* ---------- Sub-components ---------- */

export interface MatchHeaderProps {
  sportIcon?: React.ReactNode;
  sportLabel?: string;
  streaming?: boolean;
  marketCount?: number;
}

function MatchHeader({ sportIcon, sportLabel = "Label", streaming = false, marketCount }: MatchHeaderProps) {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="flex flex-1 items-center gap-[2px] min-w-0">
        {sportIcon && <span className="w-4 h-4 shrink-0 flex items-center justify-center">{sportIcon}</span>}
        <span className="font-['Roboto',sans-serif] text-xs font-normal leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] truncate">
          {sportLabel}
        </span>
      </div>
      <div className="flex items-center gap-1 shrink-0">
        {streaming && <span className="w-4 h-4 rounded bg-[var(--appereance-font-color-alt,#5c6063)]" />}
        {marketCount != null && (
          <span className="inline-flex items-center h-4 px-1 py-[2px] rounded-lg border border-[var(--appereance-badge-result-fill-active,#5c6063)] text-[10px] font-medium text-[var(--appereance-badge-result-text-active,#5c6063)] whitespace-nowrap">
            + {marketCount}
          </span>
        )}
      </div>
    </div>
  );
}

export interface TeamRowProps {
  team1: string;
  team2: string;
  shirt1?: React.ReactNode;
  shirt2?: React.ReactNode;
  date?: string;
  time?: string;
}

function TeamRow({ team1, team2, shirt1, shirt2, date = "01/01", time = "18:00" }: TeamRowProps) {
  return (
    <div className="flex items-center gap-[2px] w-full">
      <div className="flex flex-1 flex-col items-center min-w-0">
        {shirt1 ?? <div className="w-9 h-9 rounded-full bg-[var(--appereance-border-default-alt,#e9eaea)]" />}
        <span className="text-xs font-medium leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] text-center h-7 flex items-center">
          {team1}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-[2px] w-12 h-16 p-[2px] text-xs font-normal leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] text-center whitespace-nowrap">
        <span>{date}</span>
        <span>{time}</span>
      </div>
      <div className="flex flex-1 flex-col items-center min-w-0">
        {shirt2 ?? <div className="w-9 h-9 rounded-full bg-[var(--appereance-border-default-alt,#e9eaea)]" />}
        <span className="text-xs font-medium leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] text-center h-7 flex items-center">
          {team2}
        </span>
      </div>
    </div>
  );
}

/* ---------- SGP selection item ---------- */

export interface SgpSelectionProps {
  playerTeam: string;
  description: string;
  secondLine?: string;
  position?: "first" | "center" | "last";
  status?: "default" | "error" | "alert";
}

function BulletConnector({ position, status = "default" }: { position: SgpSelectionProps["position"]; status?: SgpSelectionProps["status"] }) {
  const dotColor =
    status === "error"
      ? "bg-[var(--icon-fill-error,#e73947)]"
      : status === "alert"
        ? "bg-[var(--icon-fill-warning,#ffbf00)]"
        : "bg-[var(--appereance-font-color-alt,#5c6063)]";

  return (
    <div className="flex flex-col items-center w-2 self-stretch shrink-0">
      {position !== "first" && <div className="w-px flex-none h-1 bg-[var(--appereance-border-default-alt,#e9eaea)]" />}
      <div className={["w-2 h-2 rounded-full shrink-0", dotColor].join(" ")} />
      {position !== "last" && <div className="w-px flex-1 bg-[var(--appereance-border-default-alt,#e9eaea)]" />}
    </div>
  );
}

function SgpSelection({ playerTeam, description, secondLine, position = "center", status = "default" }: SgpSelectionProps) {
  return (
    <div className="flex gap-1 items-start w-full px-2">
      <BulletConnector position={position} status={status} />
      <div className="flex flex-1 flex-col gap-1 pb-3 leading-[14px] text-xs min-w-0">
        <div className="flex gap-1 items-center w-full whitespace-nowrap">
          <span className="font-medium text-[var(--appereance-font-color-active,#262c2f)] truncate shrink-0">
            {playerTeam}
          </span>
          <span className="font-normal text-[var(--appereance-font-color-alt,#5c6063)] truncate flex-1">
            {description}
          </span>
        </div>
        {secondLine && (
          <span className="font-normal text-[var(--appereance-font-color-alt,#5c6063)] text-xs w-full">
            {secondLine}
          </span>
        )}
      </div>
    </div>
  );
}

/* ---------- Main card ---------- */

export interface CardBetBuilderProps {
  header?: boolean;
  sportIcon?: React.ReactNode;
  sportLabel?: string;
  marketCount?: number;
  team1?: string;
  team2?: string;
  shirt1?: React.ReactNode;
  shirt2?: React.ReactNode;
  date?: string;
  time?: string;
  selections?: SgpSelectionProps[];
  oddsLabel?: string;
  oddsValue?: string;
  onOddsClick?: () => void;
  className?: string;
}

export function CardBetBuilder({
  header = true,
  sportIcon,
  sportLabel,
  marketCount,
  team1 = "Label",
  team2 = "Label",
  shirt1,
  shirt2,
  date,
  time,
  selections = [],
  oddsLabel = "My Combo",
  oddsValue = "11.11",
  onOddsClick,
  className,
}: CardBetBuilderProps) {
  return (
    <div
      className={[
        "flex flex-col items-start gap-0 w-[328px] rounded-lg",
        "bg-[var(--appereance-surface-frame-default,white)]",
        "shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)]",
        "font-['Roboto',sans-serif]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Header */}
      {header && (
        <div className="flex flex-col gap-2 items-start pb-3 pt-2 px-2 w-full border-b border-[var(--appereance-border-default-alt,#e9eaea)]">
          <MatchHeader sportIcon={sportIcon} sportLabel={sportLabel} marketCount={marketCount} />
          <TeamRow team1={team1} team2={team2} shirt1={shirt1} shirt2={shirt2} date={date} time={time} />
        </div>
      )}

      {/* SGP selections */}
      {selections.length > 0 && (
        <div className="flex flex-col items-start pt-3 w-full max-h-[144px] overflow-y-auto">
          {selections.map((sel, i) => (
            <SgpSelection
              key={i}
              {...sel}
              position={i === 0 ? "first" : i === selections.length - 1 ? "last" : "center"}
            />
          ))}
        </div>
      )}

      {/* Odds CTA */}
      <button
        type="button"
        onClick={onOddsClick}
        className="flex items-center justify-center w-full h-9 mx-2 mb-2 mt-1 rounded-lg bg-[var(--appereance-odds-selection-fill-active,#e9eaea)] text-[var(--appereance-odds-selection-text-active,#262c2f)] text-xs font-bold"
        style={{ width: "calc(100% - 16px)" }}
      >
        <span className="font-medium mr-1">{oddsLabel}</span>
        <span>{oddsValue}</span>
      </button>
    </div>
  );
}

export { CardBetBuilder as default };
