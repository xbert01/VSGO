import React from "react";
import axios from 'axios';
import VersusBar from "../Elements/VersusBar";
import { LeftTemplateCrypto } from "../Elements/LeftTemplateCrypto";
import { RightTemplateCrypto } from "../Elements/RightTemplateCrypto";
import Nav from "../Elements/Nav";
import { useState, useEffect } from "react";

function CryptoGame() {
    
    // Shuffle();
    
    // function Load() {
        // window.onload = Shuffle()
        // }
        // Load();
        const [crypto, setCrypto] = useState([]);
        
        useEffect(() => {
            axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(response => {
                setCrypto(response.data)
            })
            .catch(error => console.log(error));
        }, [])
        
        function Next() {
          crypto.shift();
        }
        
        let item3 = crypto.slice(0, 1);
        let item4 = crypto.slice(1, 2);
        
        let item3Data = item3.map((item) =>(item.market_cap));
        let item4Data = item4.map((item) =>(item.market_cap));

  const [counter, setCount] = useState(0);
  function count() {
    setCount(counter + 1);
    localStorage.setItem("recentScore", counter + 1);
  }
  function goToGameOverPage() {
    return (window.location.href = "/gameover");
  }

  function isHigher() {
    if (item3Data < item4Data) {
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
    if (item3Data > item4Data) {
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
      <div className='carScreens' >
        <div>{LeftTemplateCrypto(item3)}</div>
        {/* <div className='hvr-pulse-grow'></div> */}
        <VersusBar />
        <div>{RightTemplateCrypto(item4)}</div>
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

export default CryptoGame;
