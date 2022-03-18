import "./Buttons.css";
// import CarData from "../Elements/CarData";

const Buttons = (a, b, c) => {
  return (
    <div className='button-bar'>
      <button
        onClick={() => a}
        className='button button-higher'
        style={{ marginBottom: "0.5em" }}
      >
        Higher
      </button>
      <button
        onClick={() => b}
        className='button button-even'
        style={{ marginBottom: "0.5em" }}
      >
        Even
      </button>
      <button
        onClick={() => c}
        className='button button-lower'
        style={{ marginBottom: "0.5em" }}
      >
        Lower
      </button>
    </div>
  );
};

export default Buttons;