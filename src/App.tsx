import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./config/Routes";
import { MainLoyout } from "./loyouts/MainLoyout";
import { MainPage } from "./pages/MainPage/MainPage";
import { FormExercise } from "./pages/FormExercise/FormExercise";
import { Examples } from "./pages/Examples/Examples";
import { AnimationExample } from "./pages/Examples2/AnimationExample/AnimationExample";

function App() {
  return (
    <BrowserRouter basename={ROUTES.basePath}>
      <Routes>
        <Route path={ROUTES.mainLoyout} element={<MainLoyout />}>
          <Route path="" index element={<MainPage />} />
          <Route path={ROUTES.formExercise} element={<FormExercise />} />
          <Route path={ROUTES.examples} element={<Examples />} />
          <Route path={ROUTES.animationExample} element={<AnimationExample/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
