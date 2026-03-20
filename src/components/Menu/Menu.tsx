import { Link } from "react-router-dom";
import { ROUTES } from "../../config/Routes";
import classes from "./Menu.module.css";

export function Menu() {
  return (
    <nav className={classes.nav}>
      <div className={classes.title}>Frontend Laboratory</div>
      <ul className={classes.menu}>
        <li>
          <Link to={ROUTES.infinityScroll}>Infinite Scroll + Intersection Observer</Link>
        </li>
        <li>
          <Link to={ROUTES.visibleElement}>
            Visible Element (Intersection Observer)
          </Link>
        </li>
        <li>
          <Link to={ROUTES.formExercise}>Form with Custom Hook</Link>
        </li>
        <li>
          <Link to={ROUTES.frameMotion}>Frame Mation</Link>
        </li>
        <li>
          <Link to={ROUTES.debouce}>Debouce</Link>
        </li>
        <li>
          <Link to={ROUTES.resizeObserver}>Resize Observer </Link>
        </li>
      </ul>
    </nav>
  );
}
