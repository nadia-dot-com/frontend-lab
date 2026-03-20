import { useEffect, useState, type RefObject } from "react";

export function useResize(ref: RefObject<HTMLElement | null>) {
  const [dimensions, setDimensios] = useState({width: 0, height: 0});

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      entries.forEach((date) => {
        setDimensios({width: date.contentRect.width, height:date.contentRect.height});
      });
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);
  return  dimensions 
}
