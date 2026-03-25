import React from "react";

type SnackbarType = "Error" | "Warning" | "Informative" | "Success";

export interface SnackbarProps {
  /** Title text */
  title?: string;
  /** Subtitle/description text */
  subtitle?: string;
  /** Variant type */
  type?: SnackbarType;
  /** Show icon */
  showIcon?: boolean;
  /** Show link */
  showLink?: boolean;
  /** Link text */
  linkText?: string;
  /** Link click handler */
  onLinkClick?: () => void;
  /** Close/dismiss handler */
  onDismiss?: () => void;
  /** Additional CSS classes */
  className?: string;
}

const typeConfig: Record<
  SnackbarType,
  { bg: string; border: string; icon: string }
> = {
  Error: {
    bg: "bg-[var(--snackbar-bg-fill-error,#ffeaeb)]",
    border: "border-[var(--snackbar-icon-error,#e73947)]",
    icon: "\u2297", // circled X
  },
  Warning: {
    bg: "bg-[var(--snackbar-bg-fill-warning,#fff6dc)]",
    border: "border-[var(--snackbar-icon-warning,#ffbf00)]",
    icon: "\u26A0", // warning triangle
  },
  Informative: {
    bg: "bg-[var(--snackbar-bg-fill-informative,#e1eefe)]",
    border: "border-[var(--snackbar-icon-informative,#0d4ea5)]",
    icon: "\u24D8", // circled i
  },
  Success: {
    bg: "bg-[var(--snackbar-bg-fill-success,#e6fff0)]",
    border: "border-[var(--snackbar-icon-success,#1a924b)]",
    icon: "\u2713", // checkmark
  },
};

const iconColors: Record<SnackbarType, string> = {
  Error: "text-[#e73947]",
  Warning: "text-[#ffbf00]",
  Informative: "text-[#0d4ea5]",
  Success: "text-[#1a924b]",
};

export function Snackbar({
  title = "Title",
  subtitle = "Lorem ipsum dolor sit amet, consectet",
  type = "Error",
  showIcon = true,
  showLink = true,
  linkText = "Link",
  onLinkClick,
  onDismiss,
  className,
}: SnackbarProps) {
  const config = typeConfig[type];

  return (
    <div
      className={
        className ||
        `flex items-center gap-4 px-4 py-2 rounded-lg border ${config.bg} ${config.border} w-[328px] font-['Roboto',sans-serif]`
      }
    >
      {showIcon && (
        <span className={`text-2xl shrink-0 ${iconColors[type]}`}>
          {config.icon}
        </span>
      )}

      <div className="flex flex-col gap-1 flex-1 min-w-0 text-[var(--font-color-active,#262c2f)]">
        {title && (
          <p className="text-sm font-medium leading-[18px]">{title}</p>
        )}
        {subtitle && (
          <p className="text-xs font-normal leading-[14px]">{subtitle}</p>
        )}
      </div>

      {showLink && (
        <button
          type="button"
          className="text-xs font-medium leading-[14px] underline text-[var(--font-color-active,#262c2f)] shrink-0 cursor-pointer hover:opacity-80"
          onClick={onLinkClick}
        >
          {linkText}
        </button>
      )}
    </div>
  );
}

export default Snackbar;
