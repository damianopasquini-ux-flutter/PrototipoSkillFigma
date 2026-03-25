import React from "react";
import { Button } from "../Button/Button";

/* ------------------------------------------------------------------ */
/*  Sisal DS - Panel / Text                                            */
/*  Modal panel with icon+title text blocks, optional link & button    */
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

export interface TextBoxProps {
  icon?: React.ReactNode;
  title?: string;
  body?: string;
  showDivider?: boolean;
}

export function TextBox({
  icon,
  title = "Title",
  body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  showDivider = true,
}: TextBoxProps) {
  return (
    <div
      className={[
        "flex flex-col gap-2 items-start w-full",
        showDivider ? "pb-4 border-b border-[var(--appereance-border-default-alt,#e9eaea)]" : "",
      ].join(" ")}
    >
      <div className="flex gap-2 items-center">
        {icon && <span className="w-6 h-6 flex items-center justify-center shrink-0">{icon}</span>}
        {!icon && (
          <span className="w-6 h-6 flex items-center justify-center shrink-0 text-[var(--appereance-font-color-alt,#5c6063)]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
            </svg>
          </span>
        )}
        <span className="font-['Mulish',sans-serif] font-bold text-base leading-5 text-[var(--appereance-font-color-active,#262c2f)]">
          {title}
        </span>
      </div>
      <p className="font-['Roboto',sans-serif] font-normal text-sm leading-[18px] text-[var(--appereance-font-color-active,#262c2f)] w-full">
        {body}
      </p>
    </div>
  );
}

export interface PanelTextProps {
  className?: string;
  title?: string;
  sections?: TextBoxProps[];
  linkText?: string;
  linkHref?: string;
  showButtons?: boolean;
  buttonLabel?: string;
  onClose?: () => void;
  onButtonClick?: () => void;
}

export function PanelText({
  className,
  title = "Title",
  sections = [{ title: "Title" }],
  linkText = "Link",
  linkHref,
  showButtons = true,
  buttonLabel = "Button",
  onClose,
  onButtonClick,
}: PanelTextProps) {
  return (
    <div
      className={
        className ||
        "bg-[var(--appereance-surface-panel-default,white)] flex flex-col items-start overflow-clip rounded-t-[var(--radius-panel,8px)] w-[360px]"
      }
    >
      {/* Header */}
      <div className="bg-[var(--appereance-surface-panel-default,white)] flex gap-2 h-14 items-center px-4 rounded-t-[var(--radius-panel,8px)] w-full overflow-clip">
        <h2 className="flex-1 font-['Mulish',sans-serif] font-extrabold text-2xl leading-7 text-[var(--appereance-font-color-active,#262c2f)]">
          {title}
        </h2>
        <CloseButton onClick={onClose} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 items-start pt-4 pb-6 px-4 w-full">
        {sections.map((section, i) => (
          <TextBox
            key={i}
            icon={section.icon}
            title={section.title}
            body={section.body}
            showDivider={i < sections.length - 1}
          />
        ))}

        {/* Link */}
        {linkText && (
          <a
            href={linkHref || "#"}
            className="font-['Roboto',sans-serif] font-bold text-sm leading-[18px] text-[var(--font-color-link,#00653b)] underline"
          >
            {linkText}
          </a>
        )}
      </div>

      {/* Buttons footer */}
      {showButtons && (
        <div className="bg-[var(--appereance-surface-panel-default,white)] border-t border-[var(--appereance-border-default-active,#c9cacb)] flex gap-2 items-center justify-center px-6 py-4 w-full">
          <Button label={buttonLabel} variant="default" onClick={onButtonClick} />
        </div>
      )}
    </div>
  );
}

export default PanelText;
