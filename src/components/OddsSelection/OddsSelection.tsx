import React from "react";

type OddsSelectionProps = {
  className?: string;
  result?: string;
  quota?: string;
  selected?: boolean;
  disabled?: boolean;
  locked?: boolean;
  oddsUp?: boolean;
  oddsDown?: boolean;
  duo?: boolean;
  onClick?: () => void;
};

export function OddsSelection({
  className,
  result = "1",
  quota = "1.55",
  selected = false,
  disabled = false,
  locked = false,
  oddsUp = false,
  oddsDown = false,
  onClick,
}: OddsSelectionProps) {
  const bgColor = selected
    ? "bg-[#bed62f]"
    : disabled
    ? "bg-[#e9eaea] opacity-40"
    : "bg-[#e9eaea]";

  const textColor = selected ? "text-[#262c2f]" : "text-[#262c2f]";

  return (
    <button
      className={
        className ||
        `relative flex flex-col items-center justify-center gap-0.5 w-[132px] h-9 rounded-lg overflow-clip px-2 ${bgColor} ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`
      }
      disabled={disabled || locked}
      onClick={onClick}
    >
      {locked ? (
        <svg className="w-4 h-4 text-[#929597]" viewBox="0 0 16 16" fill="currentColor">
          <path d="M12 7H4V5a4 4 0 118 0v2zm-2 0H6V5a2 2 0 114 0v2zM3 8h10a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1V9a1 1 0 011-1z" />
        </svg>
      ) : (
        <>
          <span className={`font-normal font-['Roboto',sans-serif] text-xs leading-[14px] ${textColor}`}>
            {result}
          </span>
          <span className={`font-bold font-['Roboto',sans-serif] text-xs leading-none ${textColor}`}>
            {quota}
          </span>
        </>
      )}

      {oddsDown && (
        <div className="absolute bottom-0 right-0 w-4 h-4">
          <svg viewBox="0 0 16 16" className="w-full h-full text-red-500" fill="currentColor">
            <path d="M8 12l-4-4h8z" />
          </svg>
        </div>
      )}
      {oddsUp && (
        <div className="absolute top-0 right-0 w-4 h-4">
          <svg viewBox="0 0 16 16" className="w-full h-full text-green-500" fill="currentColor">
            <path d="M8 4l4 4H4z" />
          </svg>
        </div>
      )}

      {duo && (
        <div className="absolute top-0 left-0 w-5 h-5 bg-[#bed62f] rounded-br-lg flex items-center justify-center">
          <span className="text-[8px] font-bold text-[#262c2f]">DUO</span>
        </div>
      )}
    </button>
  );
}

export function OddsSelectionRow({
  className,
  items = [
    { result: "1", quota: "1.55" },
    { result: "X", quota: "3.20" },
    { result: "2", quota: "4.50" },
  ],
}: {
  className?: string;
  items?: Array<{ result: string; quota: string; selected?: boolean }>;
}) {
  return (
    <div className={className || "flex gap-2 items-center"}>
      {items.map((item, i) => (
        <OddsSelection key={i} result={item.result} quota={item.quota} selected={item.selected} />
      ))}
    </div>
  );
}

export function OddsSelectionOneResult({
  className,
  label = "Lorem ipsum dolor sit amet",
  result = "1",
  quota = "1.55",
}: {
  className?: string;
  label?: string;
  result?: string;
  quota?: string;
}) {
  return (
    <div className={className || "flex items-center gap-2 w-[312px]"}>
      <span className="flex-1 font-medium font-['Roboto',sans-serif] text-xs leading-[14px] text-[#262c2f] h-9 flex items-center">
        {label}
      </span>
      <OddsSelection result={result} quota={quota} className="flex-none w-auto min-w-[80px] flex flex-col items-center justify-center gap-0.5 h-9 rounded-lg overflow-clip px-2 bg-[#e9eaea]" />
    </div>
  );
}

export function OddsSelectionAddResult({ className }: { className?: string }) {
  return (
    <div className={className || "flex flex-col gap-2 items-start w-[312px]"}>
      <div className="flex items-center justify-center gap-0.5 w-full h-9 rounded-lg border border-dashed border-[#929597] px-2">
        <span className="flex-1 font-normal font-['Roboto',sans-serif] text-xs leading-[14px] text-[#262c2f]">
          Aggiungi esito
        </span>
        <svg className="w-6 h-6 text-[#262c2f]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    </div>
  );
}

export function OddsSelectionIncreased({
  className,
  label = "Lorem ipsum dolor sit amet",
  oldQuota = "1.55",
  result = "1",
  newQuota = "1.55",
}: {
  className?: string;
  label?: string;
  oldQuota?: string;
  result?: string;
  newQuota?: string;
}) {
  return (
    <div className={className || "flex items-center gap-2 w-[312px]"}>
      <span className="w-[204px] font-medium font-['Roboto',sans-serif] text-xs leading-[14px] text-[#262c2f] h-9 flex items-center">
        {label}
      </span>
      <div className="flex-1 flex items-center gap-1 border border-[#e9eaea] rounded-lg pl-2 h-9">
        <span className="font-bold font-['Roboto',sans-serif] text-xs text-[#929597] line-through">
          {oldQuota}
        </span>
        <div className="flex-1 flex flex-col items-center justify-center gap-0.5 h-9 bg-[#e9eaea] rounded-lg px-2">
          <span className="font-normal font-['Roboto',sans-serif] text-xs leading-[14px] text-[#262c2f]">{result}</span>
          <span className="font-bold font-['Roboto',sans-serif] text-xs text-[#262c2f]">{newQuota}</span>
        </div>
      </div>
    </div>
  );
}

export default OddsSelection;
