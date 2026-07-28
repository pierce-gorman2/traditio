import type { Metadata } from "next";
import Divider from "@/components/Divider";
import FadeIn from "@/components/FadeIn";
import PodcastCard from "@/components/PodcastCard";
import { podcasts } from "@/data/podcasts";

export const metadata: Metadata = {
  title: "Podcasts",
  description: "Conversations that help build for generations.",
};

export default function PodcastsPage() {
  return (
    <section className="px-6 py-32 sm:px-10 sm:py-40">
      <div className="mx-auto flex max-w-3xl flex-col gap-20">
        <FadeIn className="flex flex-col items-center gap-6 text-center">
          <h1 className="font-serif text-4xl text-navy sm:text-5xl">
            Traditio Co. Podcasts
          </h1>
          <p className="max-w-lg text-base text-charcoal/70 sm:text-lg">
            Conversations that help build for generations.
          </p>
          <Divider />
        </FadeIn>

        <FadeIn className="flex flex-col gap-8">
          {podcasts.map((podcast) => (
            <PodcastCard key={podcast.slug} podcast={podcast} />
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
