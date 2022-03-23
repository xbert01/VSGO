import React from "react";
import Buttons from "../Elements/Buttons/Buttons";
import { EvenFile } from "../Elements/EvenOdd";
import VersusBar from "../Elements/VersusBar";
import Shuffle from "../Elements/Shuffle";
import CarData from "../Elements/CarData";
import { EmptyFile } from "../Elements/EmptyFile";
import Nav from "../Elements/Nav";
import { useState } from "react";
import { noPoints } from "../Elements/ScoreLogic/ScoreLogic";
import { getHighScore } from "../Elements/ScoreLogic/ScoreLogic";

function Display() {
  noPoints();
  function Next() {
    CarData.shift();
    console.log(CarData)
  }

  let leftCar = CarData.slice(0, 1);
  let rightCar = CarData.slice(1, 2);

  let leftCarData = leftCar[0].speed;
  let rightCarData = rightCar[0].speed;

  const [counter, setCount] = useState(0);
  function count() {
    setCount(counter + 1);
    localStorage.setItem("recentScore", counter + 1);
  }

  function goToGameOverPage() {
    // alert("You fucked up, boy");
    // console.log("You fucked up, boy");
    return (window.location.href = "/gameover");
  }
  function isHigher() {
    if (leftCarData < rightCarData) {
      count();
      Next();
    } else goToGameOverPage();
  }
  function isEven() {
    if (leftCarData == rightCarData) {
      count();
      Next();
    } else goToGameOverPage();
  }
  function isLower() {
    if (leftCarData > rightCarData) {
      count();
      Next();
    } else goToGameOverPage();
  }

  return (
    <>
      <Nav score={counter} high={getHighScore} />
      <div className='carScreens'>
        {/* <Buttons a={isHigher()} /> */}
        <div>{EvenFile(leftCar)}</div>
        <VersusBar />
        <div>
          {EmptyFile(rightCar)}
        </div>
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
