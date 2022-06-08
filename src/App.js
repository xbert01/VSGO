import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Game from "./Pages/Game";
import GameOverPage from "./Pages/GameOverPage/GameOverPage";
import GameStartPage from "./Pages/GameStartPage/GameStartPage";
import Movies from "./Pages/Movies/Coins";
import Sandbox from "./Sandbox";
import Game2 from "./Pages/Game2";
import Game3 from "./Pages/Game3";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path='/'
          element={<GameStartPage />}
        ></Route>
        <Route path='/game' element={<Game />}></Route>
        <Route
          path='/cryptogame'
          element={<Game2 />}
        ></Route>
        <Route path='/soccer' element={<Game3 />}></Route>
        <Route
          path='/gameover'
          element={<GameOverPage />}
        ></Route>
        <Route path='/test' element={<Movies />}></Route>
        <Route
          path='/sandbox'
          element={<Sandbox />}
        ></Route>
      </Routes>
    </Router>
  );
};
//commit check
export default App;

