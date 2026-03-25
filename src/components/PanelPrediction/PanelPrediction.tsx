import React from "react";
import { Button } from "../Button/Button";

/* ── Sub-components ────────────────────────────────────── */

function CloseButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      className="shrink-0 w-6 h-6 rounded-full bg-[#c9cacb] flex items-center justify-center cursor-pointer"
      onClick={onClick}
      aria-label="Chiudi"
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M1 1l8 8M9 1l-8 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  );
}

type StatusType = "Win" | "Pending" | "Loser" | "Refund";

function StatusBadge({ status = "Pending" }: { status?: StatusType }) {
  const config: Record<StatusType, { bg: string; text: string; label: string }> = {
    Win: { bg: "bg-[#1a924b]", text: "text-[#1a924b]", label: "Vincente" },
    Pending: { bg: "bg-[#929597]", text: "text-[#929597]", label: "Aperto" },
    Loser: { bg: "bg-[#e73947]", text: "text-[#e73947]", label: "Non vincente" },
    Refund: { bg: "bg-[#ff8e0d]", text: "text-[#ff8e0d]", label: "Rimborsato" },
  };
  const c = config[status];

  return (
    <div className="flex items-center gap-2">
      <div className={`w-4 h-4 rounded-full ${c.bg} flex items-center justify-center`}>
        {status === "Win" && (
          <svg width="8" height="8" viewBox="0 0 8 8" fill="white">
            <path d="M1 4l2 2 4-4" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {status === "Loser" && (
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M2 2l4 4M6 2l-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </div>
      <span className={`font-bold font-['Roboto',sans-serif] text-xs ${c.text} text-right`}>
        {c.label}
      </span>
    </div>
  );
}

type DetailRow = {
  label: string;
  value: string;
  bold?: boolean;
};

function PredictionDetailRow({
  label,
  value,
  bold = false,
  showBorder = true,
  icon,
}: {
  label: string;
  value: string;
  bold?: boolean;
  showBorder?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col gap-2 w-full pb-3 ${
        showBorder ? "border-b border-[#e9eaea]" : ""
      }`}
    >
      <span className="font-medium font-['Roboto',sans-serif] text-xs leading-[14px] text-[#262c2f]">
        {label}
      </span>
      <div className="flex items-center gap-2 w-full">
        <div className="flex-1 flex flex-col gap-2">
          <span
            className={`font-['Roboto',sans-serif] text-xs leading-[14px] text-[#262c2f] ${
              bold ? "font-medium" : "font-normal"
            }`}
          >
            {value}
          </span>
        </div>
        {icon && <div className="w-6 h-6 shrink-0">{icon}</div>}
      </div>
    </div>
  );
}

function PredictionStatusRow({
  status = "Win",
  showBorder = false,
}: {
  status?: StatusType;
  showBorder?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-2 w-full pb-3 ${
        showBorder ? "border-b border-[#e9eaea]" : ""
      }`}
    >
      <span className="font-medium font-['Roboto',sans-serif] text-xs leading-[14px] text-[#262c2f]">
        Stato:
      </span>
      <StatusBadge status={status} />
    </div>
  );
}

/* ── Stat icon ─────────────────────────────────────────── */

const StatsIcon = (
  <div className="flex items-center justify-center w-6 h-6">
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
      <rect x="0" y="8" width="4" height="6" rx="1" fill="#262c2f" />
      <rect x="7" y="4" width="4" height="10" rx="1" fill="#262c2f" />
      <rect x="14" y="0" width="4" height="14" rx="1" fill="#262c2f" />
    </svg>
  </div>
);

const InfoIcon = (
  <div className="flex items-center justify-center w-6 h-6">
    <svg className="w-4 h-4 text-[#929597]" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm.5 10.5h-1v-4h1v4zm0-5h-1v-1h1v1z" />
    </svg>
  </div>
);

/* ── SGP Panel Details ─────────────────────────────────── */

function SgpDetailRow({
  marketType = "Market type",
  result = "Result",
  share = "1.50",
}: {
  marketType?: string;
  result?: string;
  share?: string;
}) {
  return (
    <div className="flex flex-col w-full pl-2 pb-3 border-b border-[#e9eaea] h-11 justify-center">
      <span className="font-normal font-['Roboto',sans-serif] text-xs leading-[14px] text-[#5c6063] truncate">
        {marketType}
      </span>
      <div className="flex items-center gap-1 h-[14px]">
        <span className="font-medium font-['Roboto',sans-serif] text-xs leading-[14px] text-[#262c2f] truncate">
          {result}
        </span>
        <span className="font-medium font-['Roboto',sans-serif] text-xs leading-[14px] text-[#262c2f]">
          ({share})
        </span>
        <div className="ml-auto">{InfoIcon}</div>
      </div>
    </div>
  );
}

/* ── Main Panel ────────────────────────────────────────── */

type PanelPredictionProps = {
  className?: string;
  title?: string;
  showButton?: boolean;
  showSystem?: boolean;
  event?: {
    teams: string;
    date: string;
  };
  systemDetails?: Array<{
    label: string;
    value: string;
    bold?: boolean;
  }>;
  additionalDetails?: Array<{
    label: string;
    value: string;
    bold?: boolean;
    hasInfo?: boolean;
  }>;
  status?: StatusType;
  onClose?: () => void;
  onAction?: () => void;
};

export function PanelPrediction({
  className,
  title = "Dettaglio",
  showButton = true,
  showSystem = true,
  event = { teams: "Team  - Team 2", date: "12/10/2022" },
  systemDetails = [
    { label: "Scommessa:", value: "Lorem ipsum dolor sit amet, consectetur" },
    { label: "Pronostico:", value: "Lorem ipsum dolor sit amet, consectetur", bold: true },
    { label: "Referto:", value: "Lorem ipsum dolor sit amet, consectetur", bold: true },
  ],
  additionalDetails = [
    { label: "Scommessa:", value: "Lorem ipsum dolor sit amet, consectetur", hasInfo: true },
    { label: "Pronostico:", value: "Lorem ipsum dolor sit amet, consectetur", bold: true },
    { label: "Referto:", value: "Lorem ipsum dolor sit amet, consectetur", bold: true },
  ],
  status = "Win",
  onClose,
  onAction,
}: PanelPredictionProps) {
  return (
    <div
      className={
        className ||
        "flex flex-col items-start w-[360px] bg-white rounded-t-lg"
      }
    >
      {/* Header */}
      <div className="flex items-center gap-2 h-14 px-4 w-full rounded-t-lg bg-white shrink-0">
        <div className="flex-1 min-w-0">
          <span className="font-extrabold font-['Mulish',sans-serif] text-2xl leading-7 text-[#262c2f]">
            {title}
          </span>
        </div>
        <CloseButton onClick={onClose} />
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 w-full py-4">
        {/* Event */}
        <div className="flex flex-col gap-2 w-full px-4 pb-3 border-b border-[#e9eaea]">
          <span className="font-medium font-['Roboto',sans-serif] text-xs leading-[14px] text-[#262c2f]">
            Evento:
          </span>
          <div className="flex items-center gap-2 w-full">
            <div className="flex-1 flex flex-col gap-2">
              <span className="font-normal font-['Roboto',sans-serif] text-xs leading-[14px] text-[#262c2f]">
                {event.teams}
              </span>
              <span className="font-normal font-['Roboto',sans-serif] text-xs leading-[14px] text-[#262c2f] text-center w-[65px]">
                {event.date}
              </span>
            </div>
            {StatsIcon}
          </div>
        </div>

        {/* System section */}
        {showSystem && (
          <div className="flex flex-col gap-3 w-full px-4 border-b border-[#e9eaea]">
            {systemDetails.map((detail, i) => (
              <PredictionDetailRow
                key={i}
                label={detail.label}
                value={detail.value}
                bold={detail.bold}
                showBorder={i < systemDetails.length - 1}
              />
            ))}
            <PredictionStatusRow status={status} />
          </div>
        )}

        {/* Additional details */}
        <div className="flex flex-col gap-3 w-full px-4">
          {additionalDetails.map((detail, i) => (
            <PredictionDetailRow
              key={i}
              label={detail.label}
              value={detail.value}
              bold={detail.bold}
              showBorder={i < additionalDetails.length - 1}
              icon={detail.hasInfo ? InfoIcon : undefined}
            />
          ))}
          <PredictionStatusRow status={status} />
        </div>
      </div>

      {/* Footer */}
      {showButton && (
        <div className="flex items-center justify-center w-full px-6 py-4 border-t border-[#c9cacb] bg-white">
          <Button
            label="Vai all'evento"
            variant="default"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 h-9 rounded-full font-bold text-sm font-['Roboto',sans-serif] bg-[#00653b] text-white cursor-pointer"
            onClick={onAction}
          />
        </div>
      )}
    </div>
  );
}

export default PanelPrediction;
