const steps = [
  {
    number: "01",
    title: "Deploy",
    description:
      "Run the orrery server with Docker or as a binary. Connect to your PostgreSQL database.",
  },
  {
    number: "02",
    title: "Define BPMN",
    description:
      "Upload your BPMN 2.0 process definition. Model workflows visually with any BPMN editor.",
  },
  {
    number: "03",
    title: "Write Workers",
    description:
      "Implement service task workers in Rust, TypeScript, or Clojure. Workers poll for tasks and complete them.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-block text-4xl font-bold text-indigo-200 dark:text-indigo-900 mb-4">
                {step.number}
              </div>
              <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
