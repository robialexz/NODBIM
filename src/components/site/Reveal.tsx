import type { ReactNode } from "react";

/**
 * Keeps section content visible in the server-rendered HTML.
 * The wrapper remains for layout call sites while the site uses focus and hover
 * feedback instead of hiding important copy until a browser observer runs.
 */
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
