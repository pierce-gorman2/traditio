import { XMLParser } from "fast-xml-parser";

export type FeedEpisode = {
  title: string;
  description: string;
  pubDate?: string;
  duration?: string;
  audioUrl?: string;
  image?: string;
};

export type PodcastFeed = {
  title: string;
  image?: string;
  episodes: FeedEpisode[];
};

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
});

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(pubDate?: string): string | undefined {
  if (!pubDate) return undefined;
  const date = new Date(pubDate);
  if (Number.isNaN(date.getTime())) return undefined;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function fetchPodcastFeed(
  url: string,
  maxEpisodes = 6
): Promise<PodcastFeed | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;

    const xml = await res.text();
    const parsed = parser.parse(xml);
    const channel = parsed?.rss?.channel;
    if (!channel) return null;

    const channelImage: string | undefined =
      channel["itunes:image"]?.["@_href"] ?? channel.image?.url;

    const rawItems = Array.isArray(channel.item)
      ? channel.item
      : channel.item
        ? [channel.item]
        : [];

    const episodes: FeedEpisode[] = rawItems.slice(0, maxEpisodes).map((item: Record<string, unknown>) => ({
      title: String(item.title ?? "Untitled episode"),
      description: stripHtml(String(item.description ?? "")),
      pubDate: formatDate(item.pubDate as string | undefined),
      duration: item["itunes:duration"] ? String(item["itunes:duration"]) : undefined,
      audioUrl: (item.enclosure as Record<string, string> | undefined)?.["@_url"],
      image:
        (item["itunes:image"] as Record<string, string> | undefined)?.["@_href"] ??
        channelImage,
    }));

    return {
      title: String(channel.title ?? ""),
      image: channelImage,
      episodes,
    };
  } catch {
    return null;
  }
}
