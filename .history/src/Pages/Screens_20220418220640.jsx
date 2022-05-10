import React from "react";
import CarData from "../Elements/CarData";
import { useState } from "react";
import { EmptyFile } from "../Elements/EmptyFile";
import { EvenFile } from "../Elements/EvenFile";

function Screens() {
  // console.log(Crypto)
  // Shuffle();
  // function Load() {
  // window.onload = Shuffle()
  // }
  // Load();



  let item1 = CarData.slice(0, 1);
  let item2 = CarData.slice(1, 2);
  let item3 = CarData.slice(2, 3);

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

