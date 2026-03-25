import React from "react";

/* ------------------------------------------------------------------ */
/*  Card / Quizbet                                                     */
/*  Figma node 6360:60623 – file 1KwGa2GwNraywm2ukpfGHe               */
/* ------------------------------------------------------------------ */

type OddsButton = {
  label: string;
  value: string;
};

export type CardQuizbetProps = {
  className?: string;
  type?: "quiz" | "checkout" | "empty" | "success" | "error" | "login" | "pending" | "warning";
  sport?: string;
  teamLeft?: string;
  teamRight?: string;
  scoreDate?: string;
  statusText?: string;
  currentQuestion?: number;
  totalQuestions?: number;
  questionText?: string;
  oddsOptions?: OddsButton[];
  betAmount?: string;
  potentialWin?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
};

const typeConfigs: Record<
  string,
  { headerBg: string; headerText: string; icon?: string; showField?: boolean }
> = {
  quiz: { headerBg: "bg-[#2f3c43]", headerText: "", showField: true },
  checkout: { headerBg: "bg-[#2f3c43]", headerText: "La tua scommessa" },
  empty: { headerBg: "bg-[#2f3c43]", headerText: "La tua scommessa" },
  success: { headerBg: "bg-[#0b7d3e]", headerText: "Scommessa andata a buon fine", icon: "check" },
  error: { headerBg: "bg-[#e73947]", headerText: "Scommessa non andata a buon fine", icon: "cross" },
  login: { headerBg: "bg-[#ffbf00]", headerText: "Sessione scaduta!", icon: "lock" },
  pending: { headerBg: "bg-[#ffbf00]", headerText: "Scommessa in fase di valutazione", icon: "info" },
  warning: { headerBg: "bg-[#ffbf00]", headerText: "La quota \u00E8 cambiata!", icon: "warning" },
};

