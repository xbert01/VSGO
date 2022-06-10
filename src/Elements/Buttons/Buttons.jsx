import "./Buttons.css";
import {
  isHigher,
  isEven,
  isLower,
} from "../../Elements/Functions/ButtonsLogic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown, faEquals } from "@fortawesome/free-solid-svg-icons";


const Buttons = (item1Data, item2Data, mainData) => {
  const arrowUp = (
    <FontAwesomeIcon icon={faCaretUp}/>
  );
  const arrowDown = <FontAwesomeIcon icon={faCaretDown} />;
  const equals = <FontAwesomeIcon icon={faEquals} />;
// function change() {
//   var d = document.getElementsByClassName("button");
//   d[0].className += "fa-xl";
// }
// function changeBack() {
//   var d = document.getElementsByClassName("button");
//   d[0].className = "button";
// }


  console.log(item1Data, item2Data, mainData)
  return (
    <div id='buttons' className='button-bar'>
      <button
        onClick={() =>
          isHigher(item1Data, item2Data, mainData)
        }
        className='button button-higher'
        style={{ marginBottom: "0.5em" }}
      >
        Higher {arrowUp}
      </button>
      <button
        onClick={() =>
          isEven(item1Data, item2Data, mainData)
        }
        className='button button-even'
        style={{ marginBottom: "0.5em" }}
      >
        Even {equals}
      </button>
      <button
        onClick={() =>
          isLower(item1Data, item2Data, mainData)
        }
        className='button button-lower'
        style={{ marginBottom: "0.5em" }}
      >
        Lower {arrowDown}
      </button>
    </div>
  );
};

export default Buttons;






















