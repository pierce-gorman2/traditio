export type Podcast = {
  slug: string;
  title: string;
  description: string;
  /** Path under /public, or a fully-qualified URL. Omit until cover art exists. */
  coverImage?: string;
  links: {
    apple?: string;
    spotify?: string;
    youtube?: string;
    website?: string;
    /** Used to fetch cover art at build time; not rendered as a public link. */
    rss?: string;
  };
};

export const podcasts: Podcast[] = [
  {
    slug: "die-well",
    title: "Die Well",
    description:
      "A podcast for Christian men pursuing faithful lives, courageous leadership, and enduring legacies through Christ.",
    links: {
      apple: "https://podcasts.apple.com/us/podcast/die-well/id1871918633",
      spotify: "https://open.spotify.com/show/7qssKFeBSQ1iOcMrG3cqoP?si=e349f9f15e014825",
      rss: "https://api.riverside.com/hosting/b6ihANCc.rss",
    },
  },
];
