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



function Default() {

  const [show, setShow] = useState(2);

  return (
    <button onClick={() => setCount(count + 1)}>twoja stara</button>
  );
}

const data = [
  {
    name: "dd1",
  },
  {
    name: "dd2",
  },
  {
    name: "dd3",
  },
  {
    name: "dd4",
  },
  {
    name: "dd5",
  },
];

const showOnClick = () => {
  setShow(show + 1);
};
const HideOnClick = () => {
  setShow(show - 1);
};

const showData = data.slice(0, 1).map((c) => c.name);
console.log(data[3].name);