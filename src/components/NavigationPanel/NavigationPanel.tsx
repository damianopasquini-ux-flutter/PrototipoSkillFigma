import React from "react";

/* ------------------------------------------------------------------ */
/*  Sisal DS - Navigation Panel                                        */
/*  Top navigation bar for modal panels (L / S sizes)                  */
/* ------------------------------------------------------------------ */

function CloseButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-[var(--appereance-top-navigation-panel-icon-surface,#c9cacb)] rounded-full size-6 flex items-center justify-center shrink-0"
      aria-label="Chiudi"
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M1 1l8 8M9 1l-8 8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  );
}

export interface NavigationPanelProps {
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  showIcon?: boolean;
  size?: "L" | "S";
  date?: string;
  showDate?: boolean;
  onClose?: () => void;
}

export function NavigationPanel({
  className,
  title = "Title",
  icon,
  showIcon = false,
  size = "L",
  date,
  showDate = false,
  onClose,
}: NavigationPanelProps) {
  const isSmall = size === "S";

  return (
    <div
      className={
        className ||
        [
          "bg-[var(--appereance-surface-panel-default,white)] flex items-center px-4 rounded-t-[var(--radius-panel,8px)] w-[360px]",
          isSmall ? "gap-2 py-4" : "gap-2 h-14",
        ].join(" ")
      }
    >
      {/* Content area */}
      <div
        className={[
          "flex flex-1 min-h-px min-w-px",
          isSmall ? "flex-col items-start" : "gap-2 items-center",
        ].join(" ")}
      >
        {/* Date (small variant only) */}
        {isSmall && showDate && date && (
          <span className="font-['Roboto',sans-serif] font-normal text-[10px] leading-3 text-[var(--appereance-font-color-alt-2,#929597)]">
            {date}
          </span>
        )}

        {/* Title row */}
        <div className={`flex gap-2 items-center ${isSmall ? "w-full" : ""}`}>
          {showIcon && icon && (
            <span className={`flex items-center justify-center shrink-0 ${isSmall ? "size-5" : "size-6"}`}>
              {icon}
            </span>
          )}
          <span
            className={[
              "font-['Mulish',sans-serif] flex-1 min-w-0",
              isSmall
                ? "font-black text-sm leading-[18px] text-[var(--appereance-font-color-active,#262c2f)]"
                : "font-extrabold text-2xl leading-7 text-[var(--appereance-font-color-active,#262c2f)]",
            ].join(" ")}
          >
            {title}
          </span>
        </div>
      </div>

      <CloseButton onClick={onClose} />
    </div>
  );
}

export default NavigationPanel;
