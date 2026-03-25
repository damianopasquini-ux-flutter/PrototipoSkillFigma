import React from "react";

export interface TooltipProps {
  /** Title text */
  title?: string;
  /** Body/subtitle text */
  subtitle?: string;
  /** Show "Scopri di piu" link */
  showLink?: boolean;
  /** Link text */
  linkText?: string;
  /** Link click handler */
  onLinkClick?: () => void;
  /** Show back button */
  showBack?: boolean;
  /** Back button label */
  backLabel?: string;
  /** Back button click handler */
  onBack?: () => void;
  /** Show next button */
  showNext?: boolean;
  /** Next button label */
  nextLabel?: string;
  /** Next button click handler */
  onNext?: () => void;
  /** Exit button click handler */
  onExit?: () => void;
  /** Exit button label */
  exitLabel?: string;
  /** Current step */
  currentStep?: number;
  /** Total steps */
  totalSteps?: number;
  /** Arrow pointing down (default) or up */
  arrowDirection?: "down" | "up";
  /** Arrow horizontal position from left in px */
  arrowOffset?: number;
  /** Additional CSS classes */
  className?: string;
}

export function Tooltip({
  title = "Title",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  showLink = true,
  linkText = "Scopri di pi\u00f9",
  onLinkClick,
  showBack = true,
  backLabel = "Indietro",
  onBack,
  showNext = true,
  nextLabel = "Avanti",
  onNext,
  onExit,
  exitLabel = "Esci",
  currentStep = 1,
  totalSteps = 1,
  arrowDirection = "down",
  arrowOffset,
  className,
}: TooltipProps) {
  return (
    <div
      className={
        className ||
        "relative inline-flex flex-col min-w-[240px] max-w-[240px] font-['Roboto',sans-serif]"
      }
    >
      {/* Arrow up */}
      {arrowDirection === "up" && (
        <div
          className="flex justify-start w-full"
          style={arrowOffset ? { paddingLeft: arrowOffset } : { paddingLeft: 196 }}
        >
          <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[18px] border-b-white" />
        </div>
      )}

      {/* Card */}
      <div className="bg-white rounded-lg shadow-[0px_2px_8px_rgba(0,0,0,0.1)] px-3">
        <div className="flex flex-col gap-2 py-3">
          {/* Header */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center">
              <h4 className="flex-1 font-['Mulish',sans-serif] font-bold text-sm leading-[18px] text-[var(--font-color-active,#262c2f)]">
                {title}
              </h4>
              <span className="text-xs text-[var(--font-color-alt2,#929597)] text-center w-[30px] leading-[14px] tracking-[0.12px]">
                {currentStep} di {totalSteps}
              </span>
            </div>

            <p className="text-sm font-normal leading-[18px] text-[var(--font-color-alt,#5c6063)]">
              {subtitle}
            </p>

            {showLink && (
              <button
                type="button"
                className="text-xs font-normal leading-[1.5] underline text-[var(--font-color-alt,#5c6063)] tracking-[0.144px] self-start cursor-pointer"
                onClick={onLinkClick}
              >
                {linkText}
              </button>
            )}
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between h-[26px]">
            <button
              type="button"
              className="text-xs font-medium leading-[14px] text-[var(--font-color-active,#262c2f)] cursor-pointer hover:opacity-80"
              onClick={onExit}
            >
              {exitLabel}
            </button>

            <div className="flex items-center gap-2">
              {showBack && (
                <button
                  type="button"
                  className="h-[26px] w-16 rounded-full border border-[var(--primary,#262c2f)] text-xs font-medium text-[var(--font-color-active,#262c2f)] cursor-pointer hover:opacity-80"
                  onClick={onBack}
                >
                  {backLabel}
                </button>
              )}
              {showNext && (
                <button
                  type="button"
                  className="h-[26px] w-16 rounded-full bg-[var(--primary,#00653b)] text-xs font-medium text-white cursor-pointer hover:opacity-90"
                  onClick={onNext}
                >
                  {nextLabel}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Arrow down */}
      {arrowDirection === "down" && (
        <div
          className="flex justify-start w-full"
          style={arrowOffset ? { paddingLeft: arrowOffset } : undefined}
        >
          <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[18px] border-t-white" />
        </div>
      )}
    </div>
  );
}

export default Tooltip;
