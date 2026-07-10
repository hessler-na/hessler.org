// sidey.config.ts

export const sideyConfig = {
  /**
   * Global SEO and Site Identity
   * -------------------------------------------------------------------------
   * These values populate your HTML meta tags, RSS feed definitions,
   * and structural header components across the template.
   */
  site: {
    // The main title displayed in browser tabs and search engine results
    title: "Hessler Neighborhood Association",

    // A short fallback summary of your site used for SEO and social share cards
    description: "The Hessler Neighborhood Association",

    // The production domain where your site is deployed (no trailing slash)
    url: "https://hessler.org",

    // Your name, utilized in copyright strings and author meta tags
    author: "Hessler Neighborhood Association",

    // The primary language attribute for HTML accessibility engines (e.g., "en", "id")
    locale: "en",
  },

  /**
   * Primary Sidebar Navigation
   * -------------------------------------------------------------------------
   * Controls the links rendered inside your fixed navigation panel.
   * You can add, reorder, or remove objects here to update your site's structure.
   */
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Hessler Street Fair", href: "/street-fair" },
    { label: "History", href: "/history" },
    { label: "Donate", href: "/donate" },
   // { label: "Blog", href: "/blog" },
   // { label: "RSS", href: "/rss.xml" },
  ],
}

export type SideyConfigType = typeof sideyConfig
