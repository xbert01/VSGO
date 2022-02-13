import React from "react";
import { OddFile, EvenFIle } from "./EvenOdd";
import VersusBar from "./VersusBar";

function Display() {
  const [skipLast, setSkipLast] = React.useState(0);
  const [next, setShowNext] = React.useState(1);

  const showNextData = () => {
    setShowNext(next + 1);
    setSkipLast(skipLast + 1);
  };

  const evenData = CarData.filter(
    (car) => car.id % 2 === 0
  );

  const oddData = CarData.filter((car) => car.id % 2 !== 0);

  return (
    <>
      <div className='carScreens'>
        <div className='carRandom'>
          {EvenFIle(evenData.slice(skipLast, next))}
        </div>
        <VersusBar />
        <div className='carRandom'>
          {OddFile(oddData.slice(skipLast, next))}
        </div>
      </div>
      <button
        style={{
          margin: "2em",
          padding: "2em",
          border: "10px solid black",
          cursor: "pointer",
        }}
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
    img: "https://res.cloudinary.com/dnhgorvn3/image/upload/v1644074893/images/Jaguar-F-Type_q7ziqx.jpg",
    brand: "jaguar2",
    logo: "https://res.cloudinary.com/dnhgorvn3/image/upload/v1644074893/images/jaguar_v3fl5l.png",
    model: "Jaguar F-TYPE",
    type: "Coupe",
    year: "22222",
    price: "$61.600",
  },
  ,
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
  {
    id: 5,
    img: "https://res.cloudinary.com/dnhgorvn3/image/upload/v1644074893/images/Jaguar-F-Type_q7ziqx.jpg",
    brand: "jaguar2",
    logo: "https://res.cloudinary.com/dnhgorvn3/image/upload/v1644074893/images/jaguar_v3fl5l.png",
    model: "Jaguar F-TYPE",
    type: "Coupe",
    year: "44444",
    price: "$61.600",
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/dnhgorvn3/image/upload/v1644074893/images/Jaguar-F-Type_q7ziqx.jpg",
    brand: "jaguar2",
    logo: "https://res.cloudinary.com/dnhgorvn3/image/upload/v1644074893/images/jaguar_v3fl5l.png",
    model: "Jaguar F-TYPE",
    type: "Coupe",
    year: "55555",
    price: "$61.600",
  },
];

export default Display;
