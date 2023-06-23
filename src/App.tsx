import { useState } from "react";
import { fetchQuizQuestions } from "./API.tsx";
// components
import Spinner from "./components/Spinner.tsx";
import QuestionCard from "./components/QuestionCard.tsx";
//Types
import { QuestionState, Difficulty } from "./API.tsx";
//Styles
import { GlobalStyle, Wrapper } from "./styles/AppStyle.ts";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  //console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (userAnswer: any) => {
    if (!gameOver) {
      //users answer
      const answer = userAnswer;
      //check if answer is correct
      const correct = questions[number].correct_answer === answer;
      //add score if ans is correct
      correct && setScore(score + 1);
      //save answer in the array for user userAnswers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };
  const nextQuestion = () => {
    //move on to the next question if this is not the last question
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>REACT QUIZ</h1>
        {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
          <button className="btn start" onClick={startTrivia}>
            Start
          </button>
        )}
        {!gameOver && <p className="score">Score: {score}</p>}
        {loading && (
          <div style={{ position: "relative" }}>
            <Spinner color="#472c2c" />
            <Spinner
              diameter={180}
              duration={1500}
              color="#ac6b68"
              style={{
                position: "absolute",
                top: 10,
                left: 10,
              }}
            />
            <Spinner
              diameter={160}
              duration={2000}
              color="#e1a590"
              // easing="ease-in"
              style={{
                position: "absolute",
                top: 20,
                left: 20,
              }}
            />
          </div>
        )}
        {!loading && !gameOver && (
          <QuestionCard
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
            questionNum={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
          />
        )}
        {!loading &&
          !gameOver &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 && (
            <button className="btn next" onClick={nextQuestion}>
              Next Question
            </button>
          )}
      </Wrapper>
    </>
  );
}

export default App;
