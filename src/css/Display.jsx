import React from "react";
import { CarData } from "./CarData";
import { OddFile, EvenFIle } from "./EvenOdd";
function Display() {
  const [next, setShowNext] = React.useState(1);
  const [skipLast, setSkipLast] = React.useState(0);

  const showNextData = () => {
    setShowNext(next + 1);
    setSkipLast(skipLast + 1);
  };

  const evenDaata = CarData.filter((car) => car.id % 2 === 0);
  const oddDaata = CarData.filter((car) => car % 2 !== 0);

  return (
    <div className="grid grid-cols-2">
      <div className="odd_Section">
        {OddFile(oddDaata.slice(skipLast, next))}
      </div>
      <div className="eeven_section">
        {EvenFIle(evenDaata.slice(skipLast, next))}
      </div>
      <button
        className="bg-mainColor text-white p-2"
        onClick={() => showNextData()}
      >
        Show next
      </button>
    </div>
  );
}

export default Display;