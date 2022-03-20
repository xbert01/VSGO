import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./Pages/Game";
import GameOverPage from "./Pages/GameOverPage/GameOverPage";
import GameStartPage from "./Pages/GameStartPage/GameStartPage";
import Movies from "./Pages/Movies/Movies";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<GameStartPage />}></Route>
      </Routes>
      <Routes>
         <Route path="/game" element={<Game />}></Route>
      </Routes>
       <Routes>
         <Route path="/gameover" element={<GameOverPage />}></Route>
      </Routes>
        <Routes>
         <Route path="/test" element={<Movies />}></Route>
      </Routes>
    </Router>
  );
};

export default App;