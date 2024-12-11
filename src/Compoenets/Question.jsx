import { useQuestions } from "../contexts/QuestionProvider";
import Options from "./Options";

function Question() {
  const { questions, answer, dispatch, index } = useQuestions();
  const question = questions[index];
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
