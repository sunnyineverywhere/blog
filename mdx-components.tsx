import type { MDXComponents } from "mdx/types";
import HomePage from "./app/components/home-page";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    HomePage,
  };
}
