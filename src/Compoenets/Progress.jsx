import { useQuestions } from "../contexts/QuestionProvider";

function Progress({ totalPoints, numquestions }) {
  const { index, points, answer } = useQuestions();
  return (
    <header className="progress">
      <progress value={index + Number(answer != null)} max={numquestions} />
      <p>
        Question <strong>{index + 1}</strong> / {numquestions}
      </p>
      <p>
        Points <strong>{points}</strong> / {totalPoints}
      </p>
    </header>
  );
}

export default Progress;
