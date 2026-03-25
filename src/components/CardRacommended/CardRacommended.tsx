import React from "react";

/* ------------------------------------------------------------------ */
/*  Card / Racommended                                                 */
/*  Figma node 5336:31712 – file 1KwGa2GwNraywm2ukpfGHe               */
/*  Note: directory name keeps original Figma typo "Racommended"       */
/* ------------------------------------------------------------------ */

export type CardRacommendedProps = {
  className?: string;
  team1?: string;
  team2?: string;
  team1LogoUrl?: string;
  team2LogoUrl?: string;
  reasonLabel?: string;
  reasonValue?: string;
  suggestionLabel?: string;
  suggestionText?: string;
  oddsLabel?: string;
  oddsValue?: string;
  onOddsClick?: () => void;
};

export function CardRacommended({
  className,
  team1 = "Team 1",
  team2 = "Team 2",
  team1LogoUrl = "",
  team2LogoUrl = "",
  reasonLabel = "Perch\u00E8 hai giocato",
  reasonValue = "Lorem ipsum",
  suggestionLabel = "Ti consigliamo",
  suggestionText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  oddsLabel = "1",
  oddsValue = "1.55",
  onOddsClick,
}: CardRacommendedProps) {
  return (
    <div
      className={
        className ||
        "bg-[var(--appereance-surface-frame-default,white)] flex flex-col items-start overflow-hidden rounded-lg shadow-[0px_2px_8px_1px_rgba(0,0,0,0.1)] w-[242px]"
      }
    >
      {/* Header with grass field background */}
      <div className="relative flex gap-2 items-center h-[46px] p-2 w-full overflow-hidden">
        {/* Field background */}
        <div
          className="absolute inset-x-[-24px] inset-y-0"
          style={{
            background: "linear-gradient(135deg, #1a472a 0%, #2d5a37 50%, #1a472a 100%)",
          }}
        />

        {/* Team logos */}
        <div className="relative flex items-center h-6 w-[45px] shrink-0 z-10">
          <div className="absolute left-0 top-[-4px] w-6 h-6 rounded-full bg-[var(--surface-page-default,#eff0f0)] border border-white flex items-center justify-center overflow-hidden p-[2px]">
            {team1LogoUrl ? (
              <img src={team1LogoUrl} alt={team1} className="w-[21px] h-[21px] object-cover" />
            ) : (
              <div className="w-[21px] h-[21px] rounded-full bg-[#929597]" />
            )}
          </div>
          <div className="absolute left-[21px] top-[3px] w-6 h-6 rounded-full bg-[var(--surface-page-default,#eff0f0)] border border-white flex items-center justify-center overflow-hidden p-[2px]">
            {team2LogoUrl ? (
              <img src={team2LogoUrl} alt={team2} className="w-[21px] h-[21px] object-cover" />
            ) : (
              <div className="w-[21px] h-[21px] rounded-full bg-[#929597]" />
            )}
          </div>
        </div>

        {/* Team names */}
        <div className="relative flex flex-col flex-1 gap-[2px] items-start justify-center min-w-0 z-10">
          <span className="font-medium text-xs leading-[14px] text-white whitespace-nowrap font-['Roboto',sans-serif]">
            {team1}
          </span>
          <span className="font-medium text-xs leading-[14px] text-white whitespace-nowrap font-['Roboto',sans-serif]">
            {team2}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-2 items-start p-2 w-full">
        {/* Reason */}
        <div className="flex flex-col gap-[2px] items-center w-full">
          <span className="font-normal text-xs leading-[14px] text-[var(--appereance-font-color-alt,#5c6063)] w-full font-['Roboto',sans-serif]">
            {reasonLabel}
          </span>
          <span className="font-medium text-xs leading-[14px] text-[var(--appereance-font-color-active,#262c2f)] tracking-[0.12px] w-full font-['Roboto',sans-serif]">
            {reasonValue}
          </span>
        </div>

        {/* Suggestion */}
        <div className="flex flex-col gap-[2px] items-start w-full">
          <span className="font-normal text-xs leading-[14px] text-[var(--appereance-font-color-alt,#5c6063)] w-full font-['Roboto',sans-serif]">
            {suggestionLabel}
          </span>
          <p className="font-medium text-sm leading-[18px] text-[var(--appereance-font-color-active,#262c2f)] w-full font-['Roboto',sans-serif]">
            {suggestionText}
          </p>
        </div>

        {/* Odds button */}
        <button
          className="bg-[var(--appereance-odds-selection-fill-active,#e9eaea)] flex flex-col gap-[2px] items-center justify-center h-9 overflow-hidden px-2 rounded-lg w-full cursor-pointer"
          onClick={onOddsClick}
        >
          <span className="font-normal text-xs leading-[14px] text-[var(--appereance-odds-selection-text-active,#262c2f)] text-center font-['Roboto',sans-serif]">
            {oddsLabel}
          </span>
          <span className="font-bold text-xs leading-[100%] text-[var(--appereance-odds-selection-text-active,#262c2f)] text-center font-['Roboto',sans-serif]">
            {oddsValue}
          </span>
        </button>
      </div>
    </div>
  );
}

export default CardRacommended;
