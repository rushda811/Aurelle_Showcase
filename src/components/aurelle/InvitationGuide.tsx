import { useReveal } from "@/hooks/use-reveal";

const invitationDetails = [
  {
    number: "01",
    title: "The essentials",
    description:
      "Names, date, venue, ceremony time, dress code, and every detail guests need at a glance.",
  },
  {
    number: "02",
    title: "Your story",
    description:
      "A personal welcome, your story, favourite photographs, and the little notes that make it yours.",
  },
  {
    number: "03",
    title: "The weekend",
    description:
      "A considered itinerary for welcome drinks, the ceremony, celebrations, and everything in between.",
  },
  {
    number: "04",
    title: "Guest ease",
    description:
      "RSVPs, dietary notes, travel guidance, accommodation, registry details, and a direct line for questions.",
  },
];

const artDirection = [
  "Your colour story",
  "Your typography",
  "Your imagery",
  "Your way of celebrating",
];

function DetailItem({
  detail,
  position,
}: {
  detail: (typeof invitationDetails)[number];
  position: number;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${position * 90}ms` }}
      className={`group transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        position % 2 === 1 ? "lg:translate-x-16" : ""
      } ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <div className="flex gap-6 sm:gap-10">
        <span
          aria-hidden
          className="font-serif -mt-2 block shrink-0 text-6xl italic leading-none text-rose/35 transition-colors duration-700 group-hover:text-rose sm:text-7xl"
        >
          {detail.number}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-serif text-xl uppercase tracking-[0.15em] sm:text-2xl">
            {detail.title}
          </h3>
          <div className="mt-4 h-px w-12 bg-rose transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            {detail.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export function InvitationGuide() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="invitation" className="border-b border-border">
      <div
        ref={ref}
        className={`grid gap-16 px-5 py-16 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-12 lg:px-12 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Narrative column — sticky on desktop */}
        <div className="lg:col-span-5">
          <div className="space-y-14 lg:sticky lg:top-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                A considered first impression
              </p>
              <h2 className="mt-6">
                <span className="font-cursive block text-5xl text-rose sm:text-6xl">
                  More than
                </span>
                <span className="font-serif block text-[11vw] uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                  an invitation
                </span>
              </h2>
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Your digital invitation can be as simple or as immersive as your day. We shape
                the experience around what your guests need to know — and what you want them to
                feel.
              </p>
            </div>

            {/* Made to match panel */}
            <div className="border border-border bg-secondary p-6 sm:p-10">
              <p className="font-cursive text-4xl text-rose sm:text-5xl">Made to match</p>
              <h3 className="font-serif mt-2 text-xl uppercase tracking-[0.15em] sm:text-2xl">
                Your day, your way
              </h3>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                From quiet and minimal to joyful and maximal, the visual language follows your
                celebration — never a template.
              </p>
              <ul className="mt-10 border-t border-border">
                {artDirection.map((item, i) => (
                  <li
                    key={item}
                    className="group flex items-center justify-between border-b border-border py-4 text-[10px] uppercase tracking-[0.25em]"
                  >
                    <span>{item}</span>
                    <span className="flex items-center gap-3">
                      <span aria-hidden className="font-serif text-sm italic text-rose/50">
                        0{i + 1}
                      </span>
                      <span
                        aria-hidden
                        className="text-rose transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Details column — staggered editorial rhythm */}
        <div className="lg:col-span-7 lg:pl-10">
          <div className="space-y-16 sm:space-y-24 lg:pt-24">
            {invitationDetails.map((detail, i) => (
              <DetailItem key={detail.number} detail={detail} position={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
