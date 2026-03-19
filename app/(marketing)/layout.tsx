import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orrery — Open Source BPMN Workflow Engine",
  description:
    "Self-hosted, open source BPMN 2.0 workflow orchestration engine built in Rust.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Orrery",
    description: "Self-hosted BPMN workflow engine in Rust.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}
