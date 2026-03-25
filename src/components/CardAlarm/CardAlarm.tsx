import React from "react";

/* ------------------------------------------------------------------ */
/*  Sisal DS - Card Alarm                                             */
/*  Match alarm toggle card with sport info and date                  */
/* ------------------------------------------------------------------ */

export interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export function ToggleSwitch({ checked = false, onChange, disabled = false, className }: ToggleSwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={[
        "relative inline-flex items-center w-11 h-6 rounded-full transition-colors shrink-0",
        checked
          ? "bg-[var(--button-toogle-fill-selected,#bed62f)]"
          : "bg-[var(--appereance-border-default-alt,#e9eaea)]",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        className={[
          "inline-block w-5 h-5 rounded-full bg-white shadow transition-transform",
          checked ? "translate-x-[22px]" : "translate-x-[2px]",
        ].join(" ")}
      />
    </button>
  );
}

export interface CardAlarmProps {
  sportIcon?: React.ReactNode;
  sportLabel?: string;
  team1?: string;
  team2?: string;
  dateTime?: string;
  alarmOn?: boolean;
  onAlarmChange?: (on: boolean) => void;
  className?: string;
}

export function CardAlarm({
  sportIcon,
  sportLabel = "Label",
  team1 = "Label",
  team2 = "Label",
  dateTime = "12/10/2022",
  alarmOn = true,
  onAlarmChange,
  className,
}: CardAlarmProps) {
  return (
    <div
      className={[
        "flex items-center gap-2 p-2 w-[360px] rounded-lg",
        "bg-[var(--appereance-surface-frame-default,white)]",
        "shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)]",
        "font-['Roboto',sans-serif]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 items-start min-w-0">
        {/* Sport row */}
        <div className="flex items-center gap-[2px] h-4 w-full">
          {sportIcon && <span className="w-4 h-4 shrink-0 flex items-center justify-center">{sportIcon}</span>}
          <span className="flex-1 text-xs font-normal leading-[14px] text-[var(--appereance-font-color-active,#262c2f)]">
            {sportLabel}
          </span>
        </div>

        {/* Match info */}
        <div className="flex flex-col gap-1 items-start w-[260px]">
          <span className="text-xs font-medium leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] truncate w-full whitespace-nowrap">
            {team1}
          </span>
          <span className="text-xs font-medium leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] truncate w-full whitespace-nowrap">
            {team2}
          </span>
          <span className="text-[10px] leading-[12px] font-normal text-[var(--appereance-font-color-active,#262c2f)] whitespace-nowrap">
            {dateTime}
          </span>
        </div>
      </div>

      {/* Toggle */}
      <ToggleSwitch checked={alarmOn} onChange={onAlarmChange} />
    </div>
  );
}

export { CardAlarm as default };
