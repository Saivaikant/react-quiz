function Progress({ index, numquestions, points, totalPoints, answer }) {
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
