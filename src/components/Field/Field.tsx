import React from "react";

/* ── Player selection on the field ── */
type PlayerSelectionProps = {
  className?: string;
  playerName?: string;
  odds?: string;
  badgeCount?: string;
  avatarUrl?: string;
};

export function PlayerSelection({
  className,
  playerName = "Player",
  odds = "1.55",
  badgeCount = "+ 99",
  avatarUrl,
}: PlayerSelectionProps) {
  return (
    <div className={className || "flex flex-col items-center gap-2"}>
      {/* Icon + Label */}
      <div className="flex flex-col items-center gap-0.5">
        <div className="relative w-10 h-10 rounded-full">
          {avatarUrl ? (
            <img
              alt={playerName}
              className="absolute inset-0 w-11 h-11 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover pointer-events-none"
              src={avatarUrl}
            />
          ) : (
            <div className="absolute inset-0 rounded-full bg-[#5c6063]/30" />
          )}
          {/* Badge market number */}
          <div className="absolute bottom-0 right-0 flex items-center justify-center h-3 rounded-full">
            <div className="flex items-center justify-center h-[14px] px-1 rounded-lg border border-[#5c6063] bg-white">
              <span className="font-medium font-['Roboto',sans-serif] text-[10px] leading-3 text-right text-[#262c2f] whitespace-nowrap">
                {badgeCount}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-[18px]">
          <span className="font-medium font-['Roboto',sans-serif] text-xs leading-[14px] text-center text-white w-16">
            {playerName}
          </span>
        </div>
      </div>
      {/* Odds button */}
      <div className="flex items-center justify-center w-14 h-9 px-2 rounded-lg bg-[#e9eaea] overflow-clip">
        <span className="font-bold font-['Roboto',sans-serif] text-xs text-center text-[#262c2f] whitespace-nowrap">
          {odds}
        </span>
      </div>
    </div>
  );
}

/* ── Soccer field background ── */
type FieldBackgroundProps = {
  className?: string;
  children?: React.ReactNode;
};

export function FieldBackground({ className, children }: FieldBackgroundProps) {
  return (
    <div
      className={
        className ||
        "relative flex flex-col items-center w-[344px] h-[600px] rounded-2xl overflow-clip"
      }
      style={{
        background:
          "radial-gradient(ellipse at center, #015f55 0%, #0a403b 100%)",
      }}
    >
      {children}
    </div>
  );
}

/* ── Formation layout ── */
type FormationProps = {
  className?: string;
  formation?: string;
  players?: Array<{ name: string; odds: string; badgeCount?: string; avatarUrl?: string }>;
};

export function Formation({ className, formation = "4-3-2-1", players }: FormationProps) {
  const rows = formation.split("-").map(Number).reverse();
  const defaultPlayers = rows.flatMap((count) =>
    Array.from({ length: count }, () => ({
      name: "Player",
      odds: "1.55",
      badgeCount: "+ 99",
    }))
  );
  const allPlayers = players || defaultPlayers;

  let idx = 0;
  return (
    <div className={className || "flex flex-col items-center gap-4 py-2 w-[344px]"}>
      {rows.map((count, rowIdx) => {
        const rowPlayers = allPlayers.slice(idx, idx + count);
        idx += count;
        return (
          <div
            key={rowIdx}
            className={`flex items-center justify-center w-full ${count <= 2 ? "gap-12" : count === 3 ? "gap-6" : "gap-0"}`}
            style={{ justifyContent: "space-evenly" }}
          >
            {rowPlayers.map((p, pIdx) => (
              <PlayerSelection
                key={pIdx}
                playerName={p.name}
                odds={p.odds}
                badgeCount={p.badgeCount || "+ 99"}
                avatarUrl={p.avatarUrl}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

/* ── Ready-to-use Field ── */
export function Field({ className }: { className?: string }) {
  return (
    <FieldBackground className={className}>
      <Formation />
    </FieldBackground>
  );
}

export default Field;
