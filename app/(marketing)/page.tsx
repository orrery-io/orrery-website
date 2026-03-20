import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Cockpit } from "@/components/Cockpit";
import { HowItWorks } from "@/components/HowItWorks";
import { CodeSnippet } from "@/components/CodeSnippet";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Cockpit />
        <HowItWorks />
        <CodeSnippet />
        <Community />
      </main>
      <Footer />
    </>
  );
}
