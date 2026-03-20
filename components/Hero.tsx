const GITHUB_URL = process.env.GITHUB_URL!;
const DOCS_URL = process.env.DOCS_URL!;

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 text-center max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-8">
        <img src="/orrery-icon.svg" alt="Orrery" className="w-40 h-40" />{" "}
      </div>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
        Open Source · Apache 2.0
      </div>
      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
        BPMN workflow orchestration{" "}
        <span className="text-indigo-500">built in Rust</span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
        Self-hosted, open source alternative to Camunda. Full BPMN 2.0 support,
        PostgreSQL persistence, and multi-language SDKs.
      </p>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <a
          href={DOCS_URL}
          className="px-6 py-3 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors"
        >
          Get Started
        </a>
        <a
          href={GITHUB_URL}
          className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 font-medium hover:border-indigo-500 hover:text-indigo-500 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Star on GitHub ★
        </a>
      </div>
    </section>
  );
}
