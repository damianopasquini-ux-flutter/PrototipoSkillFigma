import React from "react";

/* ── Types ── */
interface LivescoreProps {
  className?: string;
  card?: "Extended" | "Compact";
  type?: "Sport" | "Basket" | "Tennis" | "Race";
  scoreHome?: string;
  scoreAway?: string;
  time?: string;
}

interface TimerProps {
  className?: string;
  type?: "Race" | "Sport" | "Tennis";
  time?: string;
}

interface TimeIndicatorProps {
  className?: string;
  card?: "Extended" | "Compact";
  live?: boolean;
  type?: "Sport" | "Race";
  date?: string;
  time?: string;
  scoreHome?: string;
  scoreAway?: string;
}

/* ── Livescore ── */
export function Livescore({
  className,
  card = "Extended",
  type = "Sport",
  scoreHome = "3",
  scoreAway = "3",
  time = "27:56",
}: LivescoreProps) {
  if (type === "Race" && card === "Extended") {
    return (
      <div className={className || "h-[10px] w-6 relative"}>
        <div className="w-full h-full bg-[var(--livescore-active,#ff8e0d)] rounded-sm animate-pulse" />
      </div>
    );
  }

  return (
    <div
      className={
        className ||
        "flex flex-col gap-1 h-16 items-center justify-center w-12 font-medium font-['Roboto',sans-serif] text-[var(--livescore-active,#ff8e0d)]"
      }
    >
      {type === "Sport" && card === "Extended" && (
        <>
          <div className="flex items-center justify-center w-full h-[18px] rounded-lg text-xs leading-[14px]">
            <span className="flex-1 text-right">{scoreHome}</span>
            <span className="px-0.5">-</span>
            <span className="flex-1">{scoreAway}</span>
          </div>
          <span className="text-[10px] leading-3 text-center whitespace-nowrap">{time}</span>
        </>
      )}
    </div>
  );
}

/* ── Timer ── */
export function Timer({ className, type = "Sport", time = "40:25" }: TimerProps) {
  if (type === "Race") {
    return (
      <div className={className || "h-4 w-6 relative"}>
        <div className="w-full h-full bg-[var(--livescore-active,#ff8e0d)] rounded-sm animate-pulse" />
      </div>
    );
  }

  return (
    <div className={className || "h-4 flex items-center w-[25px]"}>
      <span className="flex-1 font-normal font-['Roboto',sans-serif] text-[10px] leading-3 text-[var(--livescore-active,#ff8e0d)]">
        {time}
      </span>
    </div>
  );
}

/* ── TimeIndicator ── */
export function TimeIndicator({
  className,
  card = "Extended",
  live = false,
  type = "Sport",
  date = "01/01",
  time = "18:00",
  scoreHome = "3",
  scoreAway = "3",
}: TimeIndicatorProps) {
  /* ── Not live, Extended ── */
  if (!live && card === "Extended") {
    return (
      <div
        className={
          className ||
          "flex flex-col gap-0.5 h-16 items-center justify-center p-0.5 w-12 font-normal font-['Roboto',sans-serif] text-[var(--appereance-font-color-active,#262c2f)] text-xs leading-[14px] text-center whitespace-nowrap"
        }
      >
        <span>{date}</span>
        <span>{time}</span>
      </div>
    );
  }

  /* ── Not live, Compact ── */
  if (!live && card === "Compact") {
    return (
      <div className={className || "flex h-4 items-center w-[54px]"}>
        <span className="flex-1 font-normal font-['Roboto',sans-serif] text-[10px] leading-3 text-[var(--appereance-font-color-active,#262c2f)]">
          {type === "Race" ? "12/10/2022" : date}
        </span>
      </div>
    );
  }

  /* ── Live, Extended, Sport ── */
  if (live && card === "Extended" && type === "Sport") {
    return (
      <div className={className || "flex flex-col items-start"}>
        <Livescore
          card="Extended"
          type="Sport"
          scoreHome={scoreHome}
          scoreAway={scoreAway}
          time={time}
        />
      </div>
    );
  }

  /* ── Live, Extended, Race ── */
  if (live && card === "Extended" && type === "Race") {
    return (
      <div className={className || "flex flex-col items-start w-6"}>
        <Livescore card="Extended" type="Race" />
      </div>
    );
  }

  /* ── Live, Compact ── */
  if (live && card === "Compact") {
    return (
      <div className={className || "flex items-start"}>
        <Timer type={type === "Race" ? "Race" : "Sport"} time={time} />
      </div>
    );
  }

  return null;
}

export default TimeIndicator;
