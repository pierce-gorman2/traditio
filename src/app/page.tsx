import Divider from "@/components/Divider";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <section
        aria-label="Introduction"
        className="relative flex min-h-dvh flex-col items-center justify-center px-6 text-center"
      >
        <FadeIn className="flex flex-col items-center gap-7">
          <h1 className="font-serif text-6xl font-medium tracking-tight text-navy sm:text-8xl">
            Traditio Co.
          </h1>
          <p className="max-w-xl font-serif text-xl italic tracking-wide text-navy/70 sm:text-2xl">
            Building for the next thousand years.
          </p>
          <Divider className="mt-3" />
        </FadeIn>

        <FadeIn
          delayMs={600}
          className="absolute bottom-10 flex flex-col items-center gap-3 text-charcoal/40"
        >
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase">Scroll</span>
          <span aria-hidden="true" className="block h-10 w-px bg-charcoal/20" />
        </FadeIn>
      </section>

      <section aria-labelledby="mission-heading" className="bg-navy px-6 py-28 sm:px-10 sm:py-36">
        <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
          <h2
            id="mission-heading"
            className="text-xs font-medium tracking-[0.3em] text-gold uppercase"
          >
            Our Mission
          </h2>
          <p className="font-serif text-3xl leading-snug text-parchment italic sm:text-4xl">
            &ldquo;Traditio Co. exists to equip men of God to build legacies
            that their children&rsquo;s children are proud to inherit.&rdquo;
          </p>
          <Divider />
        </FadeIn>
      </section>

      <section aria-labelledby="what-is-heading" className="px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto flex max-w-4xl flex-col gap-16">
          <FadeIn className="flex flex-col items-center gap-6 text-center">
            <h2
              id="what-is-heading"
              className="font-serif text-3xl text-navy sm:text-4xl"
            >
              What is Traditio?
            </h2>
            <Divider />
          </FadeIn>

          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="font-serif text-xl leading-relaxed text-navy italic sm:text-2xl">
              Traditio Co. is a Christian company. We hold to thousand-year
              thinking: the conviction that Christ&rsquo;s Kingdom advances
              through the faithful, generational labor of His people, and
              that every generation builds toward an inheritance the next
              will carry forward.
            </p>
          </FadeIn>

          <FadeIn>
            <dl className="grid gap-x-16 gap-y-12 sm:grid-cols-2">
              {whatIsTraditio.map(({ label, text }) => (
                <div key={label} className="flex flex-col gap-3 border-t border-navy/15 pt-6">
                  <dt className="font-serif text-sm tracking-[0.25em] text-gold">
                    {label}
                  </dt>
                  <dd className="text-base leading-relaxed text-charcoal/80 sm:text-lg">
                    {text}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

const whatIsTraditio = [
  {
    label: "I",
    text: (
      <>
        Traditio is the Latin word meaning &ldquo;to hand down&rdquo; or
        &ldquo;to pass on.&rdquo;
      </>
    ),
  },
  {
    label: "II",
    text: "We believe every man is building an inheritance. Not merely financial wealth, but faith, wisdom, character, businesses, homes, institutions, and families.",
  },
  {
    label: "III",
    text: (
      <>
        Our goal is to help men build things worth passing to their
        children&rsquo;s children.
      </>
    ),
  },
  {
    label: "IV",
    text: "Everything we create exists to encourage long-term, Christ-centered stewardship that endures for generations.",
  },
];
