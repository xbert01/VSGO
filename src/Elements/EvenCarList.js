import React from "react";
import Cars from "../json/Cars.json";

const EvenCarList = () => {
  const [show, setShow] = React.useState(1)
  const even = Cars.filter((car) => car.id % 2 == 0);

  const showNext = () => {
    setShow(show+1)
  }
  return (
    <>
    {
      even.slice(0, show).map((car) => (
    <div className="carRandom">
        <section className="carContainer" >
          <img
            className="demo-bg"
            src={car.img}
            alt="background-image"
          />
          <div className="car-list-container" key={car.id}>
            <img src={car.logo} alt="car-logo" />
            <div className="car-name-container" >
              <h3>{car.model}</h3>
              <h3>{car.type}</h3>
            </div>
            <h2>{car.year}</h2>
          </div>
          </section>
          </div>
    
      ))
      }
      
      <button onClick={() => showNext} style={{ margin: "2em", padding: "2em", border: "10px solid black", cursor: "pointer" }}>{show}Show Next Even</button>
    </>
  )
};

export default EvenCarList;


