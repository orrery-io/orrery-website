import type { NextConfig } from "next";

const config: NextConfig = {
  env: {
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3005",
    DOCS_URL: process.env.NEXT_PUBLIC_DOCS_URL ?? "http://localhost:3006",
    GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/orrery-io/orrery",
  },
};

export default config;
