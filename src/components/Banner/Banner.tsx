import React from "react";

/* ── HeroBanner ── */
export interface HeroBannerProps {
  /** Title text */
  title?: string;
  /** Subtitle text */
  subtitle?: string;
  /** Background image URL */
  backgroundImage?: string;
  /** Show badge label */
  showBadge?: boolean;
  /** Badge text */
  badgeLabel?: string;
  /** Show gradient overlay */
  showGradient?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export function HeroBanner({
  title = "Title",
  subtitle = "Accumula Sisal point e riscatta i bonus nel Programma fedelt\u00e0",
  backgroundImage,
  showBadge = true,
  badgeLabel = "Label",
  showGradient = true,
  onClick,
  className,
}: HeroBannerProps) {
  return (
    <div
      className={
        className ||
        "relative flex flex-col items-center justify-end pt-[120px] pb-4 px-4 rounded-2xl w-[328px] overflow-clip cursor-pointer"
      }
      onClick={onClick}
    >
      {/* Background */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-2xl pointer-events-none"
        />
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#00653b] to-[#004d2e] rounded-2xl" />
      )}

      {/* Gradient overlay */}
      {showGradient && (
        <div className="absolute bottom-0 left-0 right-0 h-[140px] bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.51)] to-[rgba(0,0,0,0.85)] rounded-b-2xl" />
      )}

      {/* Badge */}
      {showBadge && (
        <div className="absolute top-3 left-3">
          <div className="inline-flex items-center justify-center h-[18px] px-1 py-0.5 rounded bg-[var(--badge-fill-info,#67aaf9)] overflow-clip">
            <span className="font-medium font-['Roboto',sans-serif] text-xs leading-[14px] text-[var(--font-color-active,#262c2f)] whitespace-nowrap">
              {badgeLabel}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative flex flex-col items-center gap-1 text-center text-white w-full z-10">
        <h3 className="font-['Mulish',sans-serif] font-extrabold text-2xl leading-normal w-full">
          {title}
        </h3>
        <p className="font-['Roboto',sans-serif] font-normal text-base leading-5 w-full">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

/* ── PromoBanner ── */
export interface PromoBannerProps {
  /** Title text */
  title?: string;
  /** Subtitle text */
  subtitle?: string;
  /** Show link */
  showLink?: boolean;
  /** Link text */
  linkText?: string;
  /** Link click handler */
  onLinkClick?: () => void;
  /** Custom asset/icon element */
  asset?: React.ReactNode;
  /** Background color */
  bgColor?: string;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export function PromoBanner({
  title = "Title",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aa",
  showLink = false,
  linkText = "Link",
  onLinkClick,
  asset,
  bgColor = "var(--banner-promo-fill,#ffbf00)",
  onClick,
  className,
}: PromoBannerProps) {
  return (
    <div
      className={
        className ||
        `flex items-center gap-2 px-3 py-2 rounded-lg border border-[${bgColor}] overflow-clip shadow-[0px_2px_8px_1px_rgba(0,0,0,0.1)] w-[328px] font-['Roboto',sans-serif] cursor-pointer`
      }
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      {/* Asset / Icon */}
      {asset || (
        <div className="shrink-0 w-11 h-10 rounded bg-white/20 flex items-center justify-center">
          <span className="text-lg">&#9733;</span>
        </div>
      )}

      {/* Copy */}
      <div className="flex flex-col gap-0.5 flex-1 min-w-0 justify-center">
        <p className="font-['Mulish',sans-serif] font-black text-sm leading-[18px] text-[var(--banner-promo-title,#262c2f)]">
          {title}
        </p>
        <p className="text-xs font-normal leading-[14px] text-[var(--banner-promo-subtitle,#262c2f)]">
          {subtitle}
        </p>
        {showLink && (
          <button
            type="button"
            className="text-xs font-medium leading-[14px] underline text-[var(--font-color-active,#262c2f)] self-start cursor-pointer mt-0.5"
            onClick={(e) => {
              e.stopPropagation();
              onLinkClick?.();
            }}
          >
            {linkText}
          </button>
        )}
      </div>
    </div>
  );
}

/* ── WeSisalBanner ── */
export interface WeSisalBannerProps {
  /** Title text */
  title?: string;
  /** Subtitle text */
  subtitle?: string;
  /** Link text */
  linkText?: string;
  /** Link click handler */
  onLinkClick?: () => void;
  /** Logo/image element */
  logo?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export function WeSisalBanner({
  title = "Programma fedelt\u00e0 We Sisal",
  subtitle = "Accumula Sisal Point e scegli nel catalogo il bonus che preferisci",
  linkText = "Scopri di pi\u00f9",
  onLinkClick,
  logo,
  className,
}: WeSisalBannerProps) {
  return (
    <div
      className={
        className ||
        "flex items-start gap-4 px-3 py-4 rounded-lg bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.1)] overflow-clip w-[328px] font-['Roboto',sans-serif]"
      }
    >
      {logo || (
        <div className="shrink-0 w-[86px] h-[79px] rounded bg-[#f5f5f5] flex items-center justify-center overflow-clip">
          <span className="font-['Mulish',sans-serif] font-bold text-xs text-[#1a924b]">
            WeSisal
          </span>
        </div>
      )}

      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <div className="flex flex-col gap-1 text-[#262c2f]">
          <p className="font-['Mulish',sans-serif] font-bold text-sm leading-[18px]">
            {title}
          </p>
          <p className="text-xs font-normal leading-[14px]">{subtitle}</p>
        </div>
        <button
          type="button"
          className="text-sm font-medium leading-[18px] underline text-[var(--font-color-link,#00653b)] self-start cursor-pointer hover:opacity-80"
          onClick={onLinkClick}
        >
          {linkText}
        </button>
      </div>
    </div>
  );
}

/** Convenience wrapper exporting HeroBanner as default */
export function Banner(props: HeroBannerProps) {
  return <HeroBanner {...props} />;
}

export default Banner;
