import Logo from "./Logo";

const Nav = () => {
  return (
    <>
      <div style={{display: "flex", justifyContent: "center", backgroundColor: "var(--blueDark)", color: "white"}}>
         <Logo />
      </div>
      
      <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "var(--blueDark)", color: "white" }}>
        
          <div style={{ width: "10%", height: "100%" }}>
              <p style={{ padding: "1rem" }}>POINTS:</p>
              <div> </div>
          </div>

          <div style={{width: "10%", height: "100%", marginRight: "2rem",}}>
              <p style={{ padding: "1rem" }}>HIGHSCORE:</p>
              <div> </div>
          </div>
        
      </div>
      </>
  );
};

export default Nav;
