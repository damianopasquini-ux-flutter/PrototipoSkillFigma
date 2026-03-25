import React from "react";

/* ── BadgeDefault ── */
type BadgeDefaultProps = {
  className?: string;
  size?: "S" | "M";
  type?: "Live" | "Promo" | "Info" | "Cashout" | "Breaking Bets" | "Default" | "Win" | "Bonus-Freebet";
};

const badgeColors: Record<string, { bg: string; text: string }> = {
  Live: { bg: "bg-[#262c2f]", text: "text-[#ff8e0d]" },
  Promo: { bg: "bg-[#ffbf00]", text: "text-[#262c2f]" },
  "Bonus-Freebet": { bg: "bg-[#ffbf00]", text: "text-[#262c2f]" },
  Info: { bg: "bg-[#67aaf9]", text: "text-[#262c2f]" },
  Cashout: { bg: "bg-[#722dad]", text: "text-white" },
  "Breaking Bets": { bg: "bg-[#ff8e0d]", text: "text-[#262c2f]" },
  Default: { bg: "bg-[#bed62f]", text: "text-[#262c2f]" },
  Win: { bg: "bg-[#1a924b]", text: "text-white" },
};

export function BadgeDefault({ className, size = "S", type = "Live" }: BadgeDefaultProps) {
  const colors = badgeColors[type] || badgeColors.Default;
  const labels: Record<string, string> = {
    Live: "Live", Promo: "Promo", Info: "Info", Cashout: "Cash Out",
    "Breaking Bets": "Breaking Bets", Default: "New", Win: "V", "Bonus-Freebet": "Freebet",
  };

  return (
    <div className={className || "inline-flex items-start"}>
      <div className={`inline-flex items-center justify-center overflow-clip ${colors.bg} ${size === "M" ? "h-[18px] px-1 py-0.5 rounded" : "h-[14px] px-1 rounded-sm"}`}>
        <span className={`font-medium font-['Roboto',sans-serif] whitespace-nowrap ${colors.text} ${size === "M" ? "text-xs leading-[14px]" : "text-[10px] leading-normal"}`}>
          {labels[type] || type}
        </span>
      </div>
    </div>
  );
}

/* ── BadgeNotification ── */
type BadgeNotificationProps = {
  className?: string;
  size?: "s" | "m" | "l";
  type?: "Select" | "Select alt" | "Notification" | "Unselect";
};

const notifColors: Record<string, string> = {
  Notification: "bg-[#ff8e0d]",
  Select: "bg-[#bed62f]",
  "Select alt": "bg-[#262c2f]",
  Unselect: "bg-[#929597]",
};

const notifTextColors: Record<string, string> = {
  Notification: "text-[#262c2f]",
  Select: "text-[#262c2f]",
  "Select alt": "text-white",
  Unselect: "text-white",
};

export function BadgeNotification({ className, size = "s", type = "Notification" }: BadgeNotificationProps) {
  const bg = notifColors[type] || notifColors.Notification;
  const text = notifTextColors[type] || notifTextColors.Notification;

  if (size === "s") {
    return (
      <div className={className || "inline-flex"}>
        <div className={`w-3 h-3 rounded-full ${bg}`} />
      </div>
    );
  }

  return (
    <div className={className || "inline-flex"}>
      <div className={`${bg} rounded-full flex items-center justify-center ${size === "l" ? "min-w-4 h-4 px-1" : "w-4 h-4"}`}>
        <span className={`font-bold font-['Roboto',sans-serif] text-[10px] leading-3 text-center ${text}`}>
          {size === "l" ? "100" : "12"}
        </span>
      </div>
    </div>
  );
}

/* ── BadgeMarketNumber ── */
type BadgeMarketNumberProps = {
  className?: string;
  selected?: boolean;
  size?: "S" | "XS";
  value?: string;
};