export function CardQuizbet({
  className,
  type = "quiz",
  sport = "ITA Serie A",
  teamLeft = "Lazio",
  teamRight = "Fiorentina",
  scoreDate = "01/01\n18:00",
  currentQuestion = 1,
  totalQuestions = 7,
  questionText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
  oddsOptions = [
    { label: "1", value: "1.55" },
    { label: "1", value: "1.55" },
  ],
  betAmount = "55\u20AC",
  potentialWin = "999.999,00\u20AC",
  primaryLabel = "Button",
  secondaryLabel = "Button",
  onPrimaryClick,
  onSecondaryClick,
}: CardQuizbetProps) {
  const config = typeConfigs[type] || typeConfigs.quiz;
  const isQuiz = type === "quiz";
  const isCheckout = type === "checkout";
  const isStatus = ["success", "error", "login", "pending", "warning"].includes(type);
  const showTwoButtons = type === "checkout" || type === "warning";

  return (
    <div
      className={
        className ||
        "bg-[var(--appereance-surface-frame-default,white)] flex flex-col items-start overflow-hidden rounded-lg shadow-[0px_2px_8px_1px_rgba(0,0,0,0.1)] w-[242px]"
      }
    >
      {/* Header */}
      <div className={`${config.headerBg} flex flex-col items-center w-full overflow-hidden relative`}>
        {isQuiz && (
          <>
            {/* Match header for quiz */}
            <div className="flex items-center justify-between px-2 pt-2 w-full">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="white" strokeWidth="1" />
              </svg>
              <span className="font-normal text-[10px] text-white font-['Roboto',sans-serif]">
                {sport}
              </span>
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="white" strokeWidth="1" />
              </svg>
            </div>
            <div className="flex items-center justify-center gap-4 px-4 py-2 w-full">
              <div className="flex flex-col items-center flex-1">
                <div className="w-8 h-8 rounded-full bg-white/20 mb-1" />
                <span className="text-[10px] text-white text-center font-['Roboto',sans-serif]">
                  {teamLeft}
                </span>
              </div>
              <span className="text-xs text-white/60 text-center whitespace-pre-line font-['Roboto',sans-serif]">
                {scoreDate}
              </span>
              <div className="flex flex-col items-center flex-1">
                <div className="w-8 h-8 rounded-full bg-white/20 mb-1" />
                <span className="text-[10px] text-white text-center font-['Roboto',sans-serif]">
                  {teamRight}
                </span>
              </div>
            </div>
            {/* Progress */}
            <div className="flex items-center justify-center pb-2">
              <span className="bg-[#bed62f] text-[#262c2f] text-[10px] font-bold px-2 py-[1px] rounded-full font-['Roboto',sans-serif]">
                {currentQuestion} di {totalQuestions}
              </span>
            </div>
          </>
        )}

        {!isQuiz && (
          <div className="flex flex-col items-center justify-center px-4 py-4 w-full gap-1">
            {config.icon && (
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-1">
                {config.icon === "check" && (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                )}
                {config.icon === "cross" && (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 5l10 10M15 5L5 15" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
                )}
                {(config.icon === "lock" || config.icon === "info" || config.icon === "warning") && (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2"/><text x="10" y="14" textAnchor="middle" fill="white" fontSize="12">!</text></svg>
                )}
              </div>
            )}
            <span className="font-bold text-sm leading-5 text-white text-center font-['Mulish',sans-serif]">
              {config.headerText}
            </span>
            {isCheckout && (
              <span className="font-normal text-xs text-white/70 text-center font-['Roboto',sans-serif]">
                Hai risposto a {currentQuestion} domande su {totalQuestions}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col items-center gap-3 p-3 w-full">
        {isQuiz && (
          <>
            <p className="font-normal text-sm leading-[18px] text-[var(--appereance-font-color-active,#262c2f)] text-center w-full font-['Roboto',sans-serif]">
              {questionText}
            </p>
            <div className="flex gap-2 items-center w-full">
              {oddsOptions.map((opt, i) => (
                <button
                  key={i}
                  className="flex-1 flex flex-col items-center justify-center h-9 bg-[var(--appereance-odds-selection-fill-active,#e9eaea)] rounded-lg cursor-pointer"
                >
                  <span className="font-normal text-xs leading-[14px] text-[var(--appereance-odds-selection-text-active,#262c2f)] font-['Roboto',sans-serif]">
                    {opt.label}
                  </span>
                  <span className="font-bold text-xs text-[var(--appereance-odds-selection-text-active,#262c2f)] font-['Roboto',sans-serif]">
                    {opt.value}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}

        {isCheckout && (
          <>
            <div className="flex flex-col gap-1 items-start w-full">
              <span className="font-normal text-xs text-[var(--appereance-font-color-alt,#5c6063)] font-['Roboto',sans-serif]">
                La tua puntata
              </span>
              <span className="font-bold text-lg text-[var(--appereance-font-color-active,#262c2f)] font-['Mulish',sans-serif]">
                {betAmount}
              </span>
            </div>
            {/* Slider placeholder */}
            <div className="w-full h-2 bg-[#e9eaea] rounded-full relative">
              <div className="absolute left-0 top-0 h-2 bg-[#0b7d3e] rounded-full w-1/3" />
              <div className="absolute left-[33%] top-[-4px] w-4 h-4 rounded-full bg-[#0b7d3e] border-2 border-white" />
            </div>
            <div className="flex items-center gap-1 w-full">
              <span className="font-normal text-xs text-[var(--appereance-font-color-alt,#5c6063)] font-['Roboto',sans-serif]">
                Puoi vincere:
              </span>
              <span className="font-bold text-sm text-[var(--appereance-font-color-active,#262c2f)] font-['Roboto',sans-serif]">
                {potentialWin}
              </span>
            </div>
          </>
        )}

        {isStatus && !["checkout"].includes(type) && (
          <p className="font-normal text-sm leading-[18px] text-[var(--appereance-font-color-alt,#5c6063)] text-center w-full font-['Roboto',sans-serif]">
            {type === "success" && "Vai nelle My Bets per visualizzare le tue giocate"}
            {type === "error" && "Riprova pi\u00F9 tardi"}
            {type === "login" && "Esegui nuovamente l\u2019accesso."}
            {type === "pending" && "Verifica lo stato della scommessa nelle MyBets."}
            {type === "warning" && `La tua vincita potenziale ora \u00E8 di 18\u20AC.\nConfermi la scommessa?`}
          </p>
        )}

        {/* Buttons */}
        <div className="flex gap-2 items-center w-full">
          {showTwoButtons && (
            <button
              className="flex-1 h-9 rounded-lg border border-[#262c2f] bg-transparent text-[#262c2f] font-medium text-sm cursor-pointer font-['Roboto',sans-serif]"
              onClick={onSecondaryClick}
            >
              {secondaryLabel}
            </button>
          )}
          <button
            className={`flex-1 h-9 rounded-lg font-bold text-sm cursor-pointer font-['Roboto',sans-serif]
              ${type === "login" ? "bg-[#bed62f] text-[#262c2f]" : "bg-[#0b7d3e] text-white"}
              ${isCheckout ? "bg-[#ff8e0d] text-white" : ""}`}
            onClick={onPrimaryClick}
          >
            {primaryLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardQuizbet;
