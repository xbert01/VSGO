import VersusBar from "./VersusBar";
import LeftCarScreen from "./LeftCarScreen";
import RightCarScreen from "./RightCarScreen";

const CarScreens = () => {
  return (
    <div className="carScreens">
      <LeftCarScreen />
      <VersusBar />
      <RightCarScreen />

      <Display />
    </div>
  );
};

export default CarScreens;





