import React from "react";
import Buttons from "./Buttons/Buttons";
import CarData from "../Elements/CarData";

const Shuffle = () => {
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
  
  return (
    <>
      <button
        className='button button-higher'
        onClick={() => setShuffle(CarData)}
      >
        Refresh
      </button>
    </>
  );
};

export default Shuffle;
