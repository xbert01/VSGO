import React from "react";
import VersusBar from "../Elements/VersusBar";
import CarData from "../Elements/CarData";
import NewButtons from "../Elements/NewButtons";
import { useState } from "react";
import "./Game.css"

function Game() {
  function Next() {
    CarData.shift();
  }

  // console.log(Crypto)
  // Shuffle();
  // function Load() {
  // window.onload = Shuffle()
  // }
  // Load();

  let item1 = CarData.slice(0, 1);
  let item2 = CarData.slice(1, 2);
  let item3 = CarData.slice(2, 3);

  let item1Data = item1[0].speed;
  let item2Data = item2[0].speed;

  const [counter, setCount] = useState(0);
  function count() {
    setCount(counter + 1);
    localStorage.setItem("recentScore", counter + 1);
  }
  function goToGameOverPage() {
    return (window.location.href = "/gameover");
  }

  function isHigher(a, b) {
    if (a < b) {
      count();
      Next();
    } else goToGameOverPage();
  }
  function isEven(a, b) {
    if (a === b) {
      count();
      Next();
    } else goToGameOverPage();
  }
  function isLower(a, b) {
    if (a > b) {
      count();
      Next();
    } else goToGameOverPage();
  }

  const getHighScore = JSON.parse(
    localStorage.getItem("highScore")
  )[0].score;

  return (
    <>

    </>
  );
}

export default Game;

    



<div className="game-scroller game-scroller--new">
    <>{EvenFile(item1)}</>
<>{EmptyFile(item2)}</>
          <>{EmptyFile(item3)}</>
</div>