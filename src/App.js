import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./Pages/Game";
import GameOverPage from "./Pages/GameOverPage";
import GameStartPage from "./Pages/GameStartPage";

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
    </Router>
  );
};

export default App;