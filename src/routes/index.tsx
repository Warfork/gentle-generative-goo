import { createFileRoute } from "@tanstack/react-router";

import promptFloodImg from "@/assets/slop-prompt-flood.jpg";
import brandAutopilotImg from "@/assets/slop-brand-autopilot.jpg";
import shipScaleImg from "@/assets/slop-ship-scale.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SLANT/AI — Generate slop at machine speed" },
      {
        name: "description",
        content:
          "The only AI studio that turns your half-finished prompts into a flood of on-brand, ready-to-ship content. No taste required.",
      },
      {
        property: "og:title",
        content: "SLANT/AI — Generate slop at machine speed",
      },
      {
        property: "og:description",
        content:
          "The only AI studio that turns your half-finished prompts into a flood of on-brand, ready-to-ship content. No taste required.",
      },
      { name: "twitter:title", content: "SLANT/AI — Generate slop at machine speed" },
      {
        name: "twitter:description",
        content:
          "The only AI studio that turns your half-finished prompts into a flood of on-brand, ready-to-ship content. No taste required.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-hidden bg-cream font-body text-ink">
      <header className="flex items-center justify-between border-b-2 border-ink px-8 py-5">
        <div className="font-display text-2xl tracking-wide">
          SLANT<span className="text-brand">/AI</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wider md:flex">
          <span className="cursor-pointer">Models</span>
          <span className="cursor-pointer">Lab</span>
          <span className="cursor-pointer">Pricing</span>
          <span className="cursor-pointer">Pitch</span>
        </nav>
        <a
          href="#cta"
          className="bg-ink px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand -skew-x-12"
        >
          <span className="inline-block skew-x-12">Get access</span>
        </a>
      </header>

      <section className="relative overflow-hidden px-8 pb-24 pt-16">
        <div className="absolute -left-24 top-10 hidden h-[140%] w-40 bg-brand/10 -skew-x-12 lg:block"></div>
        <div className="absolute right-24 top-0 hidden h-full w-24 bg-ink/5 -skew-x-12 lg:block"></div>

        <div className="relative max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-2 bg-ink px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white -skew-x-12">
            <span className="skew-x-12">The slop engine for 2025</span>
          </div>
          <h1 className="font-display text-[15vw] uppercase leading-[0.82] md:text-[10rem]">
            Generate
            <br />
            <span className="text-brand">slop</span> at
            <br />
            <span className="relative inline-block">
              machine speed
              <span className="absolute -bottom-4 left-0 h-3 w-full bg-brand -skew-x-12"></span>
            </span>
          </h1>
          <p className="mb-8 mt-14 max-w-md text-lg font-medium leading-relaxed">
            The only AI studio that turns your half-finished prompts into a flood of
            on-brand, ready-to-ship content. No taste required.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#cta"
              className="bg-brand px-8 py-4 font-display text-xl uppercase tracking-wide text-white transition-colors hover:bg-ink -skew-x-12"
            >
              <span className="inline-block skew-x-12">Start generating</span>
            </a>
            <a
              href="#features"
              className="border-b-2 border-ink px-1 pb-1 text-sm font-semibold uppercase tracking-widest"
            >
              Watch the reel
            </a>
          </div>
        </div>
      </section>

      <div className="scale-105 overflow-hidden bg-ink py-4 text-white -skew-y-2">
        <div className="marquee-track font-display text-2xl uppercase tracking-wide">
          <span>Zero effort</span>
          <span className="text-brand">/</span>
          <span>Endless output</span>
          <span className="text-brand">/</span>
          <span>Instant draft</span>
          <span className="text-brand">/</span>
          <span>Always on</span>
          <span className="text-brand">/</span>
          <span>Zero effort</span>
          <span className="text-brand">/</span>
          <span>Endless output</span>
          <span className="text-brand">/</span>
          <span>Instant draft</span>
          <span className="text-brand">/</span>
          <span>Always on</span>
          <span className="text-brand">/</span>
        </div>
      </div>

      <section id="features" className="px-8 py-24">
        <div className="mb-14 flex items-end justify-between">
          <h2 className="font-display text-6xl uppercase leading-[0.85] md:text-8xl">
            What the
            <br />
            <span className="text-brand">machine</span> does
          </h2>
          <span className="hidden font-display text-7xl text-ink/15 md:block">01</span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            number="01"
            title="Prompt flood"
            description="Drop one idea, get forty variations across tone, length and format before your coffee cools."
            image={promptFloodImg}
            alt="Abstract burst of chat bubbles and text lines exploding outward"
          />
          <FeatureCard
            number="02"
            title="Brand autopilot"
            description="Learn your voice once, then stamp it onto every headline, caption and cold email forever."
            image={brandAutopilotImg}
            alt="Motion-blurred logo stamps and brand marks in flight"
          />
          <FeatureCard
            number="03"
            title="Ship at scale"
            description="One click publishes the winning batch to every channel. Momentum you can feel, quality you can ignore."
            image={shipScaleImg}
            alt="Stack of content cards launching upward in a dynamic angle"
          />
        </div>
      </section>

      <section
        id="cta"
        className="mx-[-2%] scale-105 bg-brand px-8 py-24 text-white -skew-y-2"
      >
        <div className="max-w-3xl skew-y-2">
          <h2 className="font-display text-6xl uppercase leading-[0.85] md:text-8xl">
            Stop
            <br />
            thinking.
            <br />
            Start slopping.
          </h2>
          <a
            href="#"
            className="mt-10 inline-block bg-white px-8 py-4 font-display text-xl uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-white -skew-x-12"
          >
            <span className="inline-block skew-x-12">Claim your flood</span>
          </a>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-between gap-4 border-t-2 border-ink px-8 py-8 text-xs font-semibold uppercase tracking-widest">
        <span className="font-display text-xl">
          SLANT<span className="text-brand">/AI</span>
        </span>
        <span>© 2025 — Made entirely by a machine</span>
      </footer>
    </div>
  );
}

function FeatureCard({
  number,
  title,
  description,
  image,
  alt,
}: {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}) {
  return (
    <div className="border-2 border-ink bg-white p-8 transition-transform hover:-translate-y-2 -skew-x-3">
      <div className="mb-6 font-display text-5xl text-brand">{number}</div>
      <h3 className="mb-3 font-display text-3xl uppercase">{title}</h3>
      <p className="mb-6 text-sm leading-relaxed">{description}</p>
      <img
        src={image}
        alt={alt}
        width={1024}
        height={768}
        loading="lazy"
        className="aspect-[4/3] w-full bg-cream-dark object-cover outline outline-1 -outline-offset-1 outline-ink/5"
      />
    </div>
  );
}
