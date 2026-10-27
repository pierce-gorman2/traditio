import type { Metadata } from "next";
import Divider from "@/components/Divider";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Traditio Co. is a Christian company that exists to glorify God by creating innumerable opportunities for our team.",
};

const bodyClass =
  "font-serif text-xl font-medium leading-[1.75] text-charcoal sm:text-2xl sm:leading-[1.7]";

export default function AboutPage() {
  return (
    <article className="px-6 py-32 sm:px-10 sm:py-44">
      <div className="mx-auto flex max-w-2xl flex-col gap-16">
        <FadeIn className="flex flex-col items-center gap-6 text-center">
          <h1 className="font-serif text-5xl font-medium tracking-tight text-navy sm:text-6xl">
            About
          </h1>
          <Divider />
        </FadeIn>

        <FadeIn className="flex flex-col gap-8">
          <p className={bodyClass}>
            Traditio Co. is a Christian company that exists to glorify God by
            creating innumerable opportunities for our team.
          </p>

          <p className={bodyClass}>
            Our name comes from the Latin <em>traditio</em>: &ldquo;a handing
            down&rdquo; or &ldquo;a delivering over.&rdquo; It shares its root
            with the word Paul used when he wrote that he delivered to the
            church what he had first received (1 Cor. 15:3). That&rsquo;s our
            model. We receive opportunity as a gift, and we hand it down.
            Around here we say{" "}
            <em className="text-navy">
              the ceiling is as high as you&rsquo;re willing to climb.
            </em>
          </p>

          <p className={bodyClass}>
            Our founders, Pierce and Hannah Gorman, are Reformed in their
            theology. With the Reformers, they believe no honest calling is less
            sacred than another, no matter how &ldquo;lowly,&rdquo; because all
            of life is lived before the face of God. So they see the
            marketplace as a mission field and Traditio Co. as a way to make
            Jesus known to everyone it touches.
          </p>

          <p className={bodyClass}>
            Jesus came down to earth to create and deliver the ultimate
            opportunity for His people: eternal life. Traditio Co. was founded
            to create and deliver earthly opportunities, in the hope that many
            will also find and obtain the ultimate opportunity.
          </p>
        </FadeIn>

        <FadeIn className="flex flex-col items-center gap-3 text-center">
          <Divider />
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
