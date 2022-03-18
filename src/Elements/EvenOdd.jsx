const showData = (data) => (
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
            <h3>{car.type}</h3>
          </div>
          <h2>{car.year}</h2>
          <h2>${car.price}</h2>
        </div>
      </div>
    ))}
  </>
);

export const EvenFile = (data) => <>{showData(data)}</>;



