import "./NewButtons.css";
import CarData from "../Elements/CarData";
import { useState } from "react";

const NewButtons = ({}) => {
  function Next() {
    CarData.shift();
  }

  let item1 = CarData.slice(0, 1);
  let item2 = CarData.slice(1, 2);
  let item1Data = item1[0].speed;
  let item2Data = item2[0].speed;

  console.log(item1Data, item2Data);

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

  return (
    <div className='term-actions'>
      <button
        className='button button-higher'
        onClick={isHigher(item1Data, item2Data)}
      >
        Higher
      </button>
      <button
        className='button button-lower'
        onClick={isLower(item1Data, item2Data)}
      >
        Lower
      </button>
    </div>
  );
};

export default NewButtons;

