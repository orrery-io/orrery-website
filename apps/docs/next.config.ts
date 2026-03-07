import nextra from "nextra";

const withNextra = nextra({
  contentDirBasePath: "/",
});

export default withNextra({
  env: {
    MARKETING_URL: process.env.NEXT_PUBLIC_MARKETING_URL ?? "http://localhost:3000",
    GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/orrery-io/orrery",
  },
});
