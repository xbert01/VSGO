const showData = (data) => (
  <>
    {data.map((item, index) => (
      <div
        className='itemContainer'
        id='item1'
        key={index + 1}
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className='overlay'>
          <div className='itemDataContainer'>
            <img src={item.image} alt='logo' />
            <div className='item-name-container'>
              <h3>{item.name}</h3>
            </div>
            <h2 style={{margin: "0.5em 0"}}>Market Cap Value is:</h2>
            <h2 style={{ color: "var(--magenta)", fontSize: "3em"}}>
              $ {item.market_cap.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </h2>
          </div>
        </div>
      </div>
    ))}
  </>
);

export const LeftTemplateCrypto = (data) => <>{showData(data)}</>;

