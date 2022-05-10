import Logo from "./Logo";
import ScoreGame from "";

const ScoreBar = ({ score, high }) => {
  return (
    <div
      style={{
        Game: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white",
        position: "absolute",
        zIndex: "2",
        padding: "2em",
      }}
    >
      <ScoreGame text='Score:' score={score} />
      <ScoreGame text='Highscore:' score={high} />
    </div>
  );
};

export default ScoreBar;
