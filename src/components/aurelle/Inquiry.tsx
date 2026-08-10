import { useReveal } from "@/hooks/use-reveal";

export function Inquiry() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="inquire" className="px-5 py-20 text-center sm:px-8 sm:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-2xl transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <p className="font-cursive text-4xl text-rose sm:text-5xl">Begin</p>
        <h2 className="font-block mt-3 text-3xl sm:text-5xl lg:text-6xl">Your Inquiry</h2>
        <div className="rose-rule mx-auto mt-8 w-32" />
        <p className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
          We accept a limited number of commissions each season. Share your
          date, your venue, and the feeling you're dreaming of — every inquiry
          begins with a conversation on Instagram.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="https://www.instagram.com/aurelle_vows"
            target="_blank"
            rel="noreferrer"
            className="btn-lux btn-solid w-full px-8 py-4 text-[11px] sm:w-auto"
          >
            Instagram — @aurelle_vows
          </a>

        </div>
      </div>
    </section>
  );
}