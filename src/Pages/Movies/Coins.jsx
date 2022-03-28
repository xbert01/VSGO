import { useState, useEffect } from "react";
import axios from 'axios';
import { movieData } from "./MovieData"
import Coin from "./Coin"


const Crypto = () => {   
    const [crypto, setCrypto] = useState([]);
    
        useEffect(() => {
            axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
                .then(response => {
                    setCrypto(response.data)
                })
                .catch(error => console.log(error));
        }, [])
    
    console.log(crypto)

    
    return (
        <div style={{display:"grid", gridTemplateColumns:" 1fr 1fr 1fr 1fr",gap:"1em", marginTop: "2em"}}>
        {crypto.map((item) =>(
            <Coin img={item.image} name={item.name} price={item.current_price} rank={item.market_cap_rank}/>
                       ))}
                    </div>
    )
    
}

export default Crypto;