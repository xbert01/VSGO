const GameContainer = ({ }) => {
  return (
    <div className='game-container'>
        <ScoreBar />
        <Game />  
    </div>
  );
};

export default GameContainer;   


<div className="term-actions">
          <button className="game-button term-actions__button term-actions__button--higher">Higher</button>
          <button className="game-button term-actions__button term-actions__button--lower">Lower</button>
        </div>