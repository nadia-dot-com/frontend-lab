import { Outlet } from "react-router-dom";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import classes from './MainLoyout.module.css';

export function MainLoyout() {
  return (
    <div className={classes.layout}>
      <Header />
        <main>
      <Wrapper>
          <Outlet />
      </Wrapper>
        </main>

        <Footer />
    </div>
  );
}
