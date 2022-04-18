import React, { useState } from "react";

  const [isActive, setActive] = useState("false");
  
  const handleToggle = () => {
    setActive(!isActive);
  };
  
  const showEmptyFile = (data) => (
    
    <>
    {data.map((car) => (
      <div className='pack-term' style={{ backgroundImage: 
        `url(${car.img})`
      }}>/ 
      {/*<div className={isActive ? "answers" : "answers right"}> */}
      <div className='answers wrong'>
        <div className='overlay'>
          <div className='itemDataContainer' key={car.id}>
            <img src={car.logo} alt='logo' />
            <div className='car-name-container'>
              <h3>{car.model}</h3>
            </div>
            <h4>{car.year}</h4>
            <h2>Max Speed is...</h2>
           {/* <button onClick={handleToggle}>Toggle className</button>*/}
          </div>
          </div>
        </div>
      </div>
    ))}
  </>
);

export const EmptyFile = (data) => (
  <>{showEmptyFile(data)}</>
);
        
    
