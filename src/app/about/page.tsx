import type { Metadata } from "next";
import Divider from "@/components/Divider";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Traditio Co. exists to build for the next thousand years: a country, a legacy, and communities worth inheriting.",
};

const bodyClass =
  "font-serif text-lg font-medium leading-[1.75] text-charcoal sm:text-xl sm:leading-[1.75]";

const headingClass = "font-serif text-2xl font-bold text-navy sm:text-3xl";

const practicalSteps = [
  "Proclaiming the truth through podcasts, blogs, writing, and social media.",
  "Showing up in person through local outreach.",
  "Being faithful where God has placed us as lights in our neighborhoods, school districts, churches, and vocations.",
  "Standing on Scripture and teaching others to do the same (Matthew 5:19).",
  "Praying without ceasing for Christ’s Kingdom to come on earth as it is in Heaven.",
];

export default function AboutPage() {
  return (
    <article className="px-6 py-32 sm:px-10 sm:py-44">
      <div className="mx-auto flex max-w-2xl flex-col gap-16">
        <FadeIn className="flex flex-col items-center gap-6 text-center">
          <h1 className="font-serif text-5xl font-medium tracking-tight text-navy sm:text-6xl">
            About
          </h1>
          <Divider />
          <p className="mt-4 font-serif text-2xl leading-snug text-navy italic sm:text-3xl">
            Traditio Co. exists to build for the next thousand years.
          </p>
        </FadeIn>

        <FadeIn className="flex flex-col gap-16">
          <section aria-labelledby="our-name" className="flex flex-col gap-6">
            <h2 id="our-name" className={headingClass}>
              Our Name
            </h2>
            <p className={bodyClass}>
              Our name comes from the Latin <em>traditio</em>, meaning
              &ldquo;a handing down&rdquo; or &ldquo;a delivering over.&rdquo;
              As Christians, we want to build something worth handing down to
              the generations that follow us: a country, a legacy, and
              communities worth inheriting.
            </p>
          </section>

          <section aria-labelledby="our-mission" className="flex flex-col gap-6">
            <h2 id="our-mission" className={headingClass}>
              Our Mission
            </h2>
            <p className={bodyClass}>
              Our mission is to bring this nation back to King Jesus and back
              to its Christian roots, for the sake of our children&rsquo;s
              children. We are Reformed and postmillennial in our theology, and
              that means that we believe Christ&rsquo;s Kingdom will fill the
              earth, and that God is pleased to bring it about through the
              faithful labor of His people. So we labor with confidence knowing that our King wins
              in the end.
            </p>
          </section>

          <section aria-labelledby="our-why" className="flex flex-col gap-6">
            <h2 id="our-why" className={headingClass}>
              Why
            </h2>
            <p className={bodyClass}>
              America was founded on Christian convictions, and it has drifted
              far from them. We looked around at the country our generation is
              on track to leave behind, and we couldn&rsquo;t accept it. So we
              are stepping into the arena to link arms with fellow Christians
              and fight for this country. To build something that our
              children&rsquo;s children will be proud to inherit.
            </p>
          </section>

          <section aria-labelledby="our-how" className="flex flex-col gap-6">
            <h2 id="our-how" className={headingClass}>
              How
            </h2>
            <p className={bodyClass}>
              Laws and culture follow hearts. A nation doesn&rsquo;t return to
              Christ until its people do, so revival is our first aim. We want
              people to see Jesus, know Jesus, and follow Jesus. Everything
              else flows from there.
            </p>
            <p className={bodyClass}>Practically, that means:</p>
            <ul role="list" className="flex flex-col gap-5">
              {practicalSteps.map((step) => (
                <li key={step} className={`${bodyClass} flex gap-5`}>
                  <span
                    aria-hidden="true"
                    className="mt-[0.8em] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold"
                  />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        <FadeIn>
          <blockquote className="flex flex-col items-center gap-4 border-y border-navy/10 py-12 text-center">
            <p className="font-serif text-2xl leading-snug text-navy italic sm:text-3xl">
              &ldquo;A good man leaves an inheritance to his children&rsquo;s
              children.&rdquo;
            </p>
            <footer className="text-xs font-medium tracking-[0.25em] text-charcoal/60 uppercase">
              Proverbs 13:22
            </footer>
          </blockquote>
        </FadeIn>

        <FadeIn className="flex flex-col items-center gap-3 text-center">
          <p className="font-serif text-2xl leading-snug text-navy italic sm:text-3xl">
            Traditio Co. exists to build for the next thousand years.
          </p>
          <Divider className="mt-4" />
          <p className="mt-3 font-serif text-2xl text-navy italic sm:text-3xl">
            Soli Deo Gloria,
          </p>
          <p className="text-xs font-medium tracking-[0.25em] text-charcoal/60 uppercase">
            The Traditio Team
          </p>
        </FadeIn>
      </div>
    </article>
  );
}
