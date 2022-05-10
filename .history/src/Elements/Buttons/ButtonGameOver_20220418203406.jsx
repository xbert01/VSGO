import "./Buttons.css";
import { Link } from "react-router-dom";

function resetScore() {
   localStorage.setItem("recentScore", 0);
}

const ButtonsGameOver = () => {
  return (
          <div className='button-wrapper'>
        <Link to="/game">
          <button
            style={{ margin: "2em 1em" }}
          className='button button-start'
          onClick={() => resetScore()}
          >
            Play again
          </button>
        </Link>
         <Link to="/">
          <button
            style={{ margin: "2em 1em" }}
          className='button button-start'
          onClick={() => resetScore()}
          >
            Change category
          </button>
        </Link>
      </div>
  );
};

export default ButtonsGameOver;