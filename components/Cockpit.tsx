"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  { label: "Dashboard", src: "/assets/cockpit-dashboard.webp" },
  { label: "Processes", src: "/assets/cockpit-processes.webp" },
  { label: "Process detail", src: "/assets/cockpit-process-detail.webp" },
  { label: "Instance detail", src: "/assets/cockpit-instance-detail.webp" },
];

export function Cockpit() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Built-in Cockpit</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Monitor processes, inspect running instances, and visualize BPMN flows — all from a built-in web UI. No extra tooling required.
          </p>
        </div>

        <div className="flex justify-center gap-1 mb-6">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                active === i
                  ? "bg-indigo-600 text-white"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <Image
          src={tabs[active].src}
          alt={`Cockpit — ${tabs[active].label}`}
          width={3248}
          height={1952}
          className="w-full h-auto"
          unoptimized
          priority={active === 0}
        />
      </div>
    </section>
  );
}
