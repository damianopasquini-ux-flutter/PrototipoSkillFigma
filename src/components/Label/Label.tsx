import React from "react";

type LabelProps = {
  className?: string;
  status?: "Win" | "Loser" | "Pending" | "Refund";
  text?: string;
};

const statusStyles: Record<string, { bg: string; defaultText: string }> = {
  Win: { bg: "bg-[#0b7d3e]", defaultText: "Hai vinto 9.999,99\u20AC" },
  Loser: { bg: "bg-[#e73947]", defaultText: "Non hai vinto" },
  Pending: { bg: "bg-[#929597]", defaultText: "In corso" },
  Refund: { bg: "bg-[#0d4ea5]", defaultText: "Rimborsato" },
};

export function Label({ className, status = "Win", text }: LabelProps) {
  const style = statusStyles[status] || statusStyles.Win;
  const label = text ?? style.defaultText;

  return (
    <div
      className={
        className ||
        `flex items-center justify-between w-full px-2 py-1.5 rounded ${style.bg}`
      }
    >
      <span className="font-medium font-['Roboto',sans-serif] text-xs leading-[14px] text-white text-right whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

export default Label;
