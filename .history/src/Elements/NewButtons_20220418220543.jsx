import "./NewButtons.css";
import CarData from "../Elements/CarData";
import { useState } from "react";

const NewButtons = ({}) => {
  return (
    <div className='term-actions'>
      <button className='game-button term-actions__button term-actions__button--higher'>
        Higher
      </button>
      <button className='game-button term-actions__button term-actions__button--lower'>
        Lower
      </button>
    </div>
  );
};

export default NewButtons;

