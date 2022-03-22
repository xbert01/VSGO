const ScoreLogic = () => {
  const getRecentScore =
    localStorage.getItem("recentScore");

  const highScore =
    JSON.parse(localStorage.getItem("highScore")) || [];
  const score = { score: getRecentScore };
  highScore.push(score);
  highScore.sort((a, b) => b.score - a.score);
  highScore.splice(1);
  localStorage.setItem(
    "highScore",
    JSON.stringify(highScore)
  );
  const getHighScore = localStorage
    .getItem("highScore")
    .replace(/\D/g, "");

  return (
    <>
      <h1 id='finalScore'>{getRecentScore}</h1>
      <h1 id='finalScore'>{getHighScore}</h1>
    </>
  );
};
function resetScore() {
  localStorage.setItem("recentScore", 0);
}

const getRecentScore = localStorage.getItem("recentScore");

const getHighScore = localStorage.getItem("highScore");
//   .replace(/\D/g, "");

function noPoints() {
  if (getRecentScore == null) {
    localStorage.setItem("recentScore", 0);
  }
  if (getHighScore == null) {
    localStorage.setItem("highScore", 0);
  }
}
noPoints();

export {
  resetScore,
  noPoints,
  getRecentScore,
  getHighScore,
};
export default ScoreLogic;
