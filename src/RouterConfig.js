import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import { Game } from './page/Game';
import { NotFound } from "./page/NotFound";
import { Start } from './page/Start';

function RouterConfig() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Start />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/NotFound" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterConfig;