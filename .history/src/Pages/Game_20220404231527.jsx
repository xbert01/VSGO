import React from "react";
import VersusBar from "../Elements/VersusBar";
import CarData from "../Elements/CarData";
import NewButtons from "../Elements/NewButtons";
import Screens from "./Screens";
import { useState } from "react";
import "./Game.css"

function Game() {
  return (
    <>
      <div className='game'>
        <Screens />
        <NewButtons />
        <VersusBar />
      </div>
    </>
  );
}

export default Game;

