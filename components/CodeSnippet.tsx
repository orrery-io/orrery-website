const code = `import { OrreryWorker } from "@orrery/sdk";

const worker = new OrreryWorker({
  baseUrl: "http://localhost:8080",
  topic: "validatePayment",
  handler: async (task) => {
    const { orderId, amount } = task.variables;
    const valid = await validatePayment(orderId, amount);
    await task.complete({ valid });
  },
});

worker.start();`;

export function CodeSnippet() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">
        Write a worker in minutes
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
        Workers subscribe to BPMN service tasks by topic and process them
        asynchronously.
      </p>
      <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
        <div className="px-4 py-2 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 text-xs text-gray-500 font-mono">
          worker.ts
        </div>
        <pre className="p-6 bg-gray-950 text-gray-100 overflow-x-auto text-sm font-mono leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </section>
  );
}
