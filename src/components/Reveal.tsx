"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** Delay before the reveal animation starts, in ms (useful for staggering). */
  delay?: number;
  /** Render as a different element (e.g. "section"). Defaults to "div". */
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}

/**
 * Fades and lifts its children into view the first time they enter the
 * viewport. Falls back to fully visible when IntersectionObserver is
 * unavailable, and the CSS honours `prefers-reduced-motion`.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref}
      className={`reveal ${isVisible ? "reveal-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Component>
  );
};
