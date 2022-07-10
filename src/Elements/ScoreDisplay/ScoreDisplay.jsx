const ScoreDisplay = (props) => {
  return (
    <div style={{ textAlign: "center", margin: "2em 3em" }}>
      <h3 className="scoreHeading">{props.text}</h3>
      <h3 className="scoreHeading"style={{ color: "var(--magenta)" }}>
        {props.score}
      </h3>
    </div>
  );
};

export default ScoreDisplay;

