import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    setIsLoading(true);
    setError(null);

    (async () => {
      try {
        const res = await fetch(url, { signal: controller.signal });

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const newData = await res.json();

        if (isMounted) {
          setData(newData);
        }
      } catch (e: unknown) {
        if (e instanceof Error) {
          if (e.name === "AbortError") return;
          if (isMounted) setError(e);
        }
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => controller.abort();
  }, [url]);

  return { isLoading, data, error };
}
