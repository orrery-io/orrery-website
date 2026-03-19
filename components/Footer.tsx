import { Logo } from "@/components/Logo";

const GITHUB_URL = process.env.GITHUB_URL!;
const DOCS_URL = process.env.DOCS_URL!;

export function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <Logo className="text-lg text-indigo-500" />
        <div className="flex items-center gap-6">
          <a href={DOCS_URL} className="hover:text-indigo-500 transition-colors">
            Docs
          </a>
          <a
            href={GITHUB_URL}
            className="hover:text-indigo-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={`${GITHUB_URL}/blob/main/LICENSE`}
            className="hover:text-indigo-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apache 2.0
          </a>
        </div>
        <span>© {new Date().getFullYear()} Orrery contributors</span>
      </div>
    </footer>
  );
}
