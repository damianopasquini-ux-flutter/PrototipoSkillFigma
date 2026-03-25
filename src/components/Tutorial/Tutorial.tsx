import React, { useState } from "react";

/* ── Types ── */
interface TutorialStep {
  title: string;
  description: string;
  imageSrc?: string;
}

interface TutorialProps {
  className?: string;
  steps?: TutorialStep[];
  currentStep?: number;
  onBack?: () => void;
  onNext?: () => void;
  onFinish?: () => void;
  onClose?: () => void;
  backLabel?: string;
  nextLabel?: string;
  finishLabel?: string;
}

/* ── CloseIcon ── */
function CloseIcon({ onClick }: { onClick?: () => void }) {
  return (
    <button
      className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center cursor-pointer z-20 bg-[var(--appereance-tab-bar-fill-default,#2c363c)] rounded-full"
      onClick={onClick}
      aria-label="Chiudi"
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 4L4 14M4 4L14 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

/* ── StepIndicator ── */
function StepIndicator({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex gap-1.5 items-center justify-center py-3">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-2 rounded-full transition-all ${
            i === current
              ? "w-6 bg-[var(--button-primary-fill-default,#00653b)]"
              : i < current
              ? "w-2 bg-[var(--button-primary-fill-default,#00653b)]"
              : "w-2 bg-[var(--appereance-font-color-alt-2,#929597)]"
          }`}
        />
      ))}
    </div>
  );
}

/* ── TutorialFooter ── */
function TutorialFooter({
  isFirst,
  isLast,
  onBack,
  onNext,
  onFinish,
  backLabel = "Indietro",
  nextLabel = "Avanti",
  finishLabel = "Fine",
}: {
  isFirst: boolean;
  isLast: boolean;
  onBack?: () => void;
  onNext?: () => void;
  onFinish?: () => void;
  backLabel?: string;
  nextLabel?: string;
  finishLabel?: string;
}) {
  return (
    <div className="flex items-center justify-between w-full px-4 py-3">
      <button
        className={`font-bold font-['Mulish',sans-serif] text-sm text-white cursor-pointer ${
          isFirst ? "opacity-50 pointer-events-none" : ""
        }`}
        onClick={onBack}
        disabled={isFirst}
      >
        {backLabel}
      </button>
      <button
        className={`font-bold font-['Mulish',sans-serif] text-sm cursor-pointer ${
          isLast
            ? "text-[var(--button-primary-fill-default,#00653b)]"
            : "text-white"
        }`}
        onClick={isLast ? onFinish : onNext}
      >
        {isLast ? finishLabel : nextLabel}
      </button>
    </div>
  );
}

/* ── Tutorial ── */
export function Tutorial({
  className,
  steps = [
    {
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      title: "Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
  currentStep: controlledStep,
  onBack,
  onNext,
  onFinish,
  onClose,
  backLabel = "Indietro",
  nextLabel = "Avanti",
  finishLabel = "Fine",
}: TutorialProps) {
  const [internalStep, setInternalStep] = useState(0);
  const step = controlledStep ?? internalStep;
  const totalSteps = steps.length;
  const isFirst = step === 0;
  const isLast = step === totalSteps - 1;
  const currentData = steps[step];

  const handleBack = () => {
    if (onBack) return onBack();
    if (step > 0) setInternalStep(step - 1);
  };

  const handleNext = () => {
    if (onNext) return onNext();
    if (step < totalSteps - 1) setInternalStep(step + 1);
  };

  const handleFinish = () => {
    if (onFinish) return onFinish();
  };

  return (
    <div
      className={
        className ||
        "bg-[var(--appereance-tab-bar-fill-selected,#262c2f)] flex flex-col items-center w-[360px] min-h-[580px] relative overflow-hidden rounded-2xl font-['Roboto',sans-serif]"
      }
    >
      {/* Decorative arcs */}
      <div className="absolute top-[-20px] left-[-40px] w-[140px] h-[140px] border-[6px] border-[#b6ff00] rounded-full opacity-40" />
      <div className="absolute bottom-[80px] right-[-60px] w-[180px] h-[180px] border-[6px] border-[#b6ff00] rounded-full opacity-30" />

      {/* Close button */}
      <CloseIcon onClick={onClose} />

      {/* "NEW" ribbon */}
      <div className="absolute top-[60px] right-[-10px] bg-[#ff6b35] text-white font-bold text-xs px-6 py-1 rotate-[30deg] z-10 font-['Mulish',sans-serif]">
        NEW
      </div>

      {/* Content area */}
      <div className="flex flex-col items-center gap-4 flex-1 pt-16 px-6 pb-2 w-full relative z-10">
        {/* Image placeholder */}
        <div className="w-[200px] h-[200px] rounded-xl bg-[var(--appereance-tab-bar-fill-default,#2c363c)] flex items-center justify-center overflow-hidden">
          {currentData.imageSrc ? (
            <img
              src={currentData.imageSrc}
              alt={currentData.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[var(--button-primary-fill-default,#00653b)] opacity-60 rounded-xl" />
          )}
        </div>

        {/* Title */}
        <h2 className="font-bold font-['Mulish',sans-serif] text-xl leading-6 text-white text-center">
          {currentData.title}
        </h2>

        {/* Description */}
        <p className="font-normal font-['Roboto',sans-serif] text-sm leading-[18px] text-[var(--appereance-font-color-alt-2,#929597)] text-center px-2">
          {currentData.description}
        </p>
      </div>

      {/* Step indicators */}
      <StepIndicator total={totalSteps} current={step} />

      {/* Footer navigation */}
      <TutorialFooter
        isFirst={isFirst}
        isLast={isLast}
        onBack={handleBack}
        onNext={handleNext}
        onFinish={handleFinish}
        backLabel={backLabel}
        nextLabel={nextLabel}
        finishLabel={finishLabel}
      />
    </div>
  );
}

export default Tutorial;
