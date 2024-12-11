function Options({ options, dispatch, answer, correctOption }) {
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option ${
            answer != null
              ? index === correctOption
                ? "correct"
                : index === answer
                ? "answer"
                : "wrong"
              : ""
          }`}
          disabled={answer !== null}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
