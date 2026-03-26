import classes from "./CSS.module.scss";
import { useEffect, useState } from "react";

export function CSS() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any[] | null>(null);

  useEffect(() => {
    if (isLoading) return;
    setIsLoading(true);

    (async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10`);

        if (!res.ok) {
          throw Error("Something wrong!");
        }

        const r = await res.json();

        setData(r);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className={classes.container}>
      {isLoading && <div>Loading ...</div>}
      {data && data?.map((el) => <img key={el.title}
      width="200" height="200" src={`https://picsum.photos/id/${el.id}/300/300`} alt={el.title}/>)}
    </div>
  );
}
