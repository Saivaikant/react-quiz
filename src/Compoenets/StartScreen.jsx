import { useQuestions } from "../contexts/QuestionProvider";

function StartScreen({ numQuestions }) {
  const { dispatch } = useQuestions();
  return (
    <div className="start">
      <h2>Welcome to React Quiz</h2>
      <h3>{numQuestions} Questions to test your React Mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
