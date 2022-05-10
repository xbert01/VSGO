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

  const getHighScore = JSON.parse(
    localStorage.getItem("highScore")
  )[0].score;

  return (
    <div className='game-scroller game-scroller--new'>
      <>{EvenFile(item1)}</>
      <>{EmptyFile(item2)}</>
      <>{EmptyFile(item3)}</>
    </div>
  );
}

export default Screens;

