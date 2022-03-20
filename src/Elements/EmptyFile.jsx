const showEmptyFile = (data) => (
  <>
    {data.map((car, index) => (
      <div className='carContainer' key={index + 1}>
        <img
          className='demo-bg'
          src={car.img}
          alt='background'
        />
      <div className='car-list-container' key={car.id}>
          <img src={car.logo} alt='car-logo' />
          <div className='car-name-container'>
            <h3>{car.model}</h3>
          </div>
          <h2>{car.year}</h2>
          <h1>Guess Max Speed</h1>
        </div>
      </div>
    ))}
  </>
);

export const EmptyFile = (data) => (
  <>{showEmptyFile(data)}</>
);
