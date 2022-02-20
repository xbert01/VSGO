import Logo from "../../Elements/Logo";
// import PrimaryButton from "../Elements/Button";
import { Link } from "react-router-dom";
import "./GameStartPage.css";
import CategoryBar from "../../Elements/CategoryBar/CategoryBar";


const GameStartPage = () => {
  return (
    <div className='gameStartPage'>
      <img src="https://res.cloudinary.com/efer/image/upload/v1645276420/CarCompare/Logo-white_x1p432.svg" alt="logo"></img>
      <h1>VS:GO</h1>
      <h3 style={{color: "var(--grey)", fontSize:"1.7em"}}>Pick category and start your challenge!</h3>
      {/* <Link to='/game'> */}
      {/* <PrimaryButton /> // Start Button */}
      <CategoryBar />
        <a href="/game">
            <button style={{}} className='button button-start'>
            Start Game
            </button>
        </a>
      {/* </Link> */}
    </div>
  );
};

export default GameStartPage;
