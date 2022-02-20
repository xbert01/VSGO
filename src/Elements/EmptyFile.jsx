const showEmptyFile = (data) => (
  <>
    {data.map((car, index) => (
      <div className='carContainer' key={index + 1}>
        <img
          className='demo-bg'
          src={car.img}
          alt='background'
        />
      </div>
    ))}
  </>
);

export const EmptyFile = (data) => (
  <>{showEmptyFile(data)}</>
);
