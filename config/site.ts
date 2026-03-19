export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "BILDUR",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Bilder",
      href: "/images",
    },
    {
      label: "Last opp",
      href: "/upload",
    },
  ],
  links: {
    github: "https://github.com/Sigdriv/Bildur",
    images: "/images",
  },
};
