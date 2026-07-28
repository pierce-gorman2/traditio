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
              Traditio Co. exists to build men of God who build legacies that
              their children&rsquo;s children are proud to inherit.
            </p>
          </FadeIn>

          <FadeIn className="flex flex-col items-center gap-6 border-t border-navy/10 pt-24 text-center">
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
