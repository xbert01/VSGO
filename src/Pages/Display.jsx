import React from "react";
import Buttons from "../Elements/Buttons";
import { OddFile, EvenFIle } from "../Elements/EvenOdd";
import VersusBar from "../Elements/VersusBar";

function Display() {
  //Left Container Default Cars
  const [startLeft, setSkipLast] = React.useState(0); //Sets Min object index to be displayed in Left Container
  const [endLeft, setShowNext] = React.useState(1); //Sets Max object index to be displayed in Left Container

  //Right Container Default Cars
  const [startRight, setSkipLastRight] = React.useState(1); //Sets Min object index to be displayed in Right Container
  const [endRight, setShowNextRight] = React.useState(2); //Sets Max object index to be displayed in Right Container


  const showNextData = () => { //Function displays Next Object from an Array-Cars(Next Car)
    //Left Container Next Car
    setSkipLast(startLeft + 1);
    setShowNext(endLeft + 1);

    //Right Container Next Car
    setSkipLastRight(startRight + 1);
    setShowNextRight(endRight + 1);
  };

  

  // const evenData = CarData.filter(
  //   (car) => car.id % 2 === 0
  // );

  // const oddData = CarData.filter((car) => car.id % 2 !== 0);

  return (
    <>
      <div className='carScreens'>
        <div className='carRandom'>
          {EvenFIle(CarData.slice(startLeft, endLeft))}
        </div>
        <VersusBar />
        <div className='carRandom'>
          {OddFile(CarData.slice(startRight, endRight))}
        </div>
      </div>
      <button
        className='button button-higher'
        onClick={() => showNextData()}
      >
        Next
      </button>
    </>
  );
}

const CarData = [
  {
    id: 0,
    img: "https://res.cloudinary.com/dnhgorvn3/image/upload/v1644074893/images/AMG-GT_wyrzfn.jpg",
    brand: "mercedes",
    logo: "https://res.cloudinary.com/dnhgorvn3/image/upload/v1644074901/images/mercedes_lgm4oo.png",
    model: "Mercedes-AMG GT",
    type: "Coupe",
    year: "2021",
    price: "$118.600",
  },
  {
    id: 1,
    img: "https://res.cloudinary.com/dnhgorvn3/image/upload/v1644074897/images/fiat-126p_eqqama.jpg",
    brand: "fiat",
    logo: "https://res.cloudinary.com/dnhgorvn3/image/upload/v1644074896/images/fiat_zixl0d.png",
    model: "Fiat 126p",
    type: "Bestia",
    year: "1973",
    price: "$4000",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dnhgorvn3/image/upload/v1644074893/images/Jaguar-F-Type_q7ziqx.jpg",
    brand: "jaguar1",
    logo: "https://res.cloudinary.com/dnhgorvn3/image/upload/v1644074893/images/jaguar_v3fl5l.png",
    model: "Jaguar F-TYPE",
    type: "Coupe",
    year: "11111",
    price: "$61.600",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dnhgorvn3/image/upload/v1644703910/images/tesla3_ybcqn5.png",
    brand: "Tesla",
    logo: "https://res.cloudinary.com/dnhgorvn3/image/upload/v1644704202/images/tesla_qwq64o.png",
    model: "Tesla Model-3",
    type: "Coupe",
    year: "2021",
    price: "$40.000",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dnhgorvn3/image/upload/v1644673630/images/Volkswagen-Passat-B6_rr8wvy.jpg",
    brand: "Volkswagen",
    logo: "https://res.cloudinary.com/dnhgorvn3/image/upload/v1644673258/images/kisspng-volkswagen-beetle-car-volkswagen-gol-volkswagen-18-istanbul-background-5b518d3c54b186.1451426715320712283469_i0zknu.jpg",
    model: "Passat B6",
    type: "Kombi",
    year: "2006",
    price: "$10.600",
  },
];

export default Display;
