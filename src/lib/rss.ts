import { XMLParser } from "fast-xml-parser";

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
});

export async function fetchPodcastArtwork(url: string): Promise<string | undefined> {
  try {
    const res = await fetch(url);
    if (!res.ok) return undefined;

    const xml = await res.text();
    const parsed = parser.parse(xml);
    const channel = parsed?.rss?.channel;
    if (!channel) return undefined;

    return channel["itunes:image"]?.["@_href"] ?? channel.image?.url;
  } catch {
    return undefined;
  }
}
