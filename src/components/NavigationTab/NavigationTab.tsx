import React from "react";

/* ── TabNavigationItem (HP variant) ── */
type TabNavItemProps = {
  className?: string;
  label?: string;
  icon?: React.ReactNode;
  showIcon?: boolean;
  selected?: boolean;
  onClick?: () => void;
};

export function TabNavigationItem({
  className,
  label = "Label",
  icon,
  showIcon = true,
  selected = false,
  onClick,
}: TabNavItemProps) {
  return (
    <button
      className={
        className ||
        `flex flex-1 flex-col items-center justify-center min-h-0 min-w-[56px] bg-transparent border-0 p-0 cursor-pointer`
      }
      onClick={onClick}
      type="button"
    >
      <div
        className={`flex flex-col items-center justify-center w-full min-w-[56px] max-h-16 min-h-9 rounded-lg bg-white
        ${showIcon ? "gap-1 pt-1 pb-2 px-2" : "py-2 px-2"}`}
      >
        {showIcon && (
          <div className="w-6 h-6 flex items-center justify-center">
            {icon || <div className="w-5 h-5 rounded bg-[#262c2f]/10" />}
          </div>
        )}
        <span className="font-medium font-['Roboto',sans-serif] text-xs leading-[14px] text-center text-[#262c2f] whitespace-nowrap">
          {label}
        </span>
      </div>
    </button>
  );
}

/* ── TabNavigationItemCatalogo (CSK variant) ── */
type TabNavItemCatalogoProps = {
  className?: string;
  label?: string;
  icon?: React.ReactNode;
  showIcon?: boolean;
  selected?: boolean;
  onClick?: () => void;
};

export function TabNavigationItemCatalogo({
  className,
  label = "Label",
  icon,
  showIcon = true,
  selected = false,
  onClick,
}: TabNavItemCatalogoProps) {
  return (
    <button
      className={
        className ||
        `flex flex-1 flex-col items-center justify-center min-w-[86px] max-h-16 min-h-9 px-2 py-3 rounded-lg border-0 cursor-pointer
        ${selected ? "bg-[#bed62f]" : "bg-[#262c2f]"}`
      }
      onClick={onClick}
      type="button"
    >
      {showIcon && (
        <div className="w-6 h-6 flex items-center justify-center">
          {icon || <div className="w-5 h-5 rounded bg-white/10" />}
        </div>
      )}
      <span
        className={`font-normal font-['Roboto',sans-serif] text-xs leading-[14px] text-center whitespace-nowrap
        ${selected ? "text-[#262c2f]" : "text-white"}`}
      >
        {label}
      </span>
    </button>
  );
}

/* ── NavigationTab ── */
type NavigationTabItem = {
  id: string;
  label: string;
  icon?: React.ReactNode;
};

type NavigationTabProps = {
  className?: string;
  variant?: "HP" | "CSK";
  items?: NavigationTabItem[];
  activeId?: string;
  showIcons?: boolean;
  onTabChange?: (id: string) => void;
};

const defaultHpItems: NavigationTabItem[] = [
  { id: "sport", label: "Sport" },
  { id: "live", label: "Live" },
  { id: "virtual", label: "Virtual" },
  { id: "ippica", label: "Ippica" },
  { id: "giochi", label: "Giochi" },
];

const defaultCskItems: NavigationTabItem[] = [
  { id: "casino", label: "Casino" },
  { id: "slot", label: "Slot" },
  { id: "gratta", label: "Gratta e Vinci" },
  { id: "lotterie", label: "Lotterie" },
  { id: "carte", label: "Giochi di carte" },
];

export function NavigationTab({
  className,
  variant = "HP",
  items,
  activeId,
  showIcons = true,
  onTabChange,
}: NavigationTabProps) {
  const tabItems = items || (variant === "HP" ? defaultHpItems : defaultCskItems);
  const active = activeId || tabItems[0]?.id;

  return (
    <div
      className={
        className ||
        `flex items-center gap-2 px-4 py-2 w-[360px] ${
          variant === "CSK"
            ? "bg-[#2f3c43] overflow-clip"
            : "bg-[#2f3c43]"
        }`
      }
    >
      {tabItems.map((item) =>
        variant === "CSK" ? (
          <TabNavigationItemCatalogo
            key={item.id}
            label={item.label}
            icon={item.icon}
            showIcon={showIcons}
            selected={active === item.id}
            onClick={() => onTabChange?.(item.id)}
          />
        ) : (
          <TabNavigationItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            showIcon={showIcons}
            selected={active === item.id}
            onClick={() => onTabChange?.(item.id)}
          />
        )
      )}
    </div>
  );
}

export default NavigationTab;
