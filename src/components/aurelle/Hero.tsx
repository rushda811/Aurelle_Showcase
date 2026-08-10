import type { ReactNode } from "react";
import heroImg from "@/assets/aurelle-hero.jpg";

function Rise({
  start,
  delay,
  className = "",
  children,
}: {
  start: boolean;
  delay: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        start ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function Hero({ start }: { start: boolean }) {
  return (
    <section className="border-b border-border">
      <header className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-8 lg:px-12">
        <a href="#top" className="font-block text-[11px] tracking-[0.35em] sm:text-xs">
          Aurelle Vows
        </a>
         <nav className="flex items-center gap-5 sm:gap-8">
           <a
             href="#collection"
             className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-rose sm:inline"
           >
             Collection
           </a>
           <a
             href="#invitation"
             className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-rose lg:inline"
           >
             Invitation
           </a>
           <a
             href="#atelier"
             className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-rose sm:inline"
           >
             Atelier
           </a>
          <a href="#inquire" className="btn-lux btn-outline px-4 py-2 text-[10px] sm:px-5">
            Inquire
          </a>
        </nav>
      </header>

      <div className="grid lg:min-h-[calc(100vh-58px)] lg:grid-cols-[1.05fr_1fr]">
        <div className="flex min-w-0 flex-col justify-center px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <Rise start={start} delay={0}>
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground sm:text-xs">
              Atelier of digital vows — by appointment
            </p>
          </Rise>
          <Rise start={start} delay={120}>
            <h1 className="mt-6">
              <span className="font-block block text-[7.5vw] leading-[1.05] sm:text-6xl lg:text-7xl">
                Your love,
              </span>
              <span className="font-cursive block text-6xl leading-[1.1] text-rose sm:text-8xl lg:text-9xl">
                beautifully
              </span>
              <span className="font-block block text-[7.5vw] leading-[1.05] sm:text-6xl lg:text-7xl">
                published.
              </span>
            </h1>
          </Rise>
          <Rise start={start} delay={240}>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Editorial, architecturally composed wedding websites and digital
              invitation suites — designed for modern couples, flawless on
              every device.
            </p>
          </Rise>
          <Rise start={start} delay={360}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#collection"
                className="btn-lux btn-solid px-8 py-4 text-center text-[11px]"
              >
                View the collection
              </a>
              <a
                href="#inquire"
                className="btn-lux btn-outline px-8 py-4 text-center text-[11px]"
              >
                Begin an inquiry
              </a>
            </div>
          </Rise>
          <Rise start={start} delay={480}>
            <p className="mt-12 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Worldwide · Limited commissions each season
            </p>
          </Rise>
        </div>

        <div className="relative border-t border-border lg:border-t-0 lg:border-l">
          <img
            src={heroImg}
            alt="Blush pink wedding invitation suite with gold foil edges, calligraphy pen and rose petals"
            width={1024}
            height={1280}
            className="aspect-[4/5] h-full w-full object-cover lg:aspect-auto"
          />
          <p className="absolute bottom-4 left-4 bg-background/85 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-foreground backdrop-blur-sm">
            Nº 01 — The Blush Suite
          </p>
        </div>
      </div>
    </section>
  );
}