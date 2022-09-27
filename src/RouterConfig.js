import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Game } from "./page/Game";
import { NotFound } from "./page/NotFound";
import { Result } from "./page/Result";
import { Start } from "./page/Start";

function RouterConfig() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Start />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterConfig;
