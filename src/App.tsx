import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "@/config/Routes";
import { FormExercise } from "@/pages/FormExercise/FormExercise";
import { AnimationExample } from "@/pages/Frame Motion/AnimationExample/AnimationExample";
import { Menu } from "@/components/Menu/Menu";
import { Suspense } from "react";
import { IntersectionObserverExample } from "@/pages/IntersectionObserverExample/IntersectionObserverExample";
import { ElementVisibilityExample } from "@/pages/ElementVisibilityExample/ElementVisibilityExample";
import { DebouceExample } from "@/pages/DebouceExample/DebouceExample";
import { ResizeObserverExample } from "@/pages/ResizeObserverExample/ResizeObserverExample";
import classes from "./App.module.scss";
import { CSS } from "./pages/CSS/CSS";
import { ScrollToTop } from "./components/ ScrollToTop/ ScrollToTop";

function App() {
  return (
    <BrowserRouter basename={ROUTES.basePath}>
      <div className={classes.container}>
        <Menu />

        <main className={classes.content}>
          <ScrollToTop />
          <Suspense>
            <Routes>
              <Route
                path={ROUTES.infinityScroll}
                element={<IntersectionObserverExample />}
              />
              <Route
                path={ROUTES.visibleElement}
                element={<ElementVisibilityExample />}
              />
              <Route path={ROUTES.formExercise} element={<FormExercise />} />
              <Route path={ROUTES.frameMotion} element={<AnimationExample />} />
              <Route path={ROUTES.debouce} element={<DebouceExample />} />
              <Route
                path={ROUTES.resizeObserverExersise}
                element={<ResizeObserverExample />}
              />
              <Route path={ROUTES.css} element={<CSS />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
