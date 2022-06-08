import "./Buttons.css";
import { Link } from "react-router-dom";

function resetScore() {
  localStorage.setItem("recentScore", 0);
}
function startAgain() {
  window.history.back();
}

const ButtonsGameOver = () => {
  return (
    <div className='button-wrapper'>
      <button
        style={{ margin: "2em 1em" }}
        className='button button-start'
        onClick={() => resetScore() & startAgain()}
      >
        Play again
      </button>
      <Link to='/'>
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

