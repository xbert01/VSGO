import axios from "axios";
import React from "react";
import VersusBar from "../Elements/VersusBar";
import { LeftTemplatePlayer } from "../Elements/LeftTemplatePlayer";
import { RightTemplatePlayer } from "../Elements/RightTemplatePlayer";
import Nav from "../Elements/Nav";
import { useState, useEffect } from "react";
import { Reshuffled } from "../Elements/Shuffle";

function PlayersGame() {
  const [billionaires, setBillionaires] = useState([]);
  const [loader, setLoader] = useState(true);
  const [counter, setCount] = useState(0);

  const options = {
    method: "GET",
    url: "http://www.omdbapi.com/?apikey=[yourkey]&",
    params: { page: "0", size: "10" },
    headers: {
      "X-RapidAPI-Host":
        "http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=xml",
      "X-RapidAPI-Key":
        "a14ccfa0eemsh86262a6ea48721ep1dad42jsn78e9ee146a65",
    },
  };

  const fetchData = () => {
    axios
      .request(options)
      .then((response) => {
        if (
          response.status >= 200 &&
          response.status <= 299
        ) {
          setBillionaires(
            Reshuffled(response.data.personLists)
          );
          setLoader(false);
          console.log(response.data.personLists);
        }
      })
      .catch((error) => console.log(error));
  };

  console.log(billionaires);

  useEffect(() => {
    fetchData();
  }, []);

  function Next() {
    billionaires.shift();
  }

  if (loader) {
    return "...";
  }

  let item3 = billionaires.slice(0, 1);
  let item4 = billionaires.slice(1, 2);

  let item3Data = item3.map((item) => item.name);
  let item4Data = item4.map((item) => item.name);

  function count() {
    setCount(counter + 1);
    localStorage.setItem("recentScore", counter + 1);
  }
  function goToGameOverPage() {
    return (window.location.href = "/gameover");
  }

  function isHigher() {
    if (item3Data > item4Data) {
      count();
      Next();
    } else goToGameOverPage();
  }
  function isEven() {
    if (item3Data === item4Data) {
      count();
      Next();
    } else goToGameOverPage();
  }
  function isLower() {
    if (item3Data < item4Data) {
      count();
      Next();
    } else goToGameOverPage();
  }

  const getHighScore = JSON.parse(
    localStorage.getItem("highScore")
  )[0].score;

  return (
    <>
      <Nav score={counter} high={getHighScore} />
      <div className='carScreens'>
        <div>{LeftTemplatePlayer(item3)}</div>
        {/* <div className='hvr-pulse-grow'></div> */}
        <VersusBar />
        <div>{RightTemplatePlayer(item4)}</div>
        {/* <div className='hvr-pulse-grow'></div> */}
      </div>

      <div id='movies' className='button-bar'>
        <button
          onClick={() => isHigher()}
          className='button button-higher'
          style={{ marginBottom: "0.5em" }}
        >
          Higher
        </button>
        <button
          onClick={() => isEven()}
          className='button button-even'
          style={{ marginBottom: "0.5em" }}
        >
          Even
        </button>
        <button
          onClick={() => isLower()}
          className='button button-lower'
          style={{ marginBottom: "0.5em" }}
        >
          Lower
        </button>
      </div>
    </>
  );
}

export default PlayersGame;

