import VersusBar from "./VersusBar";
import SingleCarScreen from "./SingleCarScreen";

const CarScreens = () => {
  return (
        <div className="car-screens">
            <SingleCarScreen />
                <VersusBar />
            <SingleCarScreen />
        </div>
  );
};

export default CarScreens;