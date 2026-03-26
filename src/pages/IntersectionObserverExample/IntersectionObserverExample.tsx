import classes from "./IntersectionObserverExample.module.scss";
import { AnimatePresence, motion } from "motion/react";
import { useIntersectionObserver } from "@/hooks/useScrollIntersectionObserver";

const url = `https://jsonplaceholder.typicode.com/photos`;

export function IntersectionObserverExample() {
  const { isLoading, data, elementRef } = useIntersectionObserver(url);

  return (
    <>
      <div className={classes.container}>
        <AnimatePresence mode="popLayout">
          {data.map((element, index) => {
            const isFeatured = index % 7 === 0;
            
            return (
            <motion.div
              aria-label={element.id === 5 ? "aria-5" : ""}
              key={`${element.id}-${index}`}
              className={`${classes.element} ${isFeatured ? classes.featured:  ""}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <img
                src={`https://picsum.photos/id/${element.id}/250/250`}
                loading="lazy"
              />
              <div>{element.title}</div>
            </motion.div>
          )})}
        </AnimatePresence>
      </div>
      <div style={{ height: "50px", width: "100%" }} ref={elementRef}></div>
      {isLoading && <div>Loading...</div>}
    </>
  );
}
