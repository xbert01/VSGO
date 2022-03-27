import CarData from "../Elements/CarData";

export function Shuffle() {
  const setShuffle = (r) => {
    for (let i = r.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = r[i];
      r[i] = r[j];
      r[j] = temp;
    }
    return r;
  };
  const Reshuffled = (r) => {
    return setShuffle(r);
  };
  Reshuffled(CarData);
};