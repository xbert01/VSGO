import React from "react";
import Buttons from "../Elements/Buttons/Buttons";
import { OddFile, EvenFile } from "../Elements/EvenOdd";
import VersusBar from "../Elements/VersusBar";
import Shuffle from "../Elements/Shuffle";
import CarData from "../Elements/CarData";
import { EmptyFile } from "../Elements/EmptyFile";




function Display() {

  const setShuffle = (r) => {
    for (let i = r.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = r[i];
      r[i] = r[j];
      r[j] = temp;
    }
    return r;
  };
  const Reshuffled = (r) => {
    return setShuffle(r);
  };
  console.log(CarData);
  Reshuffled(CarData);
  
  
  
  let a = CarData[0];
  let b = CarData[2];
  let c = CarData.slice(0, 1);
  let d = CarData.slice(1, 2);
  
    console.log(a.year)
    console.log(b)
    console.log(c[0].year)
    console.log(d)
  

   function removeFirst() {
     CarData.shift();
     console.log(CarData)
  } 




  function goToGameOverPage() {
    console.log("they are not the same");
  }
  function Equal() {
    if ((c[0].year) === (d[1].year)) {
      ++counter;
      console.log(counter);
    } else goToGameOverPage();
    return counter;
  }

  return (
    <>
      <div className='carScreens'>
        <Buttons />
        <div className='carRandom'>
          {EvenFile(c)}
        </div>
        <VersusBar />
        <div className='carRandom'>
          {EmptyFile(d)}
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
          className='button button-higher'
          onClick={() => Reshuffled()}
        >
          Reshuffle
        </button>
        <button
          className='button button-even'
          onClick={() => Equal()}
        >
          Equal
        </button>
            <button
          className='button button-lower'
          onClick={() => removeFirst()}
        >
          Remove first
        </button>
      </div>
    </>
  );
}

export default Display;
