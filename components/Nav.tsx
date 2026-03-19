import { Logo } from "@/components/Logo";

const GITHUB_URL = process.env.GITHUB_URL!;
const DOCS_URL = process.env.DOCS_URL!;

export function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Logo className="text-xl text-indigo-500" iconSize={36}>
          <span className="font-bold tracking-tight leading-none -translate-y-[0.16em]">orrery</span>
        </Logo>
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href={DOCS_URL} className="hover:text-indigo-500 transition-colors">
            Docs
          </a>
          <a
            href={GITHUB_URL}
            className="px-4 py-1.5 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
