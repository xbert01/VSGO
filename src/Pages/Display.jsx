import React from "react";
import Buttons from "../Elements/Buttons/Buttons";
import {EvenFile } from "../Elements/EvenOdd";
import VersusBar from "../Elements/VersusBar";
import Shuffle from "../Elements/Shuffle";
import CarData from "../Elements/CarData";
import { EmptyFile } from "../Elements/EmptyFile";
import Nav from "../Elements/Nav";
import {useState } from 'react'




function Display() {
  
  function Next() {
    CarData.shift();
  } 

  let leftCar = CarData.slice(0, 1);
  let rightCar = CarData.slice(1, 2);
    
  let leftCarData = leftCar[0].price;
  let rightCarData = rightCar[0].price;


  const [counter, setCount] = useState(0)
  function count() {
  setCount(counter + 1)
}

  function goToGameOverPage() {
    // alert("You fucked up, boy");
    console.log("You fucked up, boy");
    // window.location.href = "/gameover";
  }
  function isHigher() {
    if ((leftCarData) < (rightCarData)) {
      count();
      Next();
    } else goToGameOverPage();
  }
  function isEven() {
    if ((leftCarData) == (rightCarData)) {
      count();
      Next();
    } else goToGameOverPage();
  }
 function isLower() {
    if ((leftCarData) > (rightCarData)) {
      count();
      Next();
    } else goToGameOverPage();
  }

  return (
    <>
      <Nav score={counter}/>
      <div className='carScreens'>
        <Buttons />
        <div className='carRandom'>
          {EvenFile(leftCar)}
        </div>
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

        <button
          className='button button-lower'
          onClick={() => isLower()}
        >
          Lower
        </button>
        <button
          className='button button-even'
          onClick={() => isEven()}
        >
          Even
        </button>
        <button
          className='button button-higher'
          onClick={() => isHigher()}
        >
          Higher
        </button>

      {/* <Shuffle /> */}


      </div>
    </>
  );
}

export default Display;
