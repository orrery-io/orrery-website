const features = [
  {
    title: "Self-Hosted",
    description:
      "Run on your own infrastructure. No vendor lock-in, no licensing fees, full control over your data.",
    icon: "🏠",
  },
  {
    title: "Full BPMN 2.0",
    description:
      "Complete support for service tasks, gateways, timers, message correlation, subprocesses, and boundary events.",
    icon: "⚙️",
  },
  {
    title: "Multi-Language SDKs",
    description:
      "Official SDKs for Rust, TypeScript, and Clojure. Build workers in your language of choice.",
    icon: "🌐",
  },
  {
    title: "REST API + Web UI",
    description:
      "OpenAPI-documented REST API and a built-in web dashboard for monitoring and managing workflows.",
    icon: "📊",
  },
];

export function Features() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Why Orrery?</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
          >
            <div className="text-3xl mb-4">{f.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
