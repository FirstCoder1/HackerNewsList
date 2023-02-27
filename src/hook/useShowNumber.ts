import { useState, useEffect, useRef } from "react";

import { INITIAL_LOAD_NUMBER, LAZY_LOAD_NUMBER } from "../constants";

export const useShowNumber = (topList: number[]) => {
  const [showNumber, setShowNumber] = useState<number>(INITIAL_LOAD_NUMBER);

  const containerRef = useRef<HTMLTableElement>(null);
  const infiniteLoaderRef = useRef<HTMLTableRowElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    const infiniteLoader = infiniteLoaderRef.current;
    if (container && infiniteLoader) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry && entry.isIntersecting && topList.length > 10) {
            setShowNumber((preNumber) => preNumber + LAZY_LOAD_NUMBER);
          }
        },
        {
          root: containerRef.current,
          rootMargin: "0px",
          threshold: 1,
        }
      );
      observer.observe(infiniteLoader);

      return () => observer.disconnect();
    }
  }, [setShowNumber, topList]);
  return { showNumber, containerRef, infiniteLoaderRef };
};
