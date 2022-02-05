import Cars from "../json/Cars.json";

const EvenCarList = () => {
  const even = Cars.filter(car => car.id % 2 === 0);
  console.log(even);
  return (
    <div style = {{background: "url(even.img)", backgroundSize: "cover"}}
            className = "carRandom">
                    <img src= {even.logo} />
                    <div className = "car-name-container" >
                    <h3>{even.model}</h3>
                    <h3>{even.type}</h3>
                    </div>
                    <h2>{even.year}</h2>       
            </div>
  );
};
export default EvenCarList;


// const mapped = even.map(car => ({car}))
