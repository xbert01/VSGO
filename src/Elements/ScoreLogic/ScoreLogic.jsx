import React from "react";
import ScoreDisplay from "../../Elements/ScoreDisplay/ScoreDisplay";

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

  const getHighScore = JSON.parse(
    localStorage.getItem("highScore")
  )[0].score;

  function noPoints() {
    if (getRecentScore == null) {
      localStorage.setItem("recentScore", 0);
    }
    if (getHighScore == null) {
      localStorage.setItem("highScore", 0);
    }
  }
  noPoints();

  return (
    <>
      <ScoreDisplay text='Points:' score={getRecentScore} />
      <ScoreDisplay
        text='Highscore:'
        score={getRecentScore}
      />
    </>
  );
};

// export {
//   resetScore,
//   noPoints,
//   getRecentScore,
//   getHighScore,
// };
export default ScoreLogic;
