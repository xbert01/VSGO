const Nav = () => {
  return (
    <div style = {{display: "flex", justifyContent: "space-between", backgroundColor: "var(--blue - dark)", color: "white"}} >
      <div style = {{width: "10%", height: "100%",}} >
        <p style={{padding: "1rem"}}>POINTS:</p>
        <div></div>
      </div>
      <div style = {{width: "10%", height: "100%", marginRight: "2rem"}}>
        <p style={{padding: "1rem"}}>HIGHSCORE:</p>
        <div className="display-highscore"></div>
      </div>
    </div>
  );
};

export default Nav;
