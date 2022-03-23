import Logo from "./Logo";
import ScoreDisplay from "../Elements/ScoreDisplay/ScoreDisplay";

const Nav = ({ score, high }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white",
        position: "absolute",
        zIndex: "2",
      }}
    >
      <ScoreDisplay text='Score:' score={score} />
      <ScoreDisplay text='Highscore:' score={high} />
    </div>
  );
};

export default Nav;
