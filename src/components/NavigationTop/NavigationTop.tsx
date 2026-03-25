import React from "react";

/* ── StatusBar ── */
type StatusBarProps = {
  className?: string;
  time?: string;
  ios?: boolean;
};

export function StatusBar({ className, time = "12:45", ios = false }: StatusBarProps) {
  if (ios) {
    return (
      <div
        className={
          className ||
          "flex items-center justify-between w-full h-[52px] bg-[#2f3c43] px-6 pt-3"
        }
      >
        <span className="font-medium font-['Roboto',sans-serif] text-sm text-white tracking-[0.1px]">
          {time}
        </span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-3 bg-white/80 rounded-sm" />
          <div className="w-3 h-3 bg-white/80 rounded-sm" />
          <div className="w-3 h-3 bg-white/80 rounded-sm" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        className ||
        "flex items-center justify-between w-full h-6 min-h-6 max-h-6 bg-[#2f3c43] px-6 py-3.5"
      }
    >
      <span className="font-medium font-['Roboto',sans-serif] text-sm leading-5 text-white tracking-[0.1px]">
        {time}
      </span>
      <div className="flex items-start h-[18px]">
        <div className="w-6 h-5 bg-white/80 rounded-sm" />
        <div className="w-4 h-4 bg-white/80 rounded-sm" />
        <div className="w-3 h-4 bg-white/80 rounded-sm" />
      </div>
    </div>
  );
}

/* ── Profile ── */
type ProfileProps = {
  className?: string;
  badgeCount?: number | null;
  onClick?: () => void;
};

export function Profile({ className, badgeCount = null, onClick }: ProfileProps) {
  return (
    <button
      className={className || "relative flex items-start gap-2.5 bg-transparent border-0 p-0 cursor-pointer"}
      onClick={onClick}
      type="button"
    >
      {/* Avatar circle */}
      <div className="w-[30px] h-[30px] rounded-full bg-[#3a474e] flex items-center justify-center">
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
          <circle cx="6" cy="4" r="3" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M1 13c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="white" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
      {badgeCount !== null && (
        <div className="absolute -top-1 left-[18px] flex items-center justify-center">
          <div className="bg-[#ff8e0d] rounded-full w-4 h-4 flex items-center justify-center">
            <span className="font-bold font-['Roboto',sans-serif] text-[10px] leading-3 text-center text-[#262c2f]">
              {badgeCount}
            </span>
          </div>
        </div>
      )}
    </button>
  );
}

/* ── NavigationTop ── */
type NavigationTopProps = {
  className?: string;
  type?: "Homepage" | "Sport" | "Manifestazione" | "Evento" | "Live" | "Modal" | "Dettaglio" | "VociNavbar";
  brand?: "Betting" | "Pokerstars";
  showStatusBar?: boolean;
  showBackButton?: boolean;
  title?: string;
  saldo?: string;
  bonus?: string;
  isLoggedIn?: boolean;
  onMenuClick?: () => void;
  onBackClick?: () => void;
  onProfileClick?: () => void;
};

export function NavigationTop({
  className,
  type = "Homepage",
  showStatusBar = true,
  showBackButton = false,
  title,
  saldo = "0,00\u20ac",
  bonus = "0,00\u20ac",
  isLoggedIn = true,
  onMenuClick,
  onBackClick,
  onProfileClick,
}: NavigationTopProps) {
  const showBack = showBackButton || !["Homepage"].includes(type);

  return (
    <div
      className={
        className ||
        "flex flex-col items-center w-[360px] bg-[#2f3c43]"
      }
    >
      {/* Status bar */}
      {showStatusBar && <StatusBar />}

      {/* Header row */}
      <div className="flex items-center gap-4 w-full h-11 px-4">
        {/* Left: hamburger or back */}
        {showBack ? (
          <button
            className="w-6 h-6 flex items-center justify-center bg-transparent border-0 p-0 cursor-pointer"
            onClick={onBackClick}
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ) : (
          <button
            className="w-6 h-6 flex items-center justify-center bg-transparent border-0 p-0 cursor-pointer"
            onClick={onMenuClick}
            type="button"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <rect y="0" width="20" height="2" rx="1" fill="white" />
              <rect y="6" width="20" height="2" rx="1" fill="white" />
              <rect y="12" width="20" height="2" rx="1" fill="white" />
            </svg>
          </button>
        )}

        {/* Center: brand logo or title */}
        <div className="flex-1 flex flex-col items-start min-w-0">
          {title ? (
            <span className="font-bold font-['Roboto',sans-serif] text-sm text-white truncate">
              {title}
            </span>
          ) : (
            <div className="h-6 w-[76px] flex items-center">
              <span className="font-bold font-['Roboto',sans-serif] text-sm text-[#bed62f] tracking-wider uppercase">
                SISAL
              </span>
            </div>
          )}
        </div>

        {/* Right: login info + profile */}
        {isLoggedIn ? (
          <div className="flex items-center gap-2 h-[30px]">
            <div className="flex flex-col items-end text-right text-white text-xs font-['Roboto',sans-serif] whitespace-nowrap leading-none">
              <div className="flex gap-0.5 items-center">
                <span className="font-normal leading-[14px]">Saldo:</span>
                <span className="font-bold">{saldo}</span>
              </div>
              <div className="flex gap-0.5 items-center">
                <span className="font-normal leading-[14px]">Bonus:</span>
                <span className="font-bold">{bonus}</span>
              </div>
            </div>
            <Profile onClick={onProfileClick} />
          </div>
        ) : (
          <button
            className="flex items-center justify-center h-8 px-4 rounded-lg bg-[#bed62f] border-0 cursor-pointer"
            type="button"
          >
            <span className="font-bold font-['Roboto',sans-serif] text-xs text-[#262c2f]">
              Accedi
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export default NavigationTop;
