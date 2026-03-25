import React from "react";
import { Button } from "../Button/Button";

/* ── Shared sub-components ─────────────────────────────── */

function CartTab({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center flex-1 min-w-[67px] h-12 pt-4 px-4 bg-[#262c2f] ${
        active ? "gap-1" : ""
      }`}
    >
      <span
        className={`font-medium font-['Roboto',sans-serif] text-sm text-center whitespace-nowrap ${
          active ? "text-[#bed62f]" : "text-[#c9cacb]"
        }`}
      >
        {label}
      </span>
      {active && (
        <div className="w-8 h-1 rounded-lg bg-[#bed62f]" />
      )}
    </div>
  );
}

function FreebetCard({
  value = "555",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  expiry = "Scade il 07/11/2024",
}: {
  value?: string;
  description?: string;
  expiry?: string;
}) {
  return (
    <div className="relative flex items-center gap-2.5 w-[243px] overflow-clip pl-3 pr-2 py-2 bg-[#262c2f] border-2 border-[#5c6063] rounded-lg shadow-sm">
      {/* Radio placeholder */}
      <div className="shrink-0 w-6 h-6 rounded-full border-2 border-[#c9cacb]" />
      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
        <span className="font-bold font-['Mulish',sans-serif] text-lg leading-5 text-[#bed62f]">
          {value}&euro;{" "}
        </span>
        <p className="font-medium font-['Roboto',sans-serif] text-sm leading-[18px] text-white truncate">
          {description}
        </p>
        <span className="font-normal font-['Roboto',sans-serif] text-xs leading-[14px] text-[#c9cacb]">
          {expiry}
        </span>
      </div>
    </div>
  );
}

function KeyboardKey({
  label,
  wide = false,
  accent = false,
  dark = false,
}: {
  label: string;
  wide?: boolean;
  accent?: boolean;
  dark?: boolean;
}) {
  const bg = accent
    ? "bg-[#bed62f] text-[#262c2f]"
    : dark
    ? "bg-[#2f3c43] text-white"
    : "bg-white text-[#262c2f]";
  return (
    <div
      className={`flex items-center justify-center h-9 rounded-lg shadow-sm font-bold font-['Roboto',sans-serif] text-sm ${bg} ${
        wide ? "w-[86px]" : "w-11"
      }`}
    >
      {label}
    </div>
  );
}

/* ── Main Panel ────────────────────────────────────────── */

type PanelCartProps = {
  className?: string;
  type?: "Multipla" | "Sistema" | "Fastbet";
  freebetToggle?: boolean;
  freebetCards?: boolean;
  keyboard?: boolean;
  info?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
};

export function PanelCart({
  className,
  type = "Multipla",
  freebetToggle = true,
  freebetCards = true,
  keyboard = false,
  info = false,
  onClose,
  onSubmit,
}: PanelCartProps) {
  return (
    <div
      className={
        className ||
        "flex flex-col items-center w-[360px] rounded-t-lg overflow-clip"
      }
    >
      {/* Tab bar */}
      <div className="flex items-start w-full rounded-t-lg overflow-clip relative">
        <CartTab label="Multipla" active={type === "Multipla"} />
        <CartTab label="Sistema" active={type === "Sistema"} />
        {/* Top pill */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full" />
      </div>

      {/* Freebet toggle */}
      {freebetToggle && (
        <div className="flex items-center justify-between w-full px-4 py-3 bg-[#2f3c43]">
          <div className="flex items-center gap-2">
            <span className="font-bold font-['Roboto',sans-serif] text-sm text-white">
              Usa Freebet
            </span>
            {/* Info icon placeholder */}
            <div className="w-6 h-6 rounded-full bg-[#5c6063]/40" />
          </div>
          {/* Toggle off */}
          <div className="w-11 h-6 rounded-full bg-[#dedede] relative">
            <div className="absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white shadow" />
          </div>
        </div>
      )}

      {/* Freebet cards row */}
      {freebetCards && (
        <div className="flex items-center gap-2 w-full px-4 py-3 bg-[#2f3c43] overflow-x-auto">
          <FreebetCard />
          <FreebetCard />
        </div>
      )}

      {/* Stake input row */}
      <div className="flex items-center gap-2 w-full h-[68px] px-4 bg-[#2f3c43]">
        <div className="flex-1 flex flex-col gap-1">
          <span className="font-medium font-['Roboto',sans-serif] text-sm text-white leading-[18px]">
            Puntata totale
          </span>
        </div>
        <div className="flex items-center gap-1">
          {/* Minus */}
          <div className="w-9 h-9 rounded-lg border border-white flex items-center justify-center">
            <span className="text-white text-lg leading-none">-</span>
          </div>
          {/* Amount */}
          <div className="w-20 h-9 rounded-lg bg-white flex items-center justify-center">
            <span className="font-bold font-['Roboto',sans-serif] text-xs text-[#262c2f]">
              3,00 &euro;
            </span>
          </div>
          {/* Plus */}
          <div className="w-9 h-9 rounded-lg border border-white flex items-center justify-center">
            <span className="text-white text-lg leading-none">+</span>
          </div>
        </div>
      </div>

      {/* Keyboard */}
      {keyboard && (
        <div className="flex flex-col gap-2 w-full p-2 bg-[#eff0f0]">
          {/* Quick amounts */}
          <div className="flex gap-2 w-full">
            {["+5 \u20AC", "+10 \u20AC", "+20 \u20AC", "+50 \u20AC"].map((v) => (
              <KeyboardKey key={v} label={v} dark />
            ))}
            <div className="w-[86px]">
              <div className="flex flex-col items-center justify-center h-9 rounded-lg bg-[#2f3c43] shadow-sm">
                <span className="font-normal font-['Roboto',sans-serif] text-[10px] text-white leading-3">
                  Last bet
                </span>
                <span className="font-bold font-['Roboto',sans-serif] text-xs text-white">
                  35,00&euro;
                </span>
              </div>
            </div>
          </div>
          {/* Numpad */}
          <div className="flex gap-2 items-end w-full">
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex justify-between">
                {["0", "1", "2", "3", "4", "5"].map((n) => (
                  <KeyboardKey key={n} label={n} />
                ))}
              </div>
              <div className="flex justify-between">
                {["6", "7", "8", "9", ","].map((n) => (
                  <KeyboardKey key={n} label={n} />
                ))}
                <KeyboardKey label="<" />
              </div>
            </div>
            <KeyboardKey label="OK" accent />
          </div>
        </div>
      )}

      {/* Details row */}
      <div className="flex flex-col gap-2 items-start justify-center pt-2 px-4 bg-[#262c2f] w-full">
        <div className="flex gap-2 items-center">
          {/* Quota */}
          <div className="flex flex-col items-center gap-[5px] w-[104px] px-2 py-1 rounded">
            <span className="font-normal font-['Roboto',sans-serif] text-xs text-white leading-[14px]">
              Quota
            </span>
            <span className="font-bold font-['Roboto',sans-serif] text-xs text-white">
              999.99
            </span>
          </div>
          {/* Bonus */}
          <div className="flex flex-col items-center gap-[5px] w-[104px] px-2 py-1 rounded">
            <span className="font-normal font-['Roboto',sans-serif] text-xs text-white leading-[14px]">
              Bonus
            </span>
            <span className="font-bold font-['Roboto',sans-serif] text-xs text-white">
              10,00 &euro;
            </span>
          </div>
          {/* Vincita */}
          <div className="flex flex-col items-center gap-[5px] w-[104px] px-2 py-1 rounded">
            <span className="font-normal font-['Roboto',sans-serif] text-xs text-white leading-[14px]">
              Vincita potenziale
            </span>
            <span className="font-bold font-['Roboto',sans-serif] text-xs text-[#ff8e0d]">
              999,99 &euro;
            </span>
          </div>
        </div>

        {info && (
          <div className="flex items-center w-full rounded overflow-clip bg-[#e1eefe]">
            <div className="w-1 self-stretch bg-[#0d4ea5]" />
            <div className="flex-1 px-2 py-1">
              <span className="font-normal font-['Roboto',sans-serif] text-xs text-[#262c2f] leading-[14px]">
                Lorem ipsum dolor sit amet, consectetur
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Submit button */}
      <div className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#262c2f]">
        <Button
          label="Scommetti"
          variant="checkout"
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 h-9 rounded-full font-bold text-sm font-['Roboto',sans-serif] bg-[#ff8e0d] text-white cursor-pointer"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
}

export default PanelCart;
