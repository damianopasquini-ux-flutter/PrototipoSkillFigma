import React from "react";

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

function TopNavPanel({
  title = "Title",
  onClose,
}: {
  title?: string;
  onClose?: () => void;
}) {
  return (
    <div className="flex items-center gap-2 h-14 px-4 w-full rounded-t-lg bg-white overflow-clip shrink-0">
      <div className="flex-1 min-w-0">
        <span className="font-extrabold font-['Mulish',sans-serif] text-2xl leading-7 text-[#262c2f]">
          {title}
        </span>
      </div>
      <CloseButton onClick={onClose} />
    </div>
  );
}

function QuickLinkItem({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      className="flex items-center gap-2 w-full h-9 px-2 py-1.5 rounded-lg bg-white border-[0.5px] border-[#c9cacb] shadow-[0_2px_8px_rgba(0,0,0,0.1)] cursor-pointer"
      onClick={onClick}
    >
      <div className="w-4 h-4 shrink-0 flex items-center justify-center text-[#262c2f]">
        {icon}
      </div>
      <span className="flex-1 font-normal font-['Roboto',sans-serif] text-sm leading-[18px] text-[#262c2f] text-left">
        {label}
      </span>
    </button>
  );
}

function TipsterLink({ onClick }: { onClick?: () => void }) {
  return (
    <button
      className="flex items-center gap-2 w-full h-9 px-2 py-1.5 rounded-lg bg-[#262c2f] border-[0.5px] border-[#b6ff00] shadow-[0_2px_8px_rgba(0,0,0,0.1)] cursor-pointer"
      onClick={onClick}
    >
      {/* Tipster icon placeholder */}
      <div className="w-4 h-4 shrink-0 rounded bg-[#b6ff00]/30" />
      <span className="font-normal font-['Roboto',sans-serif] text-sm leading-[18px] text-white">
        Pubblica su
      </span>
      <span className="font-bold font-['Roboto',sans-serif] text-xs leading-[14px] text-[#b6ff00]">
        Tipster
      </span>
    </button>
  );
}

/* ── Icons ─────────────────────────────────────────────── */

const LinkIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M6.5 9.5a3.5 3.5 0 004.95 0l2-2a3.5 3.5 0 00-4.95-4.95l-1 1m3 3a3.5 3.5 0 00-4.95 0l-2 2a3.5 3.5 0 004.95 4.95l1-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
  </svg>
);

const PictureIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1.5" y="2.5" width="13" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="5" cy="6" r="1.5" fill="currentColor" />
    <path d="M1.5 11l3.5-3 3 2.5 2-1.5 4.5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Main Panel ────────────────────────────────────────── */

type PanelLinkProps = {
  className?: string;
  title?: string;
  tipster?: boolean;
  onClose?: () => void;
  onShare?: () => void;
  onCreateImage?: () => void;
  onTipster?: () => void;
};

export function PanelLink({
  className,
  title = "Title",
  tipster = false,
  onClose,
  onShare,
  onCreateImage,
  onTipster,
}: PanelLinkProps) {
  return (
    <div
      className={
        className ||
        "flex flex-col items-start w-[360px] bg-white rounded-t-lg overflow-clip"
      }
    >
      <TopNavPanel title={title} onClose={onClose} />

      <div className="flex flex-col gap-2 w-full px-4 pt-4 pb-6">
        {tipster && <TipsterLink onClick={onTipster} />}

        <QuickLinkItem
          icon={LinkIcon}
          label="Condividi"
          onClick={onShare}
        />
        <QuickLinkItem
          icon={PictureIcon}
          label="Crea l'immagine del biglietto"
          onClick={onCreateImage}
        />
      </div>
    </div>
  );
}

export default PanelLink;
