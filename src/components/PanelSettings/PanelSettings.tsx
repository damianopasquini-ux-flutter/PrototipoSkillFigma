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

function FilterChip({
  label = "Label",
  selected = false,
}: {
  label?: string;
  selected?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center h-8 px-2 rounded-lg shrink-0 ${
        selected
          ? "bg-[#bed62f] border-[0.5px] border-[#bed62f]"
          : "bg-white border-[0.5px] border-transparent shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
      }`}
    >
      <span className="font-medium font-['Roboto',sans-serif] text-xs text-[#262c2f] whitespace-nowrap leading-[14px]">
        {label}
      </span>
    </div>
  );
}

function RecommendedBadge() {
  return (
    <div className="flex items-center justify-center p-1 rounded bg-[#e6fff0]">
      <span className="font-medium font-['Roboto',sans-serif] text-xs leading-[14px] text-[#1a924b] whitespace-nowrap">
        Scelta consigliata
      </span>
    </div>
  );
}

function MessageInline({
  message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma.",
  type = "warning",
}: {
  message?: string;
  type?: "warning" | "info";
}) {
  const colors =
    type === "warning"
      ? { bg: "bg-[#fff6dc]", bar: "bg-[#ffbf00]" }
      : { bg: "bg-[#e1eefe]", bar: "bg-[#0d4ea5]" };

  return (
    <div className={`flex items-center w-full rounded overflow-clip ${colors.bg}`}>
      <div className={`w-1 self-stretch ${colors.bar}`} />
      <div className="flex-1 px-2 py-1">
        <span className="font-normal font-['Roboto',sans-serif] text-xs leading-[14px] text-[#262c2f]">
          {message}
        </span>
      </div>
    </div>
  );
}

/* ── Settings Section ──────────────────────────────────── */

type SettingsSectionProps = {
  title?: string;
  subtitle?: string;
  showIcon?: boolean;
  chipLabels?: string[];
  selectedIndex?: number;
  showRecommended?: boolean;
  showBorder?: boolean;
};

function SettingsSection({
  title = "Title",
  subtitle = "Subtitle",
  showIcon = true,
  chipLabels = ["Label", "Label", "Label", "Label", "Label", "Label", "Label", "Label", "Label"],
  selectedIndex = 0,
  showBorder = true,
}: SettingsSectionProps) {
  return (
    <div
      className={`flex flex-col gap-4 w-full py-4 ${
        showBorder ? "border-b border-[#e9eaea]" : ""
      }`}
    >
      {/* Title row */}
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-start gap-1 w-full">
          {showIcon && (
            <div className="w-4 h-4 shrink-0 rounded-sm bg-[#c9cacb]" />
          )}
          <span className="flex-1 font-normal font-['Roboto',sans-serif] text-sm leading-[18px] text-[#262c2f] h-4">
            {title}
          </span>
        </div>
        <span className="font-normal font-['Roboto',sans-serif] text-xs leading-[14px] text-[#5c6063] w-full">
          {subtitle}
        </span>
      </div>

      {/* Chips */}
      <div className="flex flex-wrap gap-2 items-start w-full">
        {chipLabels.map((label, i) => (
          <FilterChip key={i} label={label} selected={i === selectedIndex} />
        ))}
      </div>
    </div>
  );
}

/* ── Main Panel ────────────────────────────────────────── */

type PanelSettingsProps = {
  className?: string;
  title?: string;
  messageUp?: boolean;
  messageDown?: boolean;
  sections?: Array<{
    title: string;
    subtitle: string;
    chipLabels: string[];
    selectedIndex?: number;
  }>;
  onClose?: () => void;
  onPrimary?: () => void;
  onSecondary?: () => void;
};

export function PanelSettings({
  className,
  title = "Title",
  messageUp = false,
  messageDown = false,
  sections = [
    {
      title: "Title",
      subtitle: "Subtitle",
      chipLabels: ["Label", "Label", "Label", "Label", "Label", "Label", "Label", "Label", "Label"],
      selectedIndex: 0,
    },
    {
      title: "Title",
      subtitle: "Subtitle",
      chipLabels: ["Label", "Label", "Label", "Label", "Label", "Label", "Label", "Label", "Label"],
      selectedIndex: 0,
    },
    {
      title: "Title",
      subtitle: "Subtitle",
      chipLabels: ["Label", "Label", "Label", "Label", "Label", "Label", "Label", "Label", "Label"],
      selectedIndex: 0,
    },
    {
      title: "Title",
      subtitle: "Subtitle",
      chipLabels: ["Label", "Label", "Label", "Label", "Label", "Label", "Label", "Label", "Label"],
      selectedIndex: 0,
    },
  ],
  onClose,
  onPrimary,
  onSecondary,
}: PanelSettingsProps) {
  return (
    <div
      className={
        className ||
        "flex flex-col items-start w-[360px] bg-white rounded-t-lg"
      }
    >
      <TopNavPanel title={title} onClose={onClose} />

      {/* Message up */}
      {messageUp && (
        <div className="w-full px-4">
          <MessageInline />
        </div>
      )}

      {/* Sections */}
      <div className="flex flex-col w-full px-4 pb-4">
        {sections.map((section, i) => (
          <SettingsSection
            key={i}
            title={section.title}
            subtitle={section.subtitle}
            chipLabels={section.chipLabels}
            selectedIndex={section.selectedIndex}
            showBorder={i < sections.length - 1}
          />
        ))}

        {/* Message down */}
        {messageDown && <MessageInline />}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center gap-2 w-full px-6 py-4 border-t border-[#c9cacb] bg-white">
        <Button
          label="Button"
          variant="ghost"
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 h-9 rounded-full font-bold text-sm font-['Roboto',sans-serif] bg-transparent text-[#262c2f] cursor-pointer"
          onClick={onSecondary}
        />
        <Button
          label="Button"
          variant="default"
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 h-9 rounded-full font-bold text-sm font-['Roboto',sans-serif] bg-[#00653b] text-white cursor-pointer"
          onClick={onPrimary}
        />
      </div>
    </div>
  );
}

export default PanelSettings;
