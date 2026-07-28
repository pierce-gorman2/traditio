import Divider from "@/components/Divider";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <section
        aria-label="Introduction"
        className="relative flex min-h-dvh flex-col items-center justify-center px-6 text-center"
      >
        <FadeIn className="flex flex-col items-center gap-6">
          <h1 className="font-serif text-5xl font-medium tracking-tight text-navy sm:text-7xl">
            Traditio Co.
          </h1>
          <p className="max-w-xl text-base font-light tracking-wide text-charcoal/70 sm:text-lg">
            Building for the next thousand years.
          </p>
          <Divider className="mt-2" />
        </FadeIn>

        <FadeIn
          delayMs={600}
          className="absolute bottom-10 flex flex-col items-center gap-3 text-charcoal/40"
        >
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase">Scroll</span>
          <span aria-hidden="true" className="block h-10 w-px bg-charcoal/20" />
        </FadeIn>
      </section>

      <section aria-labelledby="mission-heading" className="px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto flex max-w-2xl flex-col gap-24">
          <FadeIn className="flex flex-col items-center gap-6 text-center">
            <h2
              id="mission-heading"
              className="font-serif text-3xl text-navy sm:text-4xl"
            >
              Our Mission
            </h2>
            <p className="text-base leading-relaxed text-charcoal/80 sm:text-lg">
              Traditio Co. exists to equip men of God to faithfully steward their
              faith, family, work, wealth, and influence for generations to come.
            </p>
          </FadeIn>

          <FadeIn className="flex flex-col items-center gap-6 text-center">
            <h2 className="font-serif text-3xl text-navy sm:text-4xl">
              What is Traditio?
            </h2>
            <div className="flex flex-col gap-5 text-base leading-relaxed text-charcoal/80 sm:text-lg">
              <p>
                Traditio is the Latin word meaning &ldquo;to hand down&rdquo; or
                &ldquo;to pass on.&rdquo;
              </p>
              <p>
                We believe every man is building an inheritance. Not merely
                financial wealth, but faith, wisdom, character, businesses,
                homes, institutions, and families.
              </p>
              <p>
                Our goal is to help men build things worth passing to their
                children&rsquo;s children.
              </p>
              <p>
                Everything we create exists to encourage long-term,
                Christ-centered stewardship that endures for generations.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
