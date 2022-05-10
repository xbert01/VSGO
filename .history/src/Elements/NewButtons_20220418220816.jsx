import "./NewButtons.css";
import CarData from "../Elements/CarData";
import { useState } from "react";

const NewButtons = ({}) => {
  function Next() {
    CarData.shift();
  }

  let item1 = CarData.slice(0, 1);
  let item2 = CarData.slice(1, 2);
  let item3 = CarData.slice(2, 3);

  let item1Data = item1[0].model;
  let item2Data = item2[0].model;
  let item3Data = item3[0].model;

  console.log(item1Data, item2Data, item3Data);

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
      <button className='button button-higher'>
        Higher
      </button>
      <button className='button term-actions__button term-actions__button--lower'>
        Lower
      </button>
    </div>
  );
};

export default NewButtons;

