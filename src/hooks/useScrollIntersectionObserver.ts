import { fetchPages } from "@/utility/fetchPages";
import {  useEffect, useRef, useState } from "react";

export function useIntersectionObserver(url: string) {
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect (() => {
    if (isLoading) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const [{ isIntersecting }] = entries;

          (isIntersecting && !isLoading) && setPage((prev) => prev + 1);
        },
        { rootMargin: "200px" },
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
  }, [isLoading])

  useEffect(() => {
    if (!page || isLoading) return;

    const controller = new AbortController();

    setIsLoading(true);

    (async () => {
      try {
        const res = await fetchPages(`${url}?_page=${page}&_limit=10`);
        setData((prev) => [...prev, ...res]);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => controller.abort();
  }, [page, url]);

  return { isLoading, data, elementRef };
}
