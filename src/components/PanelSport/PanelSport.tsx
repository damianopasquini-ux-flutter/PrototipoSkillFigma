import React from "react";

/* ------------------------------------------------------------------ */
/*  Sisal DS - Panel / Sport                                           */
/*  Bottom-sheet panel showing recent + all sport disciplines          */
/* ------------------------------------------------------------------ */

type DotProps = {
  selected?: boolean;
};

function Dot({ selected = false }: DotProps) {
  return (
    <div
      className={[
        "min-h-[8px] min-w-[8px] rounded-full shrink-0",
        selected
          ? "bg-[var(--appereance-pagination-fill-selected,#bed62f)] h-2 w-6"
          : "bg-[var(--appereance-pagination-fill-default,#c9cacb)] size-2",
      ].join(" ")}
    />
  );
}

function PaginationDots({
  total = 5,
  active = 0,
}: {
  total?: number;
  active?: number;
}) {
  return (
    <div className="flex gap-2 items-center justify-center">
      {Array.from({ length: total }).map((_, i) => (
        <Dot key={i} selected={i === active} />
      ))}
    </div>
  );
}

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

export interface SportCardProps {
  icon?: React.ReactNode;
  label?: string;
  variant?: "recent" | "all";
  onClick?: () => void;
}

function SportCard({
  icon,
  label = "Label",
  variant = "all",
  onClick,
}: SportCardProps) {
  const isRecent = variant === "recent";
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex flex-col items-center justify-center gap-1 rounded-lg font-['Roboto',sans-serif] text-xs font-medium text-center transition-colors",
        isRecent
          ? "bg-[var(--appereance-surface-frame-selected,#262c2f)] text-white w-[100px] h-[72px] px-2 py-2"
          : "bg-white text-[var(--appereance-font-color-alt,#5c6063)] flex-1 min-w-[100px] h-[72px] px-1 py-2 border border-[var(--appereance-border-default-alt,#e9eaea)] hover:bg-[var(--appereance-surface-frame-selected,#bed62f)]/10",
      ].join(" ")}
    >
      {icon && <span className="w-6 h-6 flex items-center justify-center">{icon}</span>}
      {!icon && (
        <span className="w-6 h-6 flex items-center justify-center opacity-40">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2c2.5 2.5 4 6 4 10s-1.5 7.5-4 10c-2.5-2.5-4-6-4-10s1.5-7.5 4-10z" />
          </svg>
        </span>
      )}
      <span className="leading-[14px] line-clamp-2">{label}</span>
    </button>
  );
}

export interface PanelSportProps {
  className?: string;
  title?: string;
  recentSports?: { label: string; icon?: React.ReactNode }[];
  allSports?: { label: string; icon?: React.ReactNode }[];
  onClose?: () => void;
}

export function PanelSport({
  className,
  title = "Sport",
  recentSports = [
    { label: "Label" },
    { label: "Label" },
    { label: "Label" },
    { label: "Label" },
  ],
  allSports = Array.from({ length: 12 }, () => ({ label: "Label" })),
  onClose,
}: PanelSportProps) {
  /* Split allSports into rows of 3 */
  const rows: typeof allSports[] = [];
  for (let i = 0; i < allSports.length; i += 3) {
    rows.push(allSports.slice(i, i + 3));
  }

  return (
    <div
      className={
        className ||
        "bg-[var(--appereance-surface-panel-default,white)] flex flex-col gap-6 items-center overflow-clip pb-6 rounded-t-[var(--radius-panel,8px)] w-[360px]"
      }
    >
      {/* Header */}
      <div className="bg-[var(--appereance-surface-panel-default,white)] flex gap-2 h-14 items-center px-4 rounded-t-[var(--radius-panel,8px)] w-full">
        <h2 className="flex-1 font-['Mulish',sans-serif] font-extrabold text-2xl leading-7 text-[var(--appereance-font-color-active,#262c2f)]">
          {title}
        </h2>
        <CloseButton onClick={onClose} />
      </div>

      {/* Visitati di recente */}
      <div className="flex flex-col gap-4 items-start px-4 w-full">
        <h3 className="font-['Mulish',sans-serif] font-bold text-base leading-5 text-[var(--appereance-font-color-active,#262c2f)]">
          Visitati di recente
        </h3>
        <div className="flex gap-2 items-center w-full overflow-x-auto">
          {recentSports.map((sport, i) => (
            <SportCard key={i} label={sport.label} icon={sport.icon} variant="recent" />
          ))}
        </div>
      </div>

      {/* Tutti gli sport */}
      <div className="flex flex-col gap-4 items-start px-4 w-full">
        <h3 className="font-['Mulish',sans-serif] font-bold text-base leading-5 text-[var(--appereance-font-color-active,#262c2f)]">
          Tutti gli sport
        </h3>
        <div className="flex flex-col gap-2 items-start w-full">
          {rows.map((row, ri) => (
            <div key={ri} className="flex gap-2 items-center w-full">
              {row.map((sport, ci) => (
                <SportCard key={ci} label={sport.label} icon={sport.icon} variant="all" />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <PaginationDots total={5} active={0} />
    </div>
  );
}

export default PanelSport;
