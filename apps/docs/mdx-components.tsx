import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";
import { BpmnViewer } from "./components/BpmnViewer";

const themeComponents = getThemeComponents();

export function useMDXComponents(components: Record<string, React.ComponentType>) {
  return {
    ...themeComponents,
    BpmnViewer,
    ...components,
  };
}
