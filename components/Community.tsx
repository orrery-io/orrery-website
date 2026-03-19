const GITHUB_URL = process.env.GITHUB_URL!;

export function Community() {
  return (
    <section className="py-20 px-6 bg-indigo-50 dark:bg-indigo-950/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Open Source Forever</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Orrery is Apache 2.0 licensed. Use it, fork it, contribute to it.
          No commercial license required, ever.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href={GITHUB_URL}
            className="px-6 py-3 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
          <a
            href={`${GITHUB_URL}/issues`}
            className="px-6 py-3 rounded-lg border border-indigo-300 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute
          </a>
        </div>
      </div>
    </section>
  );
}
