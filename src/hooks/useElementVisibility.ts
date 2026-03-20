import { useCallback, useEffect, useRef, useState } from "react";

export function useElementVisibility() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [{ isIntersecting }] = entries;

        if (isIntersecting) {
          setIsVisible(true);
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return {ref, isVisible};
}
