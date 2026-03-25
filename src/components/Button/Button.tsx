import React from "react";

type ButtonProps = {
  className?: string;
  label?: string;
  variant?: "default" | "checkout" | "delete" | "secondary" | "ghost" | "alt" | "floating" | "cashout" | "cashout-cashed" | "cashout-acceptance" | "settings";
  disabled?: boolean;
  onClick?: () => void;
};

const variantStyles: Record<string, { bg: string; text: string; border?: string }> = {
  default: { bg: "bg-[#bed62f]", text: "text-[#262c2f]" },
  checkout: { bg: "bg-[#ff8e0d]", text: "text-white" },
  delete: { bg: "bg-[#e73947]", text: "text-white" },
  alt: { bg: "bg-[#bed62f]", text: "text-[#262c2f]" },
  secondary: { bg: "bg-transparent", text: "text-[#262c2f]", border: "border border-[#262c2f]" },
  ghost: { bg: "bg-transparent", text: "text-[#262c2f]" },
  floating: { bg: "bg-[#2f3c43]", text: "text-white" },
  cashout: { bg: "bg-transparent", text: "text-[#262c2f]", border: "border border-[#1a924b]" },
  "cashout-cashed": { bg: "bg-[#1a924b]", text: "text-white" },
  "cashout-acceptance": { bg: "bg-transparent", text: "text-[#ff8e0d]", border: "border border-[#ff8e0d]" },
  settings: { bg: "bg-transparent", text: "text-[#262c2f]", border: "border border-[#c9cacb]" },
};

export function Button({
  className,
  label = "Button",
  variant = "default",
  disabled = false,
  onClick,
}: ButtonProps) {
  const style = variantStyles[variant] || variantStyles.default;

  return (
    <button
      className={
        className ||
        `inline-flex items-center justify-center gap-2 px-6 h-9 rounded-lg font-medium text-sm font-['Roboto',sans-serif]
        ${style.bg} ${style.text} ${style.border || ""}
        ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
        transition-opacity`
      }
      disabled={disabled}
      onClick={onClick}
    >
      {variant === "floating" && (
        <span className="w-4 h-4 rounded-full border-2 border-white" />
      )}
      {label}
    </button>
  );
}

export function ButtonCombo({
  className,
  alignment = "horizontal",
  showQuotaTot = false,
}: {
  className?: string;
  alignment?: "horizontal" | "vertical";
  showQuotaTot?: boolean;
}) {
  return (
    <div
      className={
        className ||
        `flex ${alignment === "vertical" ? "flex-col" : ""} gap-2 items-center justify-center px-6 py-4 border-t border-[#c9cacb] bg-white w-[360px]`
      }
    >
      {!showQuotaTot && alignment === "horizontal" && (
        <Button label="Button" variant="ghost" />
      )}
      {!showQuotaTot && <Button label="Button" variant="default" />}
      {!showQuotaTot && alignment === "vertical" && (
        <Button label="Button" variant="secondary" />
      )}
      {showQuotaTot && (
        <>
          <div className="flex flex-col items-center justify-center flex-1 h-9 text-center text-xs font-['Roboto',sans-serif] text-[#262c2f]">
            <span className="font-normal leading-[14px]">Quota tot:</span>
            <span className="font-bold">-</span>
          </div>
          <Button label="Button" variant="default" />
        </>
      )}
    </div>
  );
}

export default Button;
