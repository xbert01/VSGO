import React from "react";
import { EvenFile } from "../../Elements/ScreenTemplates/LeftTemplateCars";
import VersusBar from "../../Elements/VersusBar/VersusBar";
import CarData from "../../Elements/Data/CarData";
import { EmptyFile } from "../../Elements/ScreenTemplates/RightTemplateCars";
import Nav from "../../Elements/Navbar/Nav";
import { useState, useEffect } from "react";
import { Reshuffled } from "../../Elements/Functions/Shuffle";
import Buttons from "../../Elements/Buttons/Buttons";

function CarsGame() {
  const [newData, setNewData] = useState([]);
  const shuffled = Reshuffled(CarData);

  useEffect(() => {
    setNewData(shuffled.map((x) => x));
  }, []);

  // function Next() {
  //   newData.shift();
  // }

  const item1 = newData.slice(0, 1);
  const item2 = newData.slice(1, 2);

  const item1Data = item1[0]?.speed;
  const item2Data = item2[0]?.speed;

  const [counter, setCount] = useState(0);
  function count() {
    setCount(counter + 1);
    localStorage.setItem("recentScore", counter + 1);
  }


  const getHighScore = JSON.parse(
    localStorage.getItem("highScore")
  )[0].score;

  return (
    <>
      <Nav score={counter} high={getHighScore} />
      <div className='carScreens'>
        <div>{EvenFile(item1)}</div>
        {/* <div className='hvr-pulse-grow'></div> */}
        <VersusBar />
        <div>{EmptyFile(item2)}</div>
        {/* <div className='hvr-pulse-grow'></div> */}
      </div>
      <Buttons data1={item1Data} data2={item2Data} mainData={newData} />
    </>
  );
}

export default CarsGame;
