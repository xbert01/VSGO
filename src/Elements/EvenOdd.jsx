
const showDate = (data, showNext) => (
  <>
    {data.map((car, index) => (
      <section className="carContainer" key={index + 1}>
        <div>
          <img className=" w-fit h-20" src={car.img} alt="background" />
          <div className="car-list-container" key={car.id}>
            <img src={car.logo} alt="car-logo" className="h-10" />
            <div className="car-name-container">
              <h3>{car.model}</h3>
              <h3>{car.type}</h3>
            </div>
            <h2>{car.year}</h2>
          </div>
        </div>
      </section>
    ))}
  </>
);

export const OddFile = (data) => <div>{showDate(data)}</div>;
export const EvenFIle = (data) => <div>{showDate(data)}</div>;

