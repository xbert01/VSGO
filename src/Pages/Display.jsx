import React from "react";
import Buttons from "../Elements/Buttons/Buttons";
import { EvenFile } from "../Elements/EvenOdd";
import VersusBar from "../Elements/VersusBar";
import CarData from "../Elements/CarData";
import { EmptyFile } from "../Elements/EmptyFile";
import Nav from "../Elements/Nav";
import { useState } from "react";
import {  noPoints, getRecentScore, getHighScore} from "../Elements/ScoreLogic/ScoreLogic"

function Display() {
  function Next() {
    CarData.shift();
  }

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
  
  function isHigher() {
    if (item1Data < item2Data) {
      count();
      Next();
    } else goToGameOverPage();
  }
  function isEven() {
    if (item1Data == item2Data) {
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

  return (
    <>
      <Nav score={counter} high={getHighScore} />
      <div className='carScreens'>
        {/* <Buttons a={isHigher()} /> */}
        <>{EvenFile(item1)}</>
        <VersusBar />
        <>{EmptyFile(item2)}</>
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
