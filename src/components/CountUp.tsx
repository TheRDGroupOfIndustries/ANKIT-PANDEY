"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number | string;
  suffix?: string;
  duration?: number;
}

export default function CountUp({ end, suffix = "", duration = 2 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  const isNumber = typeof end === "number";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !isNumber) return;

    let start = 0;

    // Now TypeScript knows "end" is a number
    const numericEnd = end as number;
    const increment = numericEnd / (duration * 60); // SAFE

    const counter = setInterval(() => {
      start += increment;

      if (start >= numericEnd) {
        clearInterval(counter);
        start = numericEnd;
      }

      setCount(Math.floor(start));
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isVisible, end, duration, isNumber]);

  return (
    <span ref={ref}>
      {isNumber ? count : end}
      {suffix}
    </span>
  );
}
