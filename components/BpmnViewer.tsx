"use client";

import { useEffect, useRef } from "react";
import Viewer from "bpmn-js/lib/Viewer";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";

export function BpmnViewer({ xml, height = 280 }: { xml: string; height?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const viewer = new Viewer({ container: containerRef.current });

    viewer
      .importXML(xml)
      .then(() => {
        requestAnimationFrame(() => {
          viewer.get<any>("canvas").zoom("fit-viewport", "auto");
        });
      })
      .catch(() => {});

    return () => viewer.destroy();
  }, [xml]);

  return (
    <div
      ref={containerRef}
      style={{ height, pointerEvents: "none" }}
      className="my-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white overflow-hidden"
    />
  );
}
