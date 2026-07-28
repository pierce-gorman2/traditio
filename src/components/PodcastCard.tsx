import Image from "next/image";
import type { Podcast } from "@/data/podcasts";
import { fetchPodcastArtwork } from "@/lib/rss";

type PublicLinkKey = "apple" | "spotify" | "youtube" | "website";

const linkLabels: Record<PublicLinkKey, string> = {
  apple: "Apple Podcasts",
  spotify: "Spotify",
  youtube: "YouTube",
  website: "Website",
};

type PodcastCardProps = {
  podcast: Podcast;
};

export default async function PodcastCard({ podcast }: PodcastCardProps) {
  const feedImage = podcast.links.rss ? await fetchPodcastArtwork(podcast.links.rss) : undefined;
  const coverImage = feedImage ?? podcast.coverImage;

  const linkEntries = (Object.keys(linkLabels) as PublicLinkKey[])
    .filter((key) => Boolean(podcast.links[key]))
    .map((key) => [key, podcast.links[key] as string] as const);

  return (
    <article className="flex flex-col gap-6 border border-navy/10 bg-white/40 p-8 sm:flex-row sm:gap-10 sm:p-10">
      <div className="flex h-32 w-32 shrink-0 items-center justify-center self-center border border-navy/15 bg-navy sm:self-start">
        {coverImage ? (
          coverImage.startsWith("http") ? (
            // eslint-disable-next-line @next/next/no-img-element -- remote artwork from an arbitrary RSS feed, not a known image domain
            <img
              src={coverImage}
              alt={`${podcast.title} cover art`}
              className="h-full w-full object-cover"
            />
          ) : (
            <Image
              src={coverImage}
              alt={`${podcast.title} cover art`}
              width={128}
              height={128}
              className="h-full w-full object-cover"
            />
          )
        ) : (
          <span className="font-serif text-3xl text-parchment" aria-hidden="true">
            {podcast.title.charAt(0)}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 text-center sm:text-left">
        <h3 className="font-serif text-2xl text-navy sm:text-3xl">{podcast.title}</h3>
        <p className="text-sm leading-relaxed text-charcoal/70 sm:text-base">{podcast.description}</p>

        {linkEntries.length > 0 && (
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2 sm:justify-start">
            {linkEntries.map(([key, href]) => (
              <li key={key}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium tracking-[0.15em] text-gold uppercase underline decoration-gold/40 underline-offset-4 transition-colors hover:text-navy"
                >
                  {linkLabels[key]}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
