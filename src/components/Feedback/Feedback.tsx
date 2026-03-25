import React from "react";

export interface FeedbackProps {
  /** Layout type */
  type?: "Page" | "Panel";
  /** Feedback title */
  title?: string;
  /** Subtitle / description */
  subtitle?: string;
  /** Show illustration placeholder */
  showIllustration?: boolean;
  /** Custom illustration element */
  illustration?: React.ReactNode;
  /** Show primary button */
  showButton?: boolean;
  /** Primary button label */
  buttonLabel?: string;
  /** Primary button click */
  onButtonClick?: () => void;
  /** Show secondary button (Panel only) */
  showSecondaryButton?: boolean;
  /** Secondary button label */
  secondaryButtonLabel?: string;
  /** Secondary button click */
  onSecondaryClick?: () => void;
  /** Show link (Panel only) */
  showLink?: boolean;
  /** Link text */
  linkText?: string;
  /** Link click */
  onLinkClick?: () => void;
  /** Show checkbox (Panel only) */
  showCheckbox?: boolean;
  /** Checkbox label */
  checkboxLabel?: string;
  /** Show toggle (Panel only) */
  showToggle?: boolean;
  /** Toggle label */
  toggleLabel?: string;
  /** Panel title (top bar) */
  panelTitle?: string;
  /** Close panel handler */
  onClose?: () => void;
  /** Show Sisal logo */
  showLogo?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export function Feedback({
  type = "Page",
  title = "Title feedback",
  subtitle = "Text content",
  showIllustration = true,
  illustration,
  showButton = true,
  buttonLabel = "Button",
  onButtonClick,
  showSecondaryButton = true,
  secondaryButtonLabel = "Button",
  onSecondaryClick,
  showLink = true,
  linkText = "Link",
  onLinkClick,
  showCheckbox = true,
  checkboxLabel = "Label",
  showToggle = true,
  toggleLabel = "Lorem ipsum dolor sit amet",
  panelTitle = "Title",
  onClose,
  showLogo = false,
  className,
}: FeedbackProps) {
  if (type === "Panel") {
    return (
      <div
        className={
          className ||
          "flex flex-col w-[360px] bg-white rounded-t-lg overflow-clip font-['Roboto',sans-serif]"
        }
      >
        {/* Panel top bar */}
        <div className="flex items-center gap-2 h-14 px-4 rounded-t-lg">
          <span className="flex-1 font-['Mulish',sans-serif] font-extrabold text-2xl leading-7 text-[var(--font-color-active,#262c2f)]">
            {panelTitle}
          </span>
          <button
            type="button"
            className="w-6 h-6 rounded-full bg-[var(--close-panel-surface,#c9cacb)] flex items-center justify-center text-white text-xs cursor-pointer"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* Panel content */}
        <div className="flex flex-col items-center gap-5 px-4 py-6">
          {showIllustration && (
            illustration || (
              <div className="w-[135px] h-[135px] rounded-full border-2 border-dashed border-[#c9cacb]" />
            )
          )}

          <div className="flex flex-col items-center gap-4 w-full text-center text-[var(--font-color-active,#262c2f)]">
            {title && (
              <h3 className="font-['Mulish',sans-serif] font-bold text-lg leading-5">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm font-normal leading-[18px]">{subtitle}</p>
            )}
            {showLink && (
              <button
                type="button"
                className="text-xs font-medium leading-[14px] underline text-[var(--font-color-link,#00653b)] cursor-pointer"
                onClick={onLinkClick}
              >
                {linkText}
              </button>
            )}
            {showCheckbox && (
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-6 h-6 accent-[#00653b]"
                />
                <span className="text-sm font-medium leading-[18px]">
                  {checkboxLabel}
                </span>
              </label>
            )}
            {showToggle && (
              <div className="flex items-center gap-1 w-full">
                <span className="flex-1 text-sm font-normal leading-[18px] text-left">
                  {toggleLabel}
                </span>
                <div className="w-11 h-6 rounded-full bg-[#dedede] relative cursor-pointer">
                  <div className="absolute top-[2px] left-[2px] w-5 h-5 rounded-full bg-white shadow" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Panel footer buttons */}
        {(showButton || showSecondaryButton) && (
          <div className="flex items-center gap-2 px-6 py-4 border-t border-[#c9cacb]">
            {showSecondaryButton && (
              <button
                type="button"
                className="flex-1 h-9 rounded-full font-bold text-sm text-[var(--font-color-active,#262c2f)] cursor-pointer hover:opacity-80"
                onClick={onSecondaryClick}
              >
                {secondaryButtonLabel}
              </button>
            )}
            {showButton && (
              <button
                type="button"
                className="flex-1 h-9 rounded-full bg-[#00653b] font-bold text-sm text-white cursor-pointer hover:opacity-90"
                onClick={onButtonClick}
              >
                {buttonLabel}
              </button>
            )}
          </div>
        )}
      </div>
    );
  }

  // Page variant
  return (
    <div
      className={
        className ||
        "flex flex-col items-center gap-6 px-4 py-16 w-[360px] font-['Roboto',sans-serif] relative"
      }
    >
      {showLogo && (
        <div className="absolute top-[-22px] left-1/2 -translate-x-1/2 w-[72px] h-8 flex items-start">
          <span className="font-['Mulish',sans-serif] font-bold text-sm text-[#00653b]">
            Sisal
          </span>
        </div>
      )}

      <div className="flex flex-col items-center gap-5 w-full">
        {showIllustration && (
          illustration || (
            <div className="w-[135px] h-[135px] rounded-full border-2 border-dashed border-[#c9cacb]" />
          )
        )}

        <div className="flex flex-col items-center gap-4 w-full text-center text-[var(--font-color-active,#262c2f)]">
          {title && (
            <h3 className="font-['Mulish',sans-serif] font-bold text-lg leading-5">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm font-normal leading-[18px]">{subtitle}</p>
          )}
        </div>
      </div>

      {showButton && (
        <button
          type="button"
          className="h-9 px-6 rounded-full bg-[#00653b] font-bold text-sm text-white cursor-pointer hover:opacity-90"
          onClick={onButtonClick}
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
}

export default Feedback;
