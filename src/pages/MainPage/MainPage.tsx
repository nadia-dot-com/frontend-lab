import { CardInfo } from "../../components/CartInfo/CartInfo";
import { IntersectionObserverExample } from "./IntersectionObserverExample/IntersectionObserverExample";

import classes from "./MainPage.module.css";

export function MainPage() {
  return (
    <div className={classes.page}>
      <CardInfo />
      <IntersectionObserverExample />
    </div>
  );
}
