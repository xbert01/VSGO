const GameContainer = ({ }) => {
  return (
    <div className='game-container'>
        <ScoreBar />
        <Game />  
    </div>
  );
};

export default GameContainer;   


<div class="term-actions">
          <button class="game-button term-actions__button term-actions__button--higher">Higher</button>
          <button class="game-button term-actions__button term-actions__button--lower">Lower</button>
        </div>