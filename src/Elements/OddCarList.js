import React from "react";
import Cars from "../json/Cars.json";

const OddCarList = () => {
  const [show, setShow] = React.useState(1);
  const odd = Cars.filter((car) => car.id % 2 !== 0);

  const showNext = () => {
    setShow(show + 1);
  };

  console.log(show);
  return (
    <>
      {odd.slice(0, show).map((car) => (
        <section className='carContainer'>
          <img
            className='demo-bg'
            src={car.img}
            alt='background-image'
          />
          <div className='car-list-container' key={car.id}>
            <img src={car.logo} alt='car-logo' />
            <div className='car-name-container'>
              <h3>{car.model}</h3>
              <h3>{car.type}</h3>
            </div>
            <h2>{car.year}</h2>
          </div>
          <button
            onClick={showNext}
            style={{
              margin: "2em",
              padding: "2em",
              border: "10px solid black",
              cursor: "pointer",
            }}
          ></button>
        </section>
      ))}
    </>
  );
};
export default OddCarList;
