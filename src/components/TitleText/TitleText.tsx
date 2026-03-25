import React from "react";

/* ── TitleSection ── */
type TitleSectionProps = {
  className?: string;
  title?: string;
  size?: "XL" | "L" | "M" | "S" | "S Light" | "S Prominent";
};

const titleSizeMap: Record<string, string> = {
  XL: "font-extrabold font-['Mulish',sans-serif] text-2xl leading-7",
  L: "font-bold font-['Mulish',sans-serif] text-lg leading-5",
  M: "font-bold font-['Mulish',sans-serif] text-base leading-5",
  S: "font-bold font-['Mulish',sans-serif] text-sm leading-[18px]",
  "S Light": "font-normal font-['Mulish',sans-serif] text-sm leading-[18px]",
  "S Prominent": "font-black font-['Mulish',sans-serif] text-sm leading-[18px]",
};

export function TitleSection({ className, title = "Title", size = "XL" }: TitleSectionProps) {
  return (
    <div className={className || "flex items-center"}>
      <span className={`text-[#262c2f] whitespace-nowrap ${titleSizeMap[size] || titleSizeMap.XL}`}>
        {title}
      </span>
    </div>
  );
}

/* ── Subtitle ── */
type SubtitleProps = {
  className?: string;
  subtitle?: string;
  size?: "lg" | "md";
};

export function Subtitle({ className, subtitle = "subtitle", size = "lg" }: SubtitleProps) {
  return (
    <div className={className || "flex items-center"}>
      <span
        className={`font-normal font-['Roboto',sans-serif] text-[#222] whitespace-nowrap ${
          size === "lg" ? "text-base leading-5" : "text-sm leading-[18px]"
        }`}
      >
        {subtitle}
      </span>
    </div>
  );
}

/* ── TextContent ── */
type TextContentProps = {
  className?: string;
  text?: string;
  size?: "MD" | "S" | "S-Prominent";
};

export function TextContent({ className, text = "Text content", size = "MD" }: TextContentProps) {
  const sizeStyles: Record<string, string> = {
    MD: "font-normal text-sm leading-[18px]",
    S: "font-normal text-xs leading-[14px]",
    "S-Prominent": "font-bold text-xs leading-[14px]",
  };

  return (
    <div className={className || "flex items-center"}>
      <span className={`font-['Roboto',sans-serif] text-[#222] whitespace-nowrap ${sizeStyles[size] || sizeStyles.MD}`}>
        {text}
      </span>
    </div>
  );
}

/* ── TitleSectionLink ── */
type TitleSectionLinkProps = {
  className?: string;
  title?: string;
  link?: string;
  subtitle?: string;
  showIconLeft?: boolean;
  showIconRight?: boolean;
  showLink?: boolean;
  showSubtitle?: boolean;
  onLinkClick?: () => void;
};

export function TitleSectionLink({
  className,
  title = "Title",
  link = "Link",
  subtitle,
  showIconLeft = true,
  showIconRight = false,
  showLink = true,
  showSubtitle = false,
  onLinkClick,
}: TitleSectionLinkProps) {
  return (
    <div className={className || "flex flex-col gap-2 items-start justify-center w-[328px]"}>
      <div className="flex items-center gap-2 w-full">
        {showIconLeft && (
          <div className="w-4 h-4 overflow-clip">
            <svg viewBox="0 0 16 16" className="w-full h-full fill-[#262c2f]">
              <circle cx="8" cy="8" r="3" />
            </svg>
          </div>
        )}
        <div className="flex-1 flex items-center">
          <span className="font-bold font-['Mulish',sans-serif] text-base leading-5 text-[#262c2f] whitespace-nowrap">
            {title}
          </span>
        </div>
        {showLink && (
          <button
            className="font-normal font-['Roboto',sans-serif] text-sm leading-[18px] text-[#262c2f] underline text-right whitespace-nowrap"
            onClick={onLinkClick}
          >
            {link}
          </button>
        )}
        {showIconRight && (
          <div className="w-6 h-6 overflow-clip">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-[#262c2f]">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        )}
      </div>
      {showSubtitle && subtitle && (
        <div className="flex items-center w-full">
          <span className="font-normal font-['Roboto',sans-serif] text-sm leading-[18px] text-[#5c6063] flex-1">
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
}

/* ── TitleTicketPage (My Bets) ── */
type TitleTicketPageProps = {
  className?: string;
  type?: "Multipla" | "Sistema integrale" | "Sistema a correzione";
  count?: number;
  resultCount?: number;
  showResult?: boolean;
  dateText?: string;
};

export function TitleTicketPage({
  className,
  type = "Multipla",
  count = 7,
  resultCount,
  showResult = false,
  dateText = "Giocata: 07/11/2024 - 20:30",
}: TitleTicketPageProps) {
  const label =
    type === "Sistema a correzione"
      ? `Sistema (${count})`
      : type === "Sistema integrale"
        ? `Sistema integrale (${count})`
        : `Multipla (${count})`;

  return (
    <div className={className || "flex flex-col gap-2 items-start w-[328px]"}>
      <div className="flex items-center gap-2 justify-center w-full">
        <span className="font-bold font-['Mulish',sans-serif] text-base leading-5 text-[#262c2f] whitespace-nowrap">
          {label}
        </span>
        <div className="flex items-center gap-0.5">
          <div className="flex items-center justify-center w-[14px] h-[14px] rounded-sm bg-[#929597] px-2 py-0.5">
            <span className="font-medium font-['Roboto',sans-serif] text-xs leading-[14px] text-white tracking-[0.12px] whitespace-nowrap">
              {count}
            </span>
          </div>
          {showResult && resultCount !== undefined && (
            <div className="flex items-center justify-center w-[14px] h-[14px] rounded-sm bg-[#929597] px-2 py-0.5">
              <span className="font-medium font-['Roboto',sans-serif] text-xs leading-[14px] text-white tracking-[0.12px] whitespace-nowrap">
                {resultCount}
              </span>
            </div>
          )}
        </div>
      </div>
      <span className="font-normal font-['Roboto',sans-serif] text-xs leading-[14px] text-[#5c6063] text-center w-full">
        {dateText}
      </span>
    </div>
  );
}

/* ── Default export ── */
export default TitleSection;