export function BadgeMarketNumber({ className, selected = false, size = "S", value = "+ 3490" }: BadgeMarketNumberProps) {
  return (
    <div className={className || `inline-flex items-center justify-center px-1 rounded-lg
      ${selected ? "bg-[#bed62f]" : "border border-[#5c6063] bg-white"}
      ${size === "XS" ? "h-[14px]" : "h-4 py-0.5"}`}>
      <span className={`font-medium font-['Roboto',sans-serif] text-[10px] leading-3 text-right whitespace-nowrap
        ${selected ? "text-[#262c2f]" : "text-[#5c6063]"}`}>
        {value}
      </span>
    </div>
  );
}

/* ── BadgeSpecial ── */
type BadgeSpecialProps = {
  className?: string;
  type?: "Breaking Bets" | "Increased";
};

export function BadgeSpecial({ className, type = "Breaking Bets" }: BadgeSpecialProps) {
  return (
    <div className={className || "inline-flex items-start justify-center"}>
      <div className={`flex items-center gap-1 pl-1 pr-2 rounded-r-full
        ${type === "Increased" ? "bg-[#262c2f]" : "bg-[#ff8e0d]"}`}>
        <div className="w-[18px] h-[18px]" />
        <span className={`font-medium font-['Roboto',sans-serif] text-[10px] leading-3 text-center whitespace-nowrap
          ${type === "Increased" ? "text-white" : "text-[#262c2f]"}`}>
          {type === "Increased" ? "Quota maggiorata" : "Breaking Bets"}
        </span>
      </div>
    </div>
  );
}

/* ── BadgeTipsterLevel ── */
type BadgeTipsterLevelProps = {
  className?: string;
  level?: "In riscaldamento" | "Esordiente" | "Promessa" | "Professionista" | "Fuoriclasse" | "Leggenda";
  size?: "S" | "M" | "L";
};

const tipsterColors: Record<string, string> = {
  "In riscaldamento": "bg-[#8a939e]",
  Esordiente: "bg-[#009d9a]",
  Promessa: "bg-[#016399]",
  Professionista: "bg-[#16155e]",
  Fuoriclasse: "bg-[#722dad]",
  Leggenda: "bg-[#b8161c]",
};

export function BadgeTipsterLevel({ className, level = "In riscaldamento", size = "L" }: BadgeTipsterLevelProps) {
  const bg = tipsterColors[level] || tipsterColors["In riscaldamento"];
  const sizeStyles = {
    S: "h-4 px-1.5 text-xs",
    M: "h-6 px-2 text-xs shadow-[0px_2px_8px_rgba(0,0,0,0.1)]",
    L: "h-7 px-2.5 text-base shadow-[0px_2px_8px_rgba(0,0,0,0.1)]",
  };

  return (
    <div className={className || "inline-flex"}>
      <div className={`flex items-center justify-center gap-0.5 rounded-full ${bg} ${sizeStyles[size]}`}>
        <span className="font-medium font-['Roboto',sans-serif] text-white whitespace-nowrap leading-[14px]">
          {level}
        </span>
      </div>
    </div>
  );
}

/* ── BadgeFantacalcio ── */
type BadgeFantacalcioProps = {
  className?: string;
  type?: "Ballottaggi" | "Squalificati" | "Indisponibili" | "In dubbio" | "Diffidati";
};

const fantaColors: Record<string, { bg: string; text: string }> = {
  Ballottaggi: { bg: "bg-[#67aaf9]", text: "text-[#262c2f]" },
  Squalificati: { bg: "bg-[#e73947]", text: "text-white" },
  Indisponibili: { bg: "bg-[#ff8e0d]", text: "text-[#262c2f]" },
  "In dubbio": { bg: "bg-[#40cd8c]", text: "text-[#262c2f]" },
  Diffidati: { bg: "bg-[#ffbf00]", text: "text-[#262c2f]" },
};

export function BadgeFantacalcio({ className, type = "Ballottaggi" }: BadgeFantacalcioProps) {
  const colors = fantaColors[type] || fantaColors.Ballottaggi;

  return (
    <div className={className || `inline-flex items-center justify-center h-6 px-2 rounded-full shadow-[0px_2px_8px_rgba(0,0,0,0.1)] ${colors.bg}`}>
      <span className={`font-medium font-['Roboto',sans-serif] text-xs leading-[14px] whitespace-nowrap ${colors.text}`}>
        {type}
      </span>
    </div>
  );
}

export default BadgeDefault;
