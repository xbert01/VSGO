import React from "react";
import CarData from "../Elements/CarData";
import { useState } from "react";
import { EmptyFile } from "../Elements/EmptyFile";
import { EvenFile } from "../Elements/EvenFile";

function Screens() {
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
  let item3Data = item3[0].speed;

  console.log(item1Data, item2, item3);

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
    <div className='game-scroller game-scroller--new'>
      <div className='pack-term'>{EvenFile(item1)}</div>
      <div className='pack-term'>{EmptyFile(item2)}</div>
      <div className='pack-term'>{EmptyFile(item3)}</div>
    </div>
  );
}

export default Screens;

