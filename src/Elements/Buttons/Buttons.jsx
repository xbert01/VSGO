import "./Buttons.css";
// import CarData from "../Elements/CarData";

const Buttons = () => {
  return (
    <div className='button-bar'>
      <button
        onClick={() => isHigher()}
        className='button button-higher'
        style={{ marginBottom: "0.5em" }}
      >
        Higher
      </button>
      <button
        onClick={() => isEven()}
        className='button button-even'
        style={{ marginBottom: "0.5em" }}
      >
        Even
      </button>
      <button
        onClick={() => isLower()}
        className='button button-lower'
        style={{ marginBottom: "0.5em" }}
      >
        Lower
      </button>
    </div>
  );
};

export default Buttons;

let rightValue = 1;
let leftValue = 2;

let counter = 0;

function goToGameOverPage() {
  console.log("game over");
}

function isHigher() {
  if (rightValue > leftValue) {
    ++counter;
    console.log(counter);
  } else goToGameOverPage();
  return counter;
}

function isEven() {
  if (rightValue === leftValue) ++counter;
  else goToGameOverPage();
  return counter;
}

function isLower() {
  if (rightValue < leftValue) ++counter;
  else goToGameOverPage();
  return counter;
}

// document.getElementById("elo").onclick = over();
