import Image from "next/image";
import type { Podcast } from "@/data/podcasts";

const linkLabels: Record<keyof Podcast["links"], string> = {
  apple: "Apple Podcasts",
  spotify: "Spotify",
  rss: "RSS Feed",
  website: "Website",
};

type PodcastCardProps = {
  podcast: Podcast;
};

export default function PodcastCard({ podcast }: PodcastCardProps) {
  const linkEntries = (Object.entries(podcast.links) as [keyof Podcast["links"], string | undefined][]).filter(
    (entry): entry is [keyof Podcast["links"], string] => Boolean(entry[1])
  );

  return (
    <article className="flex flex-col gap-6 border border-navy/10 bg-white/40 p-8 sm:flex-row sm:gap-10 sm:p-10">
      <div className="flex h-32 w-32 shrink-0 items-center justify-center self-center border border-navy/15 bg-navy sm:self-start">
        {podcast.coverImage ? (
          <Image
            src={podcast.coverImage}
            alt={`${podcast.title} cover art`}
            width={128}
            height={128}
            className="h-full w-full object-cover"
          />
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
