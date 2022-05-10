import ScoreBar from "../Elements/ScoreBar";
import Game from "./Game";

const GameContainer = ({}) => {
  return (
    <div className='game-container'>
      <ScoreBar />
      <Game />
    </div>
  );
};

export default GameContainer;

