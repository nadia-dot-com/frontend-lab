import { useEffect, useRef, useState } from "react";
import classes from "./IntersectionObserverExample.module.scss";
import { AnimatePresence, motion } from "motion/react";

type PostProps = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const fetchPages = async (url: string): Promise<PostProps[]> => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};

export function IntersectionObserverExample() {
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<PostProps[]>([]);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [{ isIntersecting }] = entries;

        isIntersecting && setPage((prev) => prev + 1);
      },
      { rootMargin: "200px" },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!page) return;

    setIsLoading(true);

    (async () => {
      try {
        const res = await fetchPages(
          `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`,
        );
        setData((prev) => [...prev, ...res]);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);

  return (
    <>
      <div className={classes.container}>
        <AnimatePresence mode="popLayout">
          {data.map((element, index) => (
            <motion.div
              key={`${element.id}-${index}`}
              className={classes.element}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <img
                src={`https://picsum.photos/id/${element.id}/300/300`}
                loading="lazy"
              />
              <div>{element.title}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div ref={ref}></div>
      {isLoading && <div>Loading...</div>}
    </>
  );
}
