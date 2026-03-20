import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { ROUTES } from "../../config/Routes";

export function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>LOGO</div>

      <nav>
        <ul className={classes.menu}>
          <li>
            <Link to={""}>Products</Link>
          </li>
          <li>
            <Link to={ROUTES.examples}>Examples</Link>
          </li>
          <li>
            <Link to={ROUTES.formExercise}>Form Exercise</Link>
          </li>
          <li>
            <Link to={ROUTES.animationExample}>Animations</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
