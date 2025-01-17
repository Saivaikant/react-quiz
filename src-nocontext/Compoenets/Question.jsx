import Options from "./Options";

function Question({ question, answer, dispatch }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        options={question.options}
        dispatch={dispatch}
        answer={answer}
        correctOption={question.correctOption}
      />
    </div>
  );
}

export default Question;
