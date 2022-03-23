import React from "react";
import Buttons from "../Elements/Buttons/Buttons";
import { EvenFile } from "../Elements/EvenOdd";
import VersusBar from "../Elements/VersusBar";
import CarData from "../Elements/CarData";
import { EmptyFile } from "../Elements/EmptyFile";
import Nav from "../Elements/Nav";
import { useState } from "react";

function Display() {
  function Next() {
    CarData.shift();
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

  const getHighScore = JSON.parse(
    localStorage.getItem("highScore")
  )[0].score;

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
        <>{EvenFile(leftCar)}</>
        <VersusBar />
        <>{EmptyFile(rightCar)}</>
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
