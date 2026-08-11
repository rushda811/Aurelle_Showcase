import { useReveal } from "@/hooks/use-reveal";
import showcase1 from "@/assets/showcase-1.webp";
import showcase2 from "@/assets/web2.webp";
import showcase3 from "@/assets/web3.webp";
import showcase4 from "@/assets/web4.webp";
import showcase5 from "@/assets/web5.webp";
import showcase6 from "@/assets/web6.webp";

// Replace each `url` with the couple's live website when it launches.
const works = [
  {
    img: showcase1,
    index: "01",
    names: "Amelia & Theodore",
    title: "The Blush Editorial",
    tags: "Wedding website · RSVP suite",
    url: "https://sakbi-rana-wedding.vercel.app/",
  },
  {
    img: showcase2,
    index: "02",
    names: "Sofia & Alexander",
    title: "The Arch Suite",
    tags: "Invitation · Website",
    url: "https://bluewedding-invites.vercel.app/",
  },
  {
    img: showcase3,
    index: "03",
    names: "Isabelle & Julien",
    title: "Jardin d'Hiver",
    tags: "Website · Weekend guide",
    url: "https://beachwedding.vercel.app/",
  },
   {
    img: showcase4,
    index: "04",
    names: "Isabelle & Julien",
    title: "Jardin d'Hiver",
    tags: "Website · Weekend guide",
    url: "https://garden-wedding.vercel.app/",
  },
     {
    img: showcase5,
    index: "05",
    names: "Isabelle & Julien",
    title: "Jardin d'Hiver",
    tags: "Website · Weekend guide",
    url: "https://floralwedding-five.vercel.app/",
  },
     {
    img: showcase6,
    index: "06",
    names: "Isabelle & Julien",
    title: "Jardin d'Hiver",
    tags: "Website · Weekend guide",
    url: "https://blackandwhitewedding.vercel.app/",
  },

];

function WorkCard({ work, position }: { work: (typeof works)[number]; position: number }) {
  const { ref, visible } = useReveal<HTMLAnchorElement>();
  return (
    <a
      ref={ref}
      href={work.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Visit the live website for ${work.names} — ${work.title}`}
      style={{ transitionDelay: `${(position % 2) * 140}ms` }}
      className={`group block border-t border-border pt-6 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        position % 2 === 1 ? "sm:mt-24" : ""
      } ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="flex items-baseline justify-between gap-3">
        <span
          aria-hidden
          className="font-serif text-4xl italic leading-none text-rose/35 transition-colors duration-700 group-hover:text-rose sm:text-5xl"
        >
          {work.index}
        </span>
      
      </div>
      <div className="relative mt-5 overflow-hidden border border-border">
        <img
          src={work.img}
          alt={`${work.names} wedding website — ${work.title}`}
          width={1024}
          height={1280}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground">
            View website
          </span>
          <span
            aria-hidden
            className="text-lg text-primary-foreground transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
          >
            ↗
          </span>
        </div>
      </div>
      <h3 className="font-serif mt-6 text-lg uppercase tracking-[0.15em] sm:text-xl">
        {work.names}
      </h3>
      <p className="font-cursive mt-1 text-2xl text-rose sm:text-3xl">{work.title}</p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {work.tags}
        </p>
        <span className="h-px w-10 bg-rose transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-20" />
      </div>
    </a>
  );
}

export function Showcase() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="collection" className="border-b border-border">
      <div
        ref={ref}
        className={`grid gap-10 px-5 py-16 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-8 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16 lg:px-12 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Recent commissions
          </p>
          <h2 className="mt-5">
            <span className="font-cursive block text-5xl text-rose sm:text-6xl">The</span>
            <span className="font-serif block text-[13vw] uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Collection
            </span>
          </h2>
        </div>
        <div className="min-w-0 max-w-md lg:pb-3">
          <div className="rose-rule mb-6" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            A selection of recent commissions — each suite composed around the couple, their
            venue, and the feeling of the day. Open any piece to visit the live website.
          </p>
        </div>
      </div>
      <div className="grid gap-12 px-5 pb-16 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-20 sm:px-8 sm:pb-24 lg:px-12">
        {works.map((work, i) => (
          <WorkCard key={work.names} work={work} position={i} />
        ))}
      </div>
    </section>
  );
}