import { useReveal } from "@/hooks/use-reveal";

const tiers = [
  {
    name: "The Invitation",
    tagline: "a single perfect page",
    price: "$490",
    features: [
      "One-page digital invitation",
      "Animated details & RSVP form",
      "Flawless on every device",
      "Two rounds of refinement",
      "Delivered within two weeks",
    ],
    featured: false,
  },
  {
    name: "The Signature",
    tagline: "the complete wedding website",
    price: "$1,450",
    features: [
      "Multi-page editorial website",
      "Your story, gallery & travel notes",
      "RSVP & guest management",
      "Registry & custom domain",
      "Three rounds of refinement",
    ],
    featured: true,
  },
  {
    name: "The Heirloom",
    tagline: "bespoke, without limits",
    price: "$3,900",
    features: [
      "Dedicated art direction",
      "Bespoke illustration & monogram",
      "Motion, music & micro-detail",
      "Concierge changes until the day",
      "White-glove launch & support",
    ],
    featured: false,
  },
];

function TierCard({ tier, position }: { tier: (typeof tiers)[number]; position: number }) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${position * 120}ms` }}
      className={`flex flex-col p-6 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:p-10 ${
        tier.featured ? "bg-secondary" : "bg-background"
      } ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      {tier.featured && (
        <p className="mb-6 self-start border border-rose px-3 py-1 text-[9px] uppercase tracking-[0.3em] text-rose">
          Most adored
        </p>
      )}
      <h3 className="font-block text-sm tracking-[0.3em]">{tier.name}</h3>
      <p className="font-cursive mt-2 text-3xl text-rose">{tier.tagline}</p>
      <p className="mt-8 flex items-baseline gap-3">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">From</span>
        <span className="font-block text-4xl">{tier.price}</span>
      </p>
      <div className="rose-rule my-8" />
      <ul className="flex-1 space-y-3 text-sm text-muted-foreground">
        {tier.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span aria-hidden className="text-rose">
              —
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="#inquire"
        className={`btn-lux mt-10 px-6 py-4 text-center text-[11px] ${
          tier.featured ? "btn-solid" : "btn-outline"
        }`}
      >
        Reserve {tier.name}
      </a>
    </article>
  );
}

export function Pricing() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="atelier" className="border-b border-border">
      <div
        ref={ref}
        className={`grid gap-6 border-b border-border px-5 py-14 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-8 sm:py-20 lg:grid-cols-2 lg:px-12 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="min-w-0">
          <span className="font-cursive block text-4xl text-rose sm:text-5xl">The</span>
          <span className="font-block block text-[7vw] sm:text-5xl">Atelier</span>
        </h2>
        <p className="min-w-0 max-w-md self-end text-sm leading-relaxed text-muted-foreground lg:justify-self-end">
          Three ways to be published — every commission is art-directed,
          hand-built, and refined until it feels inevitable.
        </p>
      </div>
      <div className="grid gap-px bg-border lg:grid-cols-3">
        {tiers.map((tier, i) => (
          <TierCard key={tier.name} tier={tier} position={i} />
        ))}
      </div>
    </section>
  );
}