
const Coin = ({name, price, marketcap, img}) => {
    return  <div> 
                <img src={img} />
        <h4 style={{ color: 'blue' }}>{name}</h4>
        <h4 style={{ color: 'blue' }}>Price: {price}</h4>
        <p style={{ color: 'blue' }}>Market Cap: ${marketcap}</p>
            </div>
} 


export default Coin;