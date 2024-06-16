export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Save Your Day",
  description: "Memorize beautiful moments, today.",
  landingRoutes: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  protectedRoutes: [
    {
      label: "Feed",
      href: "/feed",
    },
  ],
};
