import Logo from "./Logo";
import { Link } from "react-router-dom";
import ScoreLogic from "./ScoreLogic/ScoreLogic";
// import {Score} from "../Elements/Buttons/Buttons";
import { noPoints } from "../Elements/ScoreLogic/ScoreLogic";

const Nav = ({ score, high }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "var(--blueDark)",
          color: "white",
          padding: "1em",
        }}
      >
        <Link to='/'>
          <Logo />
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "var(--blueDark)",
          color: "white",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <p style={{ padding: "1rem" }}>POINTS:</p>
          <p
            style={{
              padding: "1rem 0",
              color: "var(--magenta)",
            }}
          >
            {score}
          </p>
        </div>

        <div
          style={{
            width: "50%",
            height: "100%",
            marginRight: "2rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <p style={{ padding: "1rem" }}>HIGHSCORE:</p>
          <p
            style={{
              padding: "1rem 0",
              color: "var(--magenta)",
            }}
          >
            {high}
          </p>
        </div>
      </div>
    </>
  );
};

export default Nav;
