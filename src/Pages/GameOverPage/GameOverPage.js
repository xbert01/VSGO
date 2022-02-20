import "./GameOverPage.css";
import ScoreDisplay from "../../Elements/ScoreDisplay/ScoreDisplay";
import RandomMessage from "../../Elements/RandomMessage/RandomMessage";

const GameOverPage = () => {
  return (
    <div className="gameOverPage">
        <div className="branding">
          <img src="https://res.cloudinary.com/efer/image/upload/v1645276420/CarCompare/Logo-white_x1p432.svg" alt="logo"></img>
      </div>
        <RandomMessage />
        <ScoreDisplay />
        <div className="button-wrapper">
              <a href="/game">
                  <button style={{margin:"0 1em"}} className='button button-start'>
                    Play again
                  </button>
              </a>
              <a href="/">
                  <button style={{margin:"0 1em"}} className='button button-start'>
                    Change category
                  </button>
              </a>
        </div>
    </div>
  );
};

export default GameOverPage;