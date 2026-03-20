import { useElementVisibility } from "../../../hooks/useElementVisibility";
import classes from "./ElementVisibilityExample.module.css";

export function ElementVisibilityExample() {
  const { ref, isVisible } = useElementVisibility();

 const currentClass = isVisible ? classes.visible : classes.unvisible;

  return (
    <div className={classes.container}>
      <div className={classes.toll} />
      <div className={currentClass} ref={ref}>
        <img src="/public/img/cat.webp" width="250" height="340" />
        <div>Cute cat</div>
      </div>
    </div>
  );
}
