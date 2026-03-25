import React from "react";

/* ── TabHomeItem ── */
type TabHomeItemProps = {
  className?: string;
  label?: string;
  selected?: boolean;
  onClick?: () => void;
};

export function TabHomeItem({
  className,
  label = "Label",
  selected = false,
  onClick,
}: TabHomeItemProps) {
  return (
    <button
      className={
        className ||
        "flex flex-col gap-1 items-start h-7 bg-transparent border-0 p-0 cursor-pointer"
      }
      onClick={onClick}
      type="button"
    >
      <span
        className={`font-bold font-['Mulish',sans-serif] text-base leading-5 text-center whitespace-nowrap ${
          selected ? "text-[#262c2f]" : "text-[#5c6063]"
        }`}
      >
        {label}
      </span>
      {selected && (
        <div className="flex items-center justify-center w-full">
          <div className="w-full h-1 bg-[#bed62f] rounded-b-lg" />
        </div>
      )}
    </button>
  );
}

/* ── TabDefaultItem ── */
type TabDefaultItemProps = {
  className?: string;
  label?: string;
  selected?: boolean;
  badgeNew?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export function TabDefaultItem({
  className,
  label = "Label",
  selected = false,
  badgeNew = false,
  disabled = false,
  onClick,
}: TabDefaultItemProps) {
  return (
    <button
      className={
        className ||
        `flex flex-col items-center min-w-[56px] h-12 pt-4 px-4 bg-transparent border-0 p-0 cursor-pointer ${
          selected ? "gap-0.5" : ""
        } ${disabled ? "opacity-40 cursor-not-allowed" : ""}`
      }
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <div className="flex items-center gap-1 justify-center">
        <span
          className={`font-medium font-['Roboto',sans-serif] text-sm text-center whitespace-nowrap ${
            selected ? "text-[#bed62f]" : "text-[#c9cacb]"
          }`}
        >
          {label}
        </span>
        {badgeNew && (
          <div className="flex items-start h-3.5">
            <div className="bg-[#bed62f] flex items-center justify-center px-1 rounded-sm">
              <span className="font-medium font-['Roboto',sans-serif] text-[10px] text-[#262c2f] whitespace-nowrap">
                New
              </span>
            </div>
          </div>
        )}
      </div>
      {selected && (
        <div className="w-8 h-1 bg-[#bed62f] rounded-lg" />
      )}
    </button>
  );
}

/* ── TabLiveItem ── */
type TabLiveItemProps = {
  className?: string;
  label?: string;
  icon?: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
};

export function TabLiveItem({
  className,
  label = "Label",
  icon,
  selected = false,
  onClick,
}: TabLiveItemProps) {
  return (
    <button
      className={
        className ||
        `flex items-center gap-1 justify-center h-10 w-[120px] pl-2 pr-4 py-2 border-0 cursor-pointer ${
          selected ? "bg-[#262c2f]" : "bg-[#2c363c]"
        }`
      }
      onClick={onClick}
      type="button"
    >
      <div className="w-6 h-6 flex items-center justify-center">
        {icon || <div className="w-5 h-5 rounded bg-white/10" />}
      </div>
      <span
        className={`font-medium font-['Roboto',sans-serif] text-xs leading-[14px] text-center whitespace-nowrap ${
          selected ? "text-[#bed62f]" : "text-[#c9cacb]"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

/* ── TabSportItem (Discipline Live) ── */
type TabSportItemProps = {
  className?: string;
  label?: string;
  icon?: React.ReactNode;
  selected?: boolean;
  badge?: number | null;
  onClick?: () => void;
};

export function TabSportItem({
  className,
  label = "Label",
  icon,
  selected = false,
  badge = null,
  onClick,
}: TabSportItemProps) {
  return (
    <button
      className={
        className ||
        "flex flex-col items-center min-w-[48px] max-w-[84px] bg-transparent border-0 p-0 cursor-pointer"
      }
      onClick={onClick}
      type="button"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {icon || <div className="w-5 h-5 rounded bg-white/10" />}
        {badge !== null && (
          <div className="absolute -top-0 left-[calc(50%+4px)] -translate-x-1/2 flex items-center justify-center">
            <div
              className={`rounded-full w-4 h-4 flex items-center justify-center ${
                selected ? "bg-[#bed62f]" : "bg-[#929597]"
              }`}
            >
              <span
                className={`font-bold font-['Roboto',sans-serif] text-[10px] leading-3 text-center ${
                  selected ? "text-[#262c2f]" : "text-white"
                }`}
              >
                {badge}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center h-6 min-w-[48px] max-w-[82px]">
        <span
          className={`font-medium font-['Roboto',sans-serif] text-xs leading-[14px] text-center whitespace-nowrap ${
            selected ? "text-[#bed62f]" : "text-[#c9cacb]"
          }`}
        >
          {label}
        </span>
      </div>
    </button>
  );
}

/* ── TabBar ── */
type TabItem = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badgeNew?: boolean;
  badge?: number | null;
};

type TabBarProps = {
  className?: string;
  variant?: "Home" | "Default" | "MatchLive" | "DisciplineLive";
  items?: TabItem[];
  activeId?: string;
  onTabChange?: (id: string) => void;
};

export function TabBar({
  className,
  variant = "Default",
  items = [
    { id: "tab1", label: "Label" },
    { id: "tab2", label: "Label" },
    { id: "tab3", label: "Label" },
  ],
  activeId,
  onTabChange,
}: TabBarProps) {
  const active = activeId || items[0]?.id;

  if (variant === "Home") {
    return (
      <div
        className={
          className ||
          "flex items-center gap-4 px-4 w-[360px]"
        }
      >
        {items.map((item) => (
          <TabHomeItem
            key={item.id}
            label={item.label}
            selected={active === item.id}
            onClick={() => onTabChange?.(item.id)}
          />
        ))}
      </div>
    );
  }

  if (variant === "MatchLive") {
    return (
      <div className={className || "flex items-center"}>
        {items.map((item) => (
          <TabLiveItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            selected={active === item.id}
            onClick={() => onTabChange?.(item.id)}
          />
        ))}
      </div>
    );
  }

  if (variant === "DisciplineLive") {
    return (
      <div
        className={
          className ||
          "flex items-center gap-4 overflow-clip px-4 py-1 w-[360px] bg-[#2f3c43]"
        }
      >
        {items.map((item) => (
          <TabSportItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            selected={active === item.id}
            badge={item.badge ?? null}
            onClick={() => onTabChange?.(item.id)}
          />
        ))}
      </div>
    );
  }

  /* Default variant */
  return (
    <div
      className={
        className ||
        "relative flex items-start overflow-clip w-[360px]"
      }
    >
      {/* Background fill */}
      <div className="absolute inset-0 bg-[#2c363c] pointer-events-none" />
      {items.map((item) => (
        <TabDefaultItem
          key={item.id}
          label={item.label}
          selected={active === item.id}
          badgeNew={item.badgeNew}
          onClick={() => onTabChange?.(item.id)}
        />
      ))}
      {/* Inner shadow */}
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_3px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

export default TabBar;
