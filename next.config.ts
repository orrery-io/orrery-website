import nextra from "nextra";

const withNextra = nextra({
  contentDirBasePath: "/documentation",
});

export default withNextra({
  env: {
    SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000"),
    DOCS_URL: process.env.NEXT_PUBLIC_DOCS_URL ?? "/documentation",
    GITHUB_URL:
      process.env.NEXT_PUBLIC_GITHUB_URL ??
      "https://github.com/orrery-io/orrery",
  },
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./mdx-components.tsx",
    },
  },
});
