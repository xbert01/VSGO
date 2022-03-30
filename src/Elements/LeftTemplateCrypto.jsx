const showData = (data) => (
  <>
    {data.map((item, index) => (
      <div className='itemContainer' id="item1" key={index + 1} style={{ backgroundImage: 
        `url(${item.image})`
      }}>
        <div className='overlay'>
          <div className='itemDataContainer'>
            <img src={item.image} alt='logo' />
            <div className='item-name-container'>
              <h3>{item.name}</h3>
            </div>
            <h2>Market Cap:</h2>
            <h2 style={{ color:"var(--magenta)" }}>${JSON.stringify(item.market_cap).slice(0,3) + ',' + JSON.stringify(item.market_cap).slice(3,6) + ',' + JSON.stringify(item.market_cap).slice(6,9) + ',' + JSON.stringify(item.market_cap).slice(9,12)}</h2>
          </div>
        </div>
      </div>
    ))}
  </>
);

export const LeftTemplateCrypto = (data) => <>{showData(data)}</>;
