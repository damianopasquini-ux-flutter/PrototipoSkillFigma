import React from "react";

/* ── TextBox (section item) ── */
export interface TextBoxProps {
  /** Section icon (React node or placeholder) */
  icon?: React.ReactNode;
  /** Section title */
  title?: string;
  /** Section body text */
  body?: string;
  /** Show bottom border */
  showBorder?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export function TextBox({
  icon,
  title = "Title",
  body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  showBorder = true,
  className,
}: TextBoxProps) {
  return (
    <div
      className={
        className ||
        `flex flex-col gap-2 pb-4 w-full ${showBorder ? "border-b border-[var(--border-bg-dark-3,#5c6063)]" : ""}`
      }
    >
      <div className="flex items-center gap-2">
        {icon || (
          <div className="w-6 h-6 rounded-full border border-dashed border-white/40 shrink-0" />
        )}
        <h4 className="font-['Mulish',sans-serif] font-bold text-base leading-5 text-white">
          {title}
        </h4>
      </div>
      <p className="font-['Roboto',sans-serif] font-normal text-sm leading-[18px] text-white">
        {body}
      </p>
    </div>
  );
}

/* ── Modal ── */
export interface ModalProps {
  /** Navigation bar title */
  title?: string;
  /** Sections to display */
  sections?: Array<{
    icon?: React.ReactNode;
    title?: string;
    body?: string;
  }>;
  /** Close/back handler */
  onClose?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export function Modal({
  title = "Title",
  sections,
  onClose,
  className,
}: ModalProps) {
  const defaultSections = [
    { title: "Title", body: undefined },
    { title: "Title", body: undefined },
    { title: "Title", body: undefined },
    { title: "Title", body: undefined },
  ];

  const items = sections || defaultSections;

  return (
    <div
      className={
        className ||
        "flex flex-col w-[360px] bg-[var(--menu-profile-surface,#262c2f)] font-['Roboto',sans-serif]"
      }
    >
      {/* Status bar */}
      <div className="flex items-center justify-between h-6 px-6 text-white">
        <span className="font-medium text-sm leading-5 tracking-[0.1px]">
          12:45
        </span>
        <div className="flex items-center gap-0.5">
          <span className="text-xs">&#x25CF;&#x25CF;&#x25CF;</span>
        </div>
      </div>

      {/* Top nav */}
      <div className="flex items-center gap-2 h-11 pl-4 pr-[3px]">
        <span className="flex-1 font-['Mulish',sans-serif] font-bold text-base leading-5 text-white">
          {title}
        </span>
        <button
          type="button"
          className="w-8 h-11 flex items-center justify-center text-white/60 cursor-pointer"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 px-4 py-6">
        {items.map((section, index) => (
          <TextBox
            key={index}
            icon={section.icon}
            title={section.title}
            body={section.body}
            showBorder={index < items.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Modal;
