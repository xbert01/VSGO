
const Coin = ({name, price, rank, img}) => {
    return  <div> 
                <img src={img} />
        <h4 style={{ color: 'blue' }}>{name}</h4>
        <h3 style={{ color: 'blue' }}>Price: {price}</h3>
        <h3 style={{ color: 'blue' }}>market Cap Ranking: {rank}</h3>
            </div>
} 


export default Coin;