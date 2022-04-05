import React from "react";
import VersusBar from "../Elements/VersusBar";
import NewButtons from "../Elements/NewButtons";
import Screens from "./Screens";
import "./Game.css"

function Game() {
  return (
      <div className='game'>
        <Screens />
        <NewButtons />
        <VersusBar />
      </div>
  );
}

export default Game;

