import React from "react";
import Buttons from "../Elements/Buttons/Buttons";
import { OddFile, EvenFile } from "../Elements/EvenOdd";
import VersusBar from "../Elements/VersusBar";
import Shuffle from "../Elements/Shuffle";
import CarData from "../Elements/CarData";
import { EmptyFile } from "../Elements/EmptyFile";

function Display() {
  //Left Container Default Cars
  let [startLeft, setSkipLast] = React.useState(0); //Sets Min object index to be displayed in Left Container
  let [endLeft, setShowNext] = React.useState(1); //Sets Max object index to be displayed in Left Container
  //Right Container Default Cars
  let [startRight, setSkipLastRight] = React.useState(1); //Sets Min object index to be displayed in Right Container
  let [endRight, setShowNextRight] = React.useState(2); //Sets Max object index to be displayed in Right Container

  const BackToStart = () => {
    startLeft= (-1);
    endLeft = (0);
    startRight = (0);
    endRight = (1);
  }

  const showNextData = () => {
    //Function displays Next Object from an Array-Cars(Next Car)
    //Left Container Next Car
    setSkipLast(startLeft + 1);
    setShowNext(endLeft + 1);

    //Right Container Next Car
    setSkipLastRight(startRight + 1);
    setShowNextRight(endRight + 1);
  };

let rightValue = 2;
let leftValue = 2;
let counter = 0;
function goToGameOverPage() {
      // location.href = "https://www.youtube.com/watch?v=3_t4obUc51A&ab_channel=AcademyofIdeas";
  console.log("they are the same");
};

function Equal() {
      if (rightValue = leftValue) {
            ++counter;
            console.log(counter);
      }
      else goToGameOverPage();
      return counter;
}

  // Function shuffles order of the array
  const setShuffle = (r) => {
    for (let i = r.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = r[i];
      r[i] = r[j];
      r[j] = temp;
    }
    return r;
  };
  const Reshuffled = () => {
    setShuffle(CarData);
  };

  // Refreshing function restarts the game
  function refreshPage() {
    window.location.reload();
  }

  return (
    <>
      <div className='carScreens'>
        <Buttons />
        <div className='carRandom'>
          {EvenFile(CarData.slice(startLeft, endLeft))}
        </div>
        <VersusBar />
        <div className='carRandom'>
          {EmptyFile(CarData.slice(startRight, endRight))}
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
        <button className='button button-lower'  onClick={() => Reshuffled() & BackToStart()}>Restart Game</button>
        <button className='button button-higher' onClick={() => showNextData()}>Next</button>
        <button className='button button-even' onClick={() => Equal()}>Equal</button>
      </div>
    </>
  );
}

export default Display;
