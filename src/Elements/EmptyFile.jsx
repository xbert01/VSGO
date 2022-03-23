const showEmptyFile = (data) => (
  <>
    {data.map((car, index) => (
      <div className='carContainer' id="rightItem" key={index + 1} style={{ backgroundImage: 
        `url(${car.img})`
      }}>
        <div className='overlay'>
          <div className='carDataContainer' key={car.id}>
            <img src={car.logo} alt='car-logo' />
            <div className='car-name-container'>
              <h3>{car.model}</h3>
            </div>
            <h2>{car.year}</h2>
            <h1>Guess Max Speed</h1>
          </div>
        </div>
      </div>
    ))}
  </>
);

export const EmptyFile = (data) => (
  <>{showEmptyFile(data)}</>
);
