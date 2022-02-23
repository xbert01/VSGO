import React from "react";
import Buttons from "../Elements/Buttons/Buttons";
import { OddFile, EvenFile } from "../Elements/EvenOdd";
import VersusBar from "../Elements/VersusBar";
import Shuffle from "../Elements/Shuffle";
import CarData from "../Elements/CarData";
import { EmptyFile } from "../Elements/EmptyFile";

function Display() {
  //Left Container Default Cgifyars
  const [startLeft, setSkipLast] = React.useState(0); //Sets Min object index to be displayed in Left Container
  const [endLeft, setShowNext] = React.useState(1); //Sets Max object index to be displayed in Left Container

  //Right Container Default Cars
  const [startRight, setSkipLastRight] = React.useState(1); //Sets Min object index to be displayed in Right Container
  const [endRight, setShowNextRight] = React.useState(2); //Sets Max object index to be displayed in Right Container

  const showNextData = () => {
    //Function displays Next Object from an Array-Cars(Next Car)
    //Left Container Next Car
    setSkipLast(startLeft + 1);
    setShowNext(endLeft + 1);

    //Right Container Next Car
    setSkipLastRight(startRight + 1);
    setShowNextRight(endRight + 1);
  };
  let counter = 0;

  function goToGameOverPage() {
    // location.href = "https://www.youtube.com/watch?v=3_t4obUc51A&ab_channel=AcademyofIdeas";
  };

  function isEven() {
    if (EvenFile((CarData.slice(startLeft, endLeft))).id < (EmptyFile(CarData.price).id)) {
      ++counter;
      console.log(counter);
      showNextData();
    }
    else goToGameOverPage();
    return counter;
  }

  const setShuffle = (r) => {
    for (let i = r.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = r[i];
      r[i] = r[j];
      r[j] = temp;
    }
    return r;
  };

  console.log(setShuffle(CarData));

  function refreshPage() {
    window.location.reload();
  }

  return (
    <>
      <div className='carScreens'>
        <Buttons />
        <div className='carRandom'>
          {EvenFile(setShuffle(CarData).slice(startLeft, endLeft))}
        </div>
        <VersusBar />
        <div className='carRandom'>
          {EmptyFile(setShuffle(CarData).slice(startRight, endRight))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", minHeight: "15vh", backgroundColor: "var(--blueDark)" }}>
        <button
          className='button button-higher'
          onClick={() => showNextData()}
        >
          Next
        </button>

        <button
          className='button button-lower'
          onClick={() => refreshPage()}
        >
          Restart Game
        </button>
      </div>

      {/* <Shuffle /> */}
    </>
  );
}

export default Display;


