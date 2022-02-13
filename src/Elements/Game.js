import Buttons from "./Buttons";
import GameOverPage from "./GameOverPage";
import GameStartPage from "./GameStartPage";
import Display from "./Display";

const Game = () => {
  return (
    <div
      style={{
        margin: "0",
        padding: "0",
        width: "100%",
        height: "30rem",
      }}
    >
      <Display />
      <Buttons />
      <GameOverPage />
      <GameStartPage />
    </div>
  );
};

export default Game;
