import Game from './Game';
import ScoreBar from './Elements/ScoreBar';


const GameContainer = ({ }) => {
  return (
    <div>
        <ScoreBar />
        <Game />  
    </div>
  );
};

export default GameContainer;
