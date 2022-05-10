const ScorDisplay = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>{props.text}</h3>
      <h3 style={{ color: "var(--magenta)" }}>
        {props.score}
      </h3>
    </div>
  );
};

export default ScoreDisplay;

