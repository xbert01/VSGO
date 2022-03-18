import "./GameOverPage.css";
import ScoreDisplay from "../../Elements/ScoreDisplay/ScoreDisplay";
import RandomMessage from "../../Elements/RandomMessage/RandomMessage";

const GameOverPage = () => {
  return (
    <div className="gameOverPage">
        <div className="branding">
            <img src="https://res.cloudinary.com/efer/image/upload/v1645276420/CarCompare/Logo-white_x1p432.svg" alt="logo"></img>
        </div>
        <div style={{margin:"2em 0"}}>
          <RandomMessage />
      </div>
      <div style={{margin:"1em 0 4em 0"}}>
          <ScoreDisplay />
      </div>
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