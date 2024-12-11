import NextQuestion from "./NextQuestion";

function Finish({ points, totalPoints, highscore, dispatch }) {
  const percentage = (points / totalPoints) * 100;
  return (
    <>
      <p className="result">
        You have scored {points} out of {totalPoints} ({Math.round(percentage)}
        %)
      </p>
      <p className="highscore">Your highscore is {highscore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default Finish;
