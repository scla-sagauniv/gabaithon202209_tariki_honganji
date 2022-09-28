import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Game } from "./page/Game";
import { NotFound } from "./page/NotFound";
import { Register } from "./page/Register";
import { Login } from "./page/Login";
import { Result } from "./page/Result";
import { Start } from "./page/Start";
import { Quiz } from "./page/Quiz";

function RouterConfig() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Start />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default RouterConfig;
