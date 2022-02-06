import Cars from "../json/Cars.json";

const OddCarList = () => {
  const odd = Cars.filter((car) => car.id % 2 !== 0);
  return odd.map((car) => {
    return (
      <section className="carContainer">
        <img
          className="demo-bg"
          src={car.img}
          alt="background-image"
        />
        <div className="car-list-container" key={car.id}>
          <img src={car.logo} alt="car-logo" />
          <div className="car-name-container">
            <h3>{car.model}</h3>
            <h3>{car.type}</h3>
          </div>
          <h2>{car.year}</h2>
        </div>
      </section>
    );
  });
};

export default OddCarList;
