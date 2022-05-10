import React from "react";
import ScoreGame from "../../Elements/";

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

  return (
    <div style={{ display: "flex" }}>
      <ScoreGame
        text='Points:'
        score={getRecentScore}
        style={{ margin: "0 3em" }}
      />
      <ScoreGame
        text='Highscore:'
        score={getHighScore}
        style={{ margin: "0 3em" }}
      />
    </div>
  );
};

export default ScoreLogic;

const getRecentScore = localStorage.getItem("recentScore");
const getHighScore = localStorage.getItem("highScore");

function noPoints() {
  if (getRecentScore == null || undefined) {
    localStorage.setItem("recentScore", 0);
  }
  if (getHighScore == null || undefined) {
    localStorage.setItem("highScore", 0);
  }
}
noPoints();

export { noPoints, getRecentScore, getHighScore };

