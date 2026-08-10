const items = [
  "Wedding Websites",
  "Digital Invitations",
  "RSVP Suites",
  "Guest Concierge",
  "Editorial Design",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="font-block px-6 text-[11px] tracking-[0.35em] whitespace-nowrap text-muted-foreground sm:px-10 sm:text-xs">
            {item}
          </span>
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-rose" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div aria-hidden className="overflow-hidden border-b border-border py-4 sm:py-5">
      <div className="animate-marquee flex w-max">
        <Row />
        <Row />
      </div>
    </div>
  );
}