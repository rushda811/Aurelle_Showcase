import { useEffect, useRef, useState } from "react";

type Phase = "hold" | "lift" | "gone";

/**
 * Full-screen atelier curtain. Lifts away after a brief hold (or on tap),
 * revealing the hero beneath. Calls onComplete the moment the lift begins
 * so the hero animates in as the curtain rises.
 */
export function IntroCurtain({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<Phase>("hold");
  const completed = useRef(false);

  useEffect(() => {
    if (phase === "hold") {
      const t = window.setTimeout(() => setPhase("lift"), 1500);
      return () => window.clearTimeout(t);
    }
    if (phase === "lift") {
      if (!completed.current) {
        completed.current = true;
        onComplete();
      }
      const t = window.setTimeout(() => setPhase("gone"), 1150);
      return () => window.clearTimeout(t);
    }
    return undefined;
  }, [phase, onComplete]);

  if (phase === "gone") return null;

  return (
    <div
      role="button"
      aria-label="Enter Aurelle Vows"
      onClick={() => setPhase("lift")}
      className={`fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center gap-5 bg-background transition-transform duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        phase === "lift" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="animate-rise flex flex-col items-center gap-5">
        <p className="font-cursive text-6xl text-rose sm:text-7xl">Aurelle</p>
        <div className="rose-rule w-24" />
        <p className="font-block text-[11px] tracking-[0.5em] sm:text-xs">V O W S</p>
      </div>
      <p className="absolute bottom-8 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
        Tap to enter
      </p>
    </div>
  );
}