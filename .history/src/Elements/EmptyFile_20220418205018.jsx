import React, { useState } from "react";

const ShowEmptyFile = (data) => {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {data.map((car) => (
        <div
          style={{ backgroundImage: `url(${car.img})` }}
        >
          /
          <div
            className={
              isActive ? "answers wrong" : "answers right"
            }
          >
            <div className='overlay'>
              <div
                className='itemDataContainer'
                key={car.id}
              >
                <img src={car.logo} alt='logo' />
                <div className='car-name-container'>
                  <h3>{car.model}</h3>
                </div>
                <h4>{car.year}</h4>
                <h2>Max Speed is...</h2>
                <button onClick={handleToggle}>
                  Toggle className
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export const EmptyFile = (data) => (
  <>{ShowEmptyFile(data)}</>
);

