import React from "react";

/* ── Breaking Bets balloon ── */
type BalloonBreakingBetsProps = {
  className?: string;
  minutaggio?: string;
  commento?: string;
};

export function BalloonBreakingBets({
  className,
  minutaggio = "36'",
  commento = "Siamo al trentaseiesimo del primo tempo, tre angoli a favore del Borussia Dortmund, risultato zero a zero. Chi segnera' per primo?",
}: BalloonBreakingBetsProps) {
  return (
    <div
      className={
        className ||
        "flex flex-col gap-1 items-start justify-center min-w-[280px] w-[280px] p-3 bg-white rounded-bl-2xl rounded-br-2xl rounded-tr-2xl shadow-[0px_5px_12px_0px_rgba(0,0,0,0.1)]"
      }
    >
      <p className="font-bold font-['Roboto',sans-serif] text-sm leading-[18px] text-[#262c2f] w-full">
        {minutaggio}
      </p>
      <p className="font-normal font-['Roboto',sans-serif] text-sm leading-[18px] text-[#262c2f] w-full">
        {commento}
      </p>
    </div>
  );
}

/* ── SAI (AI assistant) balloon ── */
type BalloonSAIProps = {
  className?: string;
  text?: string;
  type?: "AI" | "User" | "Thinking";
};

export function BalloonSAI({
  className,
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  type = "AI",
}: BalloonSAIProps) {
  const isUser = type === "User";

  return (
    <div
      className={
        className ||
        `flex flex-col items-start justify-center max-w-[295px] min-w-[35px] p-3 ${
          isUser
            ? "bg-[#bed62f] rounded-bl-2xl rounded-br-2xl rounded-tl-2xl self-end"
            : "bg-white rounded-bl-2xl rounded-br-2xl rounded-tr-2xl"
        }`
      }
    >
      {type === "Thinking" ? (
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#929597] animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-2 h-2 rounded-full bg-[#929597] animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-2 h-2 rounded-full bg-[#929597] animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      ) : (
        <p
          className={`font-normal font-['Roboto',sans-serif] text-sm leading-[18px] w-full ${
            isUser ? "text-[#262c2f]" : "text-[#262c2f]"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

/* ── Combined Balloon ── */
type BalloonProps = {
  className?: string;
  variant?: "breaking-bets" | "sai";
  minutaggio?: string;
  commento?: string;
  text?: string;
  saiType?: "AI" | "User" | "Thinking";
};

export function Balloon({
  className,
  variant = "breaking-bets",
  minutaggio,
  commento,
  text,
  saiType = "AI",
}: BalloonProps) {
  if (variant === "sai") {
    return <BalloonSAI className={className} text={text} type={saiType} />;
  }
  return (
    <BalloonBreakingBets
      className={className}
      minutaggio={minutaggio}
      commento={commento}
    />
  );
}

export default Balloon;
