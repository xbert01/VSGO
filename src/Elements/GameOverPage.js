const GameOverPage = () => {
  return (
          <div className="gameOverContainer">
            <section className="gameOverContent">
                <div className="branding"></div>
                <div className="score"></div>
                <div className="button-wrapper">
                  <button>Play again</button>
                  <button>Change mode</button>
                </div>
            </section>
          </div>
  );
};

export default GameOverPage;