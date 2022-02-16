import Logo from "../Elements/Logo";
// import PrimaryButton from "../Elements/Button";
import { Link } from "react-router-dom";


const GameStartPage = () => {
  return (
    <div className='gameStartPage'>
      <Logo />
      <h1>VS:GO</h1>
      <p></p>
      <span>Easy</span>
      <span>Hard</span>
      <Link to="/game">
        {/* <PrimaryButton /> // Start Button  */}
      </Link>
    </div>
  );
};

export default GameStartPage;