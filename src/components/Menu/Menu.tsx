import { Link } from "react-router-dom";
import { ROUTES } from "@/config/Routes";

export function Menu() {
  return (
    <nav className="flex flex-col items-center gap-main p-5 bg-primary h-full">
      <div className="font-medium text-xl border-b border-black">
        Frontend Laboratory
      </div>
      <ul className="flex flex-col p-0 gap-5 list-none overflow-y-auto">
        <li>
          <Link to={ROUTES.infinityScroll}>
            Infinite Scroll + Intersection Observer
          </Link>
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
        <li>
          <Link to={ROUTES.browserTheme}>Browser Theme</Link>
        </li>
        <li>
          <Link to={ROUTES.usersFiltering}>Users Filtering</Link>
        </li>
        <li>
          <Link to={ROUTES.cssAnimation}>CSSAnimation</Link>
        </li>
      </ul>
    </nav>
  );
}
