const ScoreLogic = () => {

  const getRecentScore = localStorage.getItem("recentScore");
  
  function noPoints () {
      if (getRecentScore == null) {
          localStorage.setItem("recentScore", 0);
        }
    }
    noPoints();
    
    const highScore = JSON.parse(localStorage.getItem("highScore")) || [];
    const score = { score: getRecentScore };
    highScore.push(score);
    highScore.sort((a, b) => b.score - a.score);
    highScore.splice(1);
    localStorage.setItem("highScore", JSON.stringify(highScore[0].score));
    const getHighScore = localStorage.getItem("highScore");
    
    return (
        <>
            <h1 id='finalScore'>{getRecentScore}</h1>
            <h1 id='finalScore'>{getHighScore}</h1>
        </>
    )
};
function resetScore() {
   localStorage.setItem("recentScore", 0);
   localStorage.setItem("highScore", 0);
}

export { resetScore}
export default ScoreLogic;


