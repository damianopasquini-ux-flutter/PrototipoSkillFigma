import React from "react";

/* ── Types ── */
interface BetDetailRow {
  icon?: string;
  label: string;
  value: string;
  highlighted?: boolean;
}

interface ThankYouPageProps {
  className?: string;
  variant?: "default" | "cashout";
  headerColor?: "yellow" | "red" | "green";
  title?: string;
  subtitle?: string;
  amount?: string;
  betCode?: string;
  details?: BetDetailRow[];
  primaryAction?: string;
  secondaryActions?: string[];
  onPrimaryAction?: () => void;
  onClose?: () => void;
  onShare?: () => void;
}

/* ── CloseIcon ── */
function CloseIcon({ onClick }: { onClick?: () => void }) {
  return (
    <button
      className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center cursor-pointer z-10"
      onClick={onClick}
      aria-label="Chiudi"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18M6 6L18 18" stroke="#262c2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

/* ── BetDetailsList ── */
function BetDetailsList({ details, betCode }: { details: BetDetailRow[]; betCode?: string }) {
  return (
    <div className="flex flex-col w-full border-t border-b border-[var(--border-default-grey,#e9eaea)]">
      {/* Bet code */}
      {betCode && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--border-default-grey,#e9eaea)]">
          <span className="font-normal font-['Roboto',sans-serif] text-xs leading-[14px] text-[var(--font-color-grey,#5c6063)]">
            Codice biglietto:
          </span>
          <span className="font-normal font-['Roboto',sans-serif] text-xs leading-[14px] text-[var(--font-color-black,#262c2f)]">
            {betCode}
          </span>
        </div>
      )}
      {details.map((row, i) => (
        <div
          key={i}
          className="flex items-center justify-between px-4 py-2 border-b border-[var(--border-default-grey,#e9eaea)] last:border-b-0"
        >
          <div className="flex gap-1.5 items-center">
            {row.icon && <span className="text-sm">{row.icon}</span>}
            <span className="font-normal font-['Roboto',sans-serif] text-xs leading-[14px] text-[var(--font-color-grey,#5c6063)]">
              {row.label}
            </span>
          </div>
          <span
            className={`font-['Roboto',sans-serif] text-sm leading-[18px] ${
              row.highlighted
                ? "font-bold text-[var(--font-color-black,#262c2f)]"
                : "font-normal text-[var(--font-color-black,#262c2f)]"
            }`}
          >
            {row.value}
          </span>
        </div>
      ))}
      {/* Dettaglio biglietto */}
      <button className="flex items-center justify-between px-4 py-2 w-full cursor-pointer hover:bg-gray-50">
        <span className="font-medium font-['Roboto',sans-serif] text-xs leading-[14px] text-[var(--font-color-black,#262c2f)] underline">
          Dettaglio biglietto
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4L10 8L6 12" stroke="#262c2f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

/* ── ThankYouPage ── */
export function ThankYouPage({
  className,
  variant = "default",
  headerColor = "green",
  title = "Complimenti!",
  subtitle = "La scommessa e' andata a buon fine",
  amount,
  betCode = "DFE73484638346783",
  details = [
    { icon: "\uD83D\uDCB0", label: "Puntata:", value: "9999,99\u20AC", highlighted: true },
    { icon: "\uD83C\uDFB2", label: "Quota:", value: "9999.99" },
    { icon: "\u2728", label: "Bonus:", value: "9999.99" },
    { icon: "\uD83D\uDCB6", label: "Vincita potenziale:", value: "9999,99\u20AC", highlighted: true },
  ],
  primaryAction = "Continua a scommettere",
  secondaryActions = ["Riporta eventi nel biglietto", "Notifiche eventi"],
  onPrimaryAction,
  onClose,
  onShare,
}: ThankYouPageProps) {
  const headerColorMap = {
    yellow: "bg-[#ffbf00]",
    red: "bg-[#e73947]",
    green: "bg-[var(--button-primary-fill-default,#00653b)]",
  };

  return (
    <div
      className={
        className ||
        "bg-white flex flex-col items-center w-[360px] min-h-[600px] relative overflow-hidden rounded-2xl font-['Roboto',sans-serif]"
      }
    >
      {/* Status bar */}
      <div className="flex items-center justify-between w-full px-6 py-2 text-xs text-[var(--font-color-black,#262c2f)]">
        <span className="font-semibold">12:45</span>
        <div className="flex gap-1 items-center">
          <span>\u2022</span>
          <span>\u2022</span>
          <span>\u2022</span>
        </div>
      </div>

      {/* Colored header */}
      <div className={`w-full h-[120px] ${headerColorMap[headerColor]} relative`}>
        <CloseIcon onClick={onClose} />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-4 px-4 py-6 w-full -mt-4">
        {/* Avatar placeholder */}
        <div className="w-16 h-16 rounded-full bg-gray-100 border-4 border-white -mt-12 shadow-sm" />

        {/* Title */}
        <div className="flex flex-col items-center gap-1 text-center">
          <h2 className="font-bold font-['Mulish',sans-serif] text-lg leading-6 text-[var(--font-color-black,#262c2f)]">
            {title}
          </h2>
          {subtitle && (
            <p className="font-normal font-['Roboto',sans-serif] text-sm leading-[18px] text-[var(--button-primary-fill-default,#00653b)]">
              {subtitle}
            </p>
          )}
        </div>

        {/* Share button */}
        {onShare && (
          <button
            onClick={onShare}
            className="flex items-center gap-2 px-6 py-2 border border-[var(--border-default-grey,#e9eaea)] rounded-full cursor-pointer hover:bg-gray-50"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 8V13H12V8" stroke="#262c2f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 2V10M8 2L5 5M8 2L11 5" stroke="#262c2f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-medium font-['Roboto',sans-serif] text-sm text-[var(--font-color-black,#262c2f)]">
              Condividi
            </span>
          </button>
        )}

        {/* Amount (cashout variant) */}
        {variant === "cashout" && amount && (
          <div className="flex flex-col items-center gap-1">
            <span className="font-normal font-['Roboto',sans-serif] text-sm text-[var(--font-color-grey,#5c6063)]">
              Scommessa incassata con il Cash Out
            </span>
            <span className="font-normal font-['Roboto',sans-serif] text-sm text-[var(--font-color-grey,#5c6063)]">
              La tua vincita
            </span>
            <span className="font-bold font-['Mulish',sans-serif] text-2xl text-[var(--button-primary-fill-default,#00653b)]">
              {amount}
            </span>
          </div>
        )}

        {/* Bet details */}
        <BetDetailsList details={details} betCode={betCode} />

        {/* Secondary actions */}
        {secondaryActions.map((action, i) => (
          <button
            key={i}
            className="flex items-center justify-center gap-2 w-full py-3 border border-[var(--border-default-grey,#e9eaea)] rounded-full font-medium font-['Roboto',sans-serif] text-sm text-[var(--font-color-black,#262c2f)] cursor-pointer hover:bg-gray-50"
          >
            {action}
          </button>
        ))}

        {/* Primary CTA */}
        <button
          onClick={onPrimaryAction}
          className="flex items-center justify-center w-full py-3 bg-[var(--button-primary-fill-default,#00653b)] rounded-full font-medium font-['Roboto',sans-serif] text-sm text-white cursor-pointer hover:opacity-90"
        >
          {primaryAction}
        </button>
      </div>
    </div>
  );
}

export default ThankYouPage;
