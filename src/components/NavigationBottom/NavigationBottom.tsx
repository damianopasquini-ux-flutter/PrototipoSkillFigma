import React from "react";

/* ── BottomNavItem ── */
export type NavSection =
  | "Home"
  | "Tipster"
  | "Biglietto"
  | "MyBets"
  | "Promo"
  | "Scommesse"
  | "Casino"
  | "Poker"
  | "Fedelta";

type BottomNavItemProps = {
  section: NavSection;
  selected?: boolean;
  badge?: number | null;
  icon?: React.ReactNode;
  onClick?: () => void;
};

const sectionLabels: Record<NavSection, string> = {
  Home: "Home",
  Tipster: "Tipster",
  Biglietto: "Biglietto",
  MyBets: "MyBets",
  Promo: "Promo",
  Scommesse: "Scommesse",
  Casino: "Casino",
  Poker: "Poker",
  Fedelta: "Fedelta",
};

export function BottomNavItem({
  section,
  selected = false,
  badge = null,
  icon,
  onClick,
}: BottomNavItemProps) {
  return (
    <button
      className="flex flex-1 flex-col items-center h-full min-w-0 cursor-pointer bg-transparent border-0 p-0"
      onClick={onClick}
      type="button"
    >
      <div className="flex flex-col gap-1.5 items-center h-[54px] max-w-[80px] min-w-[68px] pb-2 w-full">
        {/* Selection indicator bar */}
        <div
          className={`h-1 w-16 rounded-b-lg ${
            selected ? "bg-[#bed62f]" : "bg-transparent"
          }`}
        />

        {/* Icon + label */}
        <div className="flex flex-col gap-0.5 items-center">
          <div className="relative w-6 h-6">
            {icon || (
              <div
                className={`w-6 h-6 rounded ${
                  selected ? "bg-[#bed62f]/20" : "bg-white/10"
                }`}
              />
            )}
            {badge !== null && (
              <div className="absolute -top-1 -right-1 flex items-center justify-center">
                <div className="bg-[#ff8e0d] rounded-full w-4 h-4 flex items-center justify-center">
                  <span className="font-bold font-['Roboto',sans-serif] text-[10px] leading-3 text-center text-[#262c2f]">
                    {badge}
                  </span>
                </div>
              </div>
            )}
          </div>
          <span
            className={`font-['Roboto',sans-serif] text-xs whitespace-nowrap ${
              selected
                ? "font-bold text-[#bed62f]"
                : "font-normal text-white"
            }`}
          >
            {sectionLabels[section]}
          </span>
        </div>
      </div>
    </button>
  );
}

/* ── NavigationBottom ── */
type NavigationBottomProps = {
  className?: string;
  items?: NavSection[];
  activeSection?: NavSection;
  badges?: Partial<Record<NavSection, number>>;
  showHomeIndicator?: boolean;
  onSectionChange?: (section: NavSection) => void;
};

export function NavigationBottom({
  className,
  items = ["Home", "Tipster", "Biglietto", "MyBets", "Promo"],
  activeSection = "Home",
  badges = {},
  showHomeIndicator = true,
  onSectionChange,
}: NavigationBottomProps) {
  return (
    <div className={className || "flex flex-col items-start w-[360px]"}>
      {/* Nav bar */}
      <div className="flex flex-col items-center w-full min-h-[56px]">
        {/* Top separator line */}
        <div className="w-full h-px bg-[#3a474e]" />

        {/* Items row */}
        <div className="flex items-start justify-between w-full h-[58px] bg-[#2f3c43] px-2">
          {items.map((section) => (
            <BottomNavItem
              key={section}
              section={section}
              selected={activeSection === section}
              badge={badges[section] ?? null}
              onClick={() => onSectionChange?.(section)}
            />
          ))}
        </div>

        {/* Home indicator (Android/iOS) */}
        {showHomeIndicator && (
          <div className="flex items-center justify-center w-full h-[34px] bg-[#2f3c43] py-0.5">
            <div className="w-[134px] h-[5px] bg-white rounded-full" />
          </div>
        )}
      </div>
    </div>
  );
}

export default NavigationBottom;
