import React from "react";
import Buttons from "../Elements/Buttons/Buttons";
import { EvenFile } from "../Elements/EvenOdd";
import VersusBar from "../Elements/VersusBar";
import Shuffle from "../Elements/Shuffle";
import CarData from "../Elements/CarData";
import { EmptyFile } from "../Elements/EmptyFile";
import Nav from "../Elements/Nav";
import { useState } from "react";
// import { getHighScore } from "../Elements/ScoreLogic/ScoreLogic"

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
  const highScore = JSON.parse(localStorage.getItem("highScore"));
  console.log(highScore);



  function goToGameOverPage() {
    // alert("You fucked up, boy");
    // console.log("You fucked up, boy");
    return window.location.href = "/gameover";
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
      <Nav score={counter} highScore={highScore} />
      <div className='carScreens'>
        {/* <Buttons a={isHigher()} /> */}
        <div className='carRandom'>{EvenFile(leftCar)}</div>
        <VersusBar />
        <div className='carRandom'>
          {EmptyFile(rightCar)}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          minHeight: "15vh",
          backgroundColor: "var(--blueDark)",
        }}
      >
        <div id="movies" className='button-bar'>
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
        {/* <Shuffle /> */}
      </div>
    </>
  );
}

export default Display;