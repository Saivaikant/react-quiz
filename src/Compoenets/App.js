import React, { useEffect, useReducer } from "react";
import { ReactDOM } from "react";
import DataCounter from "./DateCounter";
import Header from "./Header";
import Main from "./Main";
import { act } from "react-dom/test-utils";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextQuestion from "./NextQuestion";
import Progress from "./Progress";
import Finish from "./Finish";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuestions } from "../contexts/QuestionProvider";

function App() {
  const { questions, status, dispatch } = useQuestions();

  const numQuestions = questions.length;
  const totalPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(() => {
    fetch("http://localhost:4500/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen numQuestions={numQuestions} />}
        {status === "active" && (
          <>
            <Progress
              totalPoints={totalPoints}
              numquestions={questions.length}
            />
            <Question />
            <Footer>
              <Timer />
              <NextQuestion numquestions={numQuestions} />
            </Footer>
          </>
        )}
        {status === "finished" && <Finish totalPoints={totalPoints} />}
      </Main>
    </div>
  );
}

export default App;
