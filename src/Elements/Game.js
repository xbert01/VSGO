import Buttons from "./Buttons";
import CarScreens from "./CarScreens";
import GameOverPage from "./GameOverPage";
import GameStartPage from "./GameStartPage";

const Game = () => {
  return (
        <div style = {{margin: "0", padding: "0", width: "100%", height: "30rem"}} >
            <GameStartPage />
            <CarScreens />
            <Buttons />
            <GameOverPage />  
        </div>
  );
};

export default Game;