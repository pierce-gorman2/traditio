import Image from "next/image";
import type { Podcast } from "@/data/podcasts";
import { fetchPodcastFeed } from "@/lib/rss";

const linkLabels: Record<keyof Podcast["links"], string> = {
  apple: "Apple Podcasts",
  spotify: "Spotify",
  rss: "RSS Feed",
  website: "Website",
};

type PodcastCardProps = {
  podcast: Podcast;
};

export default async function PodcastCard({ podcast }: PodcastCardProps) {
  const feed = podcast.links.rss ? await fetchPodcastFeed(podcast.links.rss) : null;
  const coverImage = feed?.image ?? podcast.coverImage;

  const linkEntries = (Object.entries(podcast.links) as [keyof Podcast["links"], string | undefined][]).filter(
    (entry): entry is [keyof Podcast["links"], string] => Boolean(entry[1])
  );

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

        {feed && feed.episodes.length > 0 && (
          <ol className="flex flex-col divide-y divide-navy/10 border-t border-navy/10 pt-2 text-left">
            {feed.episodes.map((episode) => (
              <li key={episode.title} className="flex flex-col gap-1 py-4">
                <p className="font-serif text-lg text-navy">{episode.title}</p>
                <p className="text-xs tracking-wide text-charcoal/50">
                  {[episode.pubDate, episode.duration].filter(Boolean).join(" · ")}
                </p>
                {episode.audioUrl && (
                  <a
                    href={episode.audioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-xs font-medium tracking-[0.15em] text-gold uppercase underline decoration-gold/40 underline-offset-4 transition-colors hover:text-navy"
                  >
                    Listen
                  </a>
                )}
              </li>
            ))}
          </ol>
        )}
      </div>
    </article>
  );
}
