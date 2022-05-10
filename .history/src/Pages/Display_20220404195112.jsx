import React from "react";
import axios from "axios";
import { EvenFile } from "../Elements/EvenOdd";
import VersusBar from "../Elements/VersusBar";
import CarData from "../Elements/CarData";
import { EmptyFile } from "../Elements/EmptyFile";
import Nav from "../Elements/Nav";
import { useState, useEffect } from "react";
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
    <div className='game-container'>
      <Nav score={counter} high={getHighScore} />
      <div className='game'>
        <div className="game-scroller game-scroller--new">
          {/* <VersusBar /> */}
          <>{EvenFile(item1)}</>
          <>{EmptyFile(item2)}</>
          <>{EmptyFile(item3)}</>
        </div>
        {/* <Buttons /> */}
      </div>

      {/* <div id='movies' className='button-bar'>
        <button
          onClick={() => isHigher(item1Data)}
          className='button button-higher'
          style={{ marginBottom: "0.5em" }}
        >
          Higher
        </button>
        <button
          onClick={() => isEven(item1Data, )}
          className='button button-even'
          style={{ marginBottom: "0.5em" }}
        >
          Even
        </button>
        <button
          onClick={() => isLower(item1Data, )}
          className='button button-lower'
          style={{ marginBottom: "0.5em" }}
        >
          Lower
        </button>
      </div> */}
    </div>
  );
}

export default Game;

