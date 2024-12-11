function NextQuestion({ dispatch, answer, index, numquestions }) {
  if (answer === null) return null;
  if (index < numquestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === numquestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "endquiz" })}
      >
        Finish
      </button>
    );
  }
}

export default NextQuestion;
