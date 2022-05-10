const showData = (data) => (
  <>
<<<<<<< Updated upstream:.history/src/Elements/EvenOdd_20220331095243.jsx
    {data.map((car) => (
      <div className='pack-term' style={{ backgroundImage: 
        `url(${car.img})`
      }}>
=======
    {data.map((car, index) => (
      <div
        className='itemContainer'
        id='item1'
        key={index + 1}
        style={{ backgroundImage: `url(${car.img})` }}
      >
>>>>>>> Stashed changes:src/Elements/EvenOdd.jsx
        <div className='overlay'>
          <div className='itemDataContainer' key={car.id}>
            <img src={car.logo} alt='logo' />
            <div className='car-name-container'>
              <h3>{car.model}</h3>
            </div>
            <h4>{car.year}</h4>
            <h2>Max Speed is</h2>
            <h2 style={{ color: "var(--magenta)" }}>
              {car.speed}km/h
            </h2>
          </div>
        </div>
      </div>
    ))}
  </>
);
//hello world
export const EvenFile = (data) => <>{showData(data)}</>;

