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
import { ScrollToTop } from "./components/ ScrollToTop/ ScrollToTop";
import { BrowserTheme } from "./pages/BrowserTheme/BrowserTheme";
import { UsersFilteringPage } from "./pages/UsersFilteringPage/UsersFilteringPage";
import { CSSAnimation } from "./pages/CSSAnimation/CSSAnimation";

function App() {
  return (
    <BrowserRouter basename={ROUTES.basePath}>
      <div className="flex inset-0 absolute">
        <Menu />

        <main className="flex-1 relative overflow-auto m-5 ">
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
              <Route path={ROUTES.browserTheme} element={<BrowserTheme />} />
              <Route
                path={ROUTES.usersFiltering}
                element={<UsersFilteringPage />}
              />
              <Route path={ROUTES.cssAnimation} element={<CSSAnimation/>}/>
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
