export type Podcast = {
  slug: string;
  title: string;
  description: string;
  /** Path under /public, or a fully-qualified URL. Omit until cover art exists. */
  coverImage?: string;
  links: {
    apple?: string;
    spotify?: string;
    rss?: string;
    website?: string;
  };
};

export const podcasts: Podcast[] = [
  {
    slug: "die-well",
    title: "Die Well",
    description:
      "A podcast for Christian men pursuing faithful lives, courageous leadership, and enduring legacies through Christ.",
    links: {
      rss: "https://api.riverside.com/hosting/b6ihANCc.rss",
    },
  },
];
