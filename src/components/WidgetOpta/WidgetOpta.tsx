import React from "react";

/* ------------------------------------------------------------------ */
/*  Widget / Opta-tracker                                              */
/*  Figma node 5423:21313 - file 1KwGa2GwNraywm2ukpfGHe               */
/* ------------------------------------------------------------------ */

type BadgeStatus = "win" | "loser" | "pending";

interface BadgeOptaProps {
  value?: number;
  status?: BadgeStatus;
}

function BadgeOpta({ value = 55, status = "pending" }: BadgeOptaProps) {
  const borderColorMap: Record<BadgeStatus, string> = {
    win: "border-[var(--appereance-widget-opta-tracker-progressa-bar-fill-win,#bed62f)]",
    loser: "border-[#e73947]",
    pending:
      "border-[var(--appereance-widget-opta-tracker-progressa-bar-fill-pending,#929597)]",
  };

  return (
    <div
      className={`flex items-center justify-center h-[16px] px-1 py-[2px] rounded-2xl bg-[var(--widget-opta-tracker-badge-fill,#2f3c43)] border ${borderColorMap[status]}`}
    >
      <span className="font-['Roboto',sans-serif] font-medium text-[var(--font-size-xs,12px)] leading-[var(--font-line-height-xs,14px)] text-[var(--card-match-bg-text-active,white)] text-center w-[14px] h-[12px] flex items-center justify-center">
        {value}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface ProgressBarProps {
  /** 0-100 fill percentage */
  progress?: number;
  status?: BadgeStatus;
  showBadge?: boolean;
  badgeValue?: number;
  roundedLeft?: boolean;
  roundedRight?: boolean;
}

function ProgressBar({
  progress = 33,
  status = "pending",
  showBadge = true,
  badgeValue = 55,
  roundedLeft = true,
  roundedRight = true,
}: ProgressBarProps) {
  const fillColorMap: Record<BadgeStatus, string> = {
    win: "bg-[var(--appereance-widget-opta-tracker-progressa-bar-fill-win,#bed62f)]",
    loser:
      "bg-[var(--appereance-widget-opta-tracker-progressa-bar-fill-loser,#e73947)]",
    pending:
      "bg-[var(--appereance-widget-opta-tracker-progressa-bar-fill-pending,#929597)]",
  };

  const borderRadius = `${roundedLeft ? "9999px" : "0"} ${roundedRight ? "9999px" : "0"} ${roundedRight ? "9999px" : "0"} ${roundedLeft ? "9999px" : "0"}`;

  return (
    <div
      className="relative flex items-center h-[6px] flex-1 bg-[var(--appereance-widget-opta-tracker-progressa-bar-fill-active,#e9eaea)]"
      style={{ borderRadius }}
    >
      <div
        className={`h-full ${fillColorMap[status]} rounded-[9999px]`}
        style={{ width: `${progress}%` }}
      />
      {showBadge && (
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{ left: `${progress}%`, transform: `translate(-50%, -50%)` }}
        >
          <BadgeOpta value={badgeValue} status={status} />
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */

export type OptaTrackerType = "Under/Over" | "Doppia" | "1X2" | "Esattamente";

export interface OptaTrackerRowProps {
  type?: OptaTrackerType;
  label?: string;
  targetValue?: string;
  badgeValue?: number;
  progress?: number;
}

function OptaTrackerRow({
  type = "Under/Over",
  label,
  targetValue = "100.5",
  badgeValue = 55,
  progress = 33,
}: OptaTrackerRowProps) {
  if (type === "1X2") {
    return (
      <div className="flex flex-col gap-[6px] w-[312px]">
        {/* Two opposing progress bars */}
        <div className="flex items-center gap-1 pt-[7px]">
          <ProgressBar
            progress={100 - progress}
            status="pending"
            showBadge={true}
            badgeValue={badgeValue}
            roundedLeft={true}
            roundedRight={true}
          />
          <ProgressBar
            progress={progress}
            status="pending"
            showBadge={true}
            badgeValue={badgeValue}
            roundedLeft={true}
            roundedRight={true}
          />
        </div>
        {/* Labels */}
        <div className="flex items-center gap-1 w-full">
          <span className="flex-1 font-['Roboto',sans-serif] font-normal text-[var(--font-size-xs,12px)] leading-[var(--font-line-height-xs,14px)] text-[var(--appereance-font-color-alt,#5c6063)]">
            Giocatore 1
          </span>
          <span className="flex-1 font-['Roboto',sans-serif] font-normal text-[var(--font-size-xs,12px)] leading-[var(--font-line-height-xs,14px)] text-[var(--appereance-font-color-alt,#5c6063)] text-right">
            Giocatore 2
          </span>
        </div>
      </div>
    );
  }

  if (type === "Esattamente") {
    return (
      <div className="flex flex-col gap-[6px] w-[312px] pt-[7px]">
        <ProgressBar
          progress={progress}
          status="pending"
          showBadge={true}
          badgeValue={badgeValue}
        />
        <div className="flex items-center justify-end gap-1 w-full">
          <span className="font-['Roboto',sans-serif] font-normal text-[var(--font-size-xs,12px)] leading-[var(--font-line-height-xs,14px)] text-[var(--appereance-font-color-alt,#5c6063)] w-[68px] text-right">
            {targetValue}
          </span>
        </div>
      </div>
    );
  }

  /* Under/Over (default) */
  return (
    <div className="flex flex-col gap-[6px] w-[312px] pt-[7px]">
      <div className="flex items-center gap-[2px] w-full">
        <ProgressBar
          progress={progress}
          status="pending"
          showBadge={true}
          badgeValue={badgeValue}
          roundedLeft={true}
          roundedRight={false}
        />
        <div className="w-[68px] shrink-0">
          <ProgressBar
            progress={100}
            status="win"
            showBadge={false}
            roundedLeft={false}
            roundedRight={true}
          />
        </div>
      </div>
      <div className="flex items-center gap-1 w-full">
        {label && (
          <span className="flex-1 font-['Roboto',sans-serif] font-normal text-[var(--font-size-xs,12px)] leading-[var(--font-line-height-xs,14px)] text-[var(--appereance-font-color-alt,#5c6063)]">
            {label}
          </span>
        )}
        <span className="font-['Roboto',sans-serif] font-normal text-[var(--font-size-xs,12px)] leading-[var(--font-line-height-xs,14px)] text-[var(--appereance-font-color-alt,#5c6063)] w-[68px]">
          {targetValue}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export interface WidgetOptaProps {
  rows?: OptaTrackerRowProps[];
}

export function WidgetOpta({
  rows = [
    { type: "Under/Over", label: "Label", targetValue: "100.5", badgeValue: 55, progress: 33 },
  ],
}: WidgetOptaProps) {
  return (
    <div className="flex flex-col gap-[var(--spacing-4,4px)] items-start w-[312px]">
      {rows.map((row, idx) => (
        <OptaTrackerRow key={idx} {...row} />
      ))}
    </div>
  );
}

export default WidgetOpta;
