import Divider from "@/components/Divider";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-dvh flex-col items-center justify-center px-6 text-center"
    >
      <FadeIn className="flex flex-col items-center gap-7">
        <h1 className="font-serif text-6xl font-medium tracking-tight text-navy sm:text-8xl">
          Traditio Co.
        </h1>
        <p className="max-w-xl font-serif text-xl italic tracking-wide text-navy/70 sm:text-2xl">
          on a mission to glorify God by creating innumerable opportunities for
          our team.
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
  );
}
