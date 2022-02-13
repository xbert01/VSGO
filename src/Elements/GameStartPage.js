import Logo from "./Logo";
import Button from "./Button";

const GameStartPage = () => {
  return (
    <div className='gameStartPage'>
      <Logo />
      <h1></h1>
      <p></p>
      <span>Easy</span>
      <span>Hard</span>
      <Button /> // Start Button
    </div>
  );
};

export default GameStartPage;
