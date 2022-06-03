import React from "react";
import { EvenFile } from "../Elements/EvenOdd";
import VersusBar from "../Elements/VersusBar";
import CarData from "../Elements/CarData";
import { EmptyFile } from "../Elements/EmptyFile";
import Nav from "../Elements/Nav";
import { useState, useEffect } from "react";
import { Shuffle , Reshuffled } from "../Elements/Shuffle";

function Display() {
  
  const shuffleData = Shuffle(CarData);
  const shuffled = Reshuffled(CarData);
  
  function Next() {
    shuffled.shift();
  }

   console.log(shuffled)
  const item1 = shuffled.slice(0, 1);
  const item2 = shuffled.slice(1, 2);

  const item1Data = item1[0].speed;
  const item2Data = item2[0].speed;

  const [counter, setCount] = useState(0);
  function count() {
    setCount(counter + 1);
    localStorage.setItem("recentScore", counter + 1);
  }
  function goToGameOverPage() {
    return (window.location.href = "/gameover");
  }

  function isHigher() {
    if (item1Data < item2Data) {
      count();
      Next();
    } else goToGameOverPage();
  }
  function isEven() {
    if (item1Data === item2Data) {
      count();
      Next();
    } else goToGameOverPage();
  }
  function isLower() {
    if (item1Data > item2Data) {
      count();
      Next();
    } else goToGameOverPage();
  }

  const getHighScore = JSON.parse(
    localStorage.getItem("highScore")
  )[0].score;
  return (
    <>
      <Nav score={counter} high={getHighScore} />
      <div className='carScreens'>
        <div>{EvenFile(item1)}</div>
        {/* <div className='hvr-pulse-grow'></div> */}
        <VersusBar />
        <div>{EmptyFile(item2)}</div>
        {/* <div className='hvr-pulse-grow'></div> */}
      </div>

      <div id='movies' className='button-bar'>
        <button
          onClick={() => isHigher()}
          className='button button-higher'
          style={{ marginBottom: "0.5em" }}
        >
          Higher
        </button>
        <button
          onClick={() => isEven()}
          className='button button-even'
          style={{ marginBottom: "0.5em" }}
        >
          Even
        </button>
        <button
          onClick={() => isLower()}
          className='button button-lower'
          style={{ marginBottom: "0.5em" }}
        >
          Lower
        </button>
      </div>
    </>
  );
}

export default Display;












