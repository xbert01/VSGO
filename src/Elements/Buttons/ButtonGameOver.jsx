import "./Buttons.css";

function resetScore() {
   localStorage.setItem("recentScore", 0);
}

const ButtonsGameOver = () => {
  return (
          <div className='button-wrapper'>
        <a href='/game'>
          <button
            style={{ margin: "2em 1em" }}
          className='button button-start'
          onClick={() => resetScore()}
          >
            Play again
          </button>
        </a>
        <a href='/'>
          <button
            style={{ margin: "2em 1em" }}
          className='button button-start'
          onClick={() => resetScore()}
          >
            Change category
          </button>
          {/* <Shuffle /> */}
        </a>
      </div>
  );
};

export default ButtonsGameOver;