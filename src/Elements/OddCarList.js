import Cars from "../json/Cars.json";

const CarListOdd = () => {
  const odd = Cars.filter(car => car.id % 2 !== 0);
  console.log(odd);
  return (
    <div className = "carRandom">
                    <img src= {odd.logo} />
                    <div className = "car-name-container" >
                    <h3>{odd.model}</h3>
                    <h3>{odd.type}</h3>
                    </div>
                    <h2>{odd.year}</h2>       
            </div>
  );
};
export default CarListOdd;

