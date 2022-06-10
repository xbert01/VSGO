import "./GameStartPage.css";
import CategoryBar from "../../Elements/CategoryBar/CategoryBar";
import noPoints from "../../Elements/ScoreLogic/ScoreLogic";
import Logo from "../../Elements/Logo/Logo";


const GameStartPage = () => {
  return (
    <div className='gameStartPage' onLoad={noPoints()}>
      <Logo />
      <h1>VS:GO</h1>
      <h3
        style={{ color: "var(--grey)", fontSize: "1.7em" }}
      >
        Pick category and start your challenge!
      </h3>
      <CategoryBar />

      {/* <Link to="/game">
        <button
          style={{}}
          className='button button-start'
          onClick={noPoints()}
        >
          Start Game
        </button>
        </Link> */}
    </div>
  );
};
export default GameStartPage;


