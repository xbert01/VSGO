import Logo from "./Logo";
import ScoreDisplay from "../Elements/ScoreDisplay/ScoreDisplay";

const Nav = ({ score, high }) => {

  const replacedHigh = high || '';
  
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white",
        position: "absolute",
        zIndex: "2",
        padding: "2em",
      }}
    >
      <ScoreDisplay text='Score:' score={score} />
      <ScoreDisplay text='Highscore:' score={replacedHigh.replace(/[^0-9]/g,'')} />
    </div>
  );
};

export default Nav;
