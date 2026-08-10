import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { IntroCurtain } from "@/components/aurelle/IntroCurtain";
import { Hero } from "@/components/aurelle/Hero";
import { Marquee } from "@/components/aurelle/Marquee";
import { Showcase } from "@/components/aurelle/Showcase";
import { InvitationGuide } from "@/components/aurelle/InvitationGuide";
import { Inquiry } from "@/components/aurelle/Inquiry";
import { Footer } from "@/components/aurelle/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurelle Vows — Luxury Wedding Website Atelier" },
      {
        name: "description",
        content:
          "Editorial, architecturally composed wedding websites and digital invitation suites. Inquire via Instagram @aurellevows.",
      },
      { property: "og:title", content: "Aurelle Vows — Luxury Wedding Website Atelier" },
      {
        property: "og:description",
        content:
          "Editorial, architecturally composed wedding websites and digital invitation suites for modern couples.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Aurelle Vows",
          description:
            "Luxury wedding website atelier — editorial wedding websites and digital invitation suites for modern couples.",
          sameAs: ["https://www.instagram.com/aurelle_vows"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [revealed, setRevealed] = useState(false);
  const onComplete = useCallback(() => setRevealed(true), []);

  return (
    <main id="top" className="min-h-screen overflow-x-hidden">
      <IntroCurtain onComplete={onComplete} />
      <Hero start={revealed} />
      <Marquee />
      <InvitationGuide />
      <Showcase />
      <Inquiry />
      <Footer />
    </main>
  );
}
