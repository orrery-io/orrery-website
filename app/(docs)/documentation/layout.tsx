import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Logo } from "@/components/Logo";
import type { ReactNode } from "react";
import "nextra-theme-docs/style.css";

const GITHUB_URL = process.env.GITHUB_URL!;

export default async function RootLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap();

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body>
        <Layout
          navbar={
            <Navbar
              logo={<Logo iconSize={48} />}
              projectLink={GITHUB_URL}
            >
              Orrery
            </Navbar>
          }
          pageMap={pageMap}
          docsRepositoryBase={`${GITHUB_URL}/tree/main/content`}
          footer={<Footer>Apache 2.0 © Orrery contributors</Footer>}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
