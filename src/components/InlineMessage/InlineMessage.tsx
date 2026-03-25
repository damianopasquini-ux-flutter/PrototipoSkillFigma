import React from "react";

type InlineMessageType = "Error" | "Warning" | "Informative" | "Success";
type InlineMessageSize = "S" | "M" | "L";

export interface InlineMessageProps {
  /** Message text */
  text?: string;
  /** Variant type */
  type?: InlineMessageType;
  /** Size variant */
  size?: InlineMessageSize;
  /** Show icon */
  showIcon?: boolean;
  /** Show link */
  showLink?: boolean;
  /** Darker/opacity variant for dark backgrounds */
  dark?: boolean;
  /** Link text */
  linkText?: string;
  /** Link click handler */
  onLinkClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

const typeFillDefault: Record<InlineMessageType, string> = {
  Error: "bg-[var(--snackbar-bg-fill-error,#ffeaeb)]",
  Warning: "bg-[var(--snackbar-bg-fill-warning,#fff6dc)]",
  Informative: "bg-[var(--snackbar-bg-fill-informative,#e1eefe)]",
  Success: "bg-[var(--snackbar-bg-fill-success,#e6fff0)]",
};

const typeFillDark: Record<InlineMessageType, string> = {
  Error: "bg-[rgba(231,57,71,0.4)]",
  Warning: "bg-[rgba(255,191,0,0.4)]",
  Informative: "bg-[rgba(13,78,165,0.4)]",
  Success: "bg-[rgba(26,146,75,0.4)]",
};

const typeStripeDefault: Record<InlineMessageType, string> = {
  Error: "bg-[var(--snackbar-icon-error,#e73947)]",
  Warning: "bg-[var(--snackbar-icon-warning,#ffbf00)]",
  Informative: "bg-[var(--snackbar-icon-informative,#0d4ea5)]",
  Success: "bg-[var(--snackbar-icon-success,#1a924b)]",
};

const typeStripeDark: Record<InlineMessageType, string> = {
  Error: "bg-[#e73947]",
  Warning: "bg-[#ffbf00]",
  Informative: "bg-[#67aaf9]",
  Success: "bg-[#84bd9e]",
};

const iconMap: Record<InlineMessageType, string> = {
  Error: "\u2297",
  Warning: "\u26A0",
  Informative: "\u24D8",
  Success: "\u2713",
};

const iconColorDefault: Record<InlineMessageType, string> = {
  Error: "text-[#e73947]",
  Warning: "text-[#ffbf00]",
  Informative: "text-[#0d4ea5]",
  Success: "text-[#1a924b]",
};

export function InlineMessage({
  text = "Lorem ipsum dolor sit amet",
  type = "Error",
  size = "L",
  showIcon = true,
  showLink = true,
  dark = false,
  linkText = "Link",
  onLinkClick,
  className,
}: InlineMessageProps) {
  const fill = dark ? typeFillDark[type] : typeFillDefault[type];
  const stripe = dark ? typeStripeDark[type] : typeStripeDefault[type];
  const textColor = dark
    ? "text-white"
    : "text-[var(--font-color-active,#262c2f)]";
  const linkColor = dark
    ? "text-white"
    : "text-[var(--font-color-active,#262c2f)]";

  const paddingY =
    size === "S" ? "py-1" : size === "M" ? "py-2" : "py-4";
  const textSize =
    size === "L"
      ? "text-sm font-medium leading-[18px]"
      : "text-xs font-medium leading-[14px]";
  const iconSize = size === "L" ? "text-2xl w-6 h-6" : "text-base w-4 h-4";
  const heightClass = size === "L" ? "h-14" : "";
  const roundedClass = size === "S" ? "rounded" : "";

  return (
    <div
      className={
        className ||
        `flex items-center ${fill} ${heightClass} ${roundedClass} overflow-clip w-[328px] font-['Roboto',sans-serif]`
      }
    >
      {/* Left color stripe */}
      <div className={`w-1 self-stretch shrink-0 ${stripe}`} />

      {/* Content area */}
      <div className={`flex items-center gap-[5px] flex-1 px-2 ${paddingY}`}>
        {showIcon && (
          <span
            className={`shrink-0 flex items-center justify-center ${iconSize} ${dark ? "text-white/70" : iconColorDefault[type]}`}
          >
            {iconMap[type]}
          </span>
        )}

        <span className={`flex-1 ${textSize} ${textColor}`}>{text}</span>

        {showLink && (
          <button
            type="button"
            className={`text-xs font-medium leading-[14px] underline shrink-0 cursor-pointer hover:opacity-80 ${linkColor}`}
            onClick={onLinkClick}
          >
            {linkText}
          </button>
        )}
      </div>
    </div>
  );
}

/** Full-width inline message variant (e.g. responsible gaming timer) */
export function InlineMessageFull({
  regularText = "Ti restano solo",
  boldText = "09m 54s di gioco",
  className,
}: {
  regularText?: string;
  boldText?: string;
  className?: string;
}) {
  return (
    <div
      className={
        className ||
        "flex items-center justify-center gap-1 px-2 py-1 bg-[var(--snackbar-bg-fill-informative-alt,#e1eefe)] w-[324px] font-['Roboto',sans-serif]"
      }
    >
      <span className="text-xs font-normal leading-[14px] text-[var(--font-color-active,#262c2f)]">
        {regularText}
      </span>
      <span className="text-xs font-bold leading-[14px] text-[var(--font-color-active,#262c2f)]">
        {boldText}
      </span>
    </div>
  );
}

export default InlineMessage;
