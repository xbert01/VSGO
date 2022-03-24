import "./Buttons.css";
import CarData from "../CarData";
import { useState } from "react";

const ButtonsGameOver = () => {
  return (
          <div className='button-wrapper'>
        <a href='/game'>
          <button
            style={{ margin: "2em 1em" }}
            className='button button-start'
          >
            Play again
          </button>
        </a>
        <a href='/'>
          <button
            style={{ margin: "2em 1em" }}
            className='button button-start'
          >
            Change category
          </button>
          {/* <Shuffle /> */}
        </a>
      </div>
  );
};

export default ButtonsGameOver;