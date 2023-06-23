import { useEffect, useState } from "react";
//types
import { AnswerObject } from "../App";
//styles
import { Wrapper, LiWrapper } from "../styles/QuestionCardStyle.ts";

interface QuestionCardProps {
  question: string;
  answers: string[];
  userAnswer: AnswerObject | undefined;
  callback: (item: any) => void;
  questionNum: number;
  totalQuestions: number;
}

//const [userAnswer, setUserAnswer] = useState(ans: any)

const QuestionCard = ({
  question,
  answers,
  userAnswer,
  callback,
  questionNum,
  totalQuestions,
}: QuestionCardProps) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleClick = (item: string) => {
    setSelectedItem(item);
  };
  
  useEffect(() => {
    setSelectedItem(null);
  }, [questionNum]);

  return (
    <Wrapper>
      <p className="questionNum">
        Question: {questionNum} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <ul className="list-group">
        {answers.map((item) => (
          <LiWrapper
            key={item}
            correct={userAnswer?.correctAnswer === item}
            userClicked={userAnswer?.answer === item}
          >
            <li
              aria-disabled={!!userAnswer}
              className={`list-group-item ${
                selectedItem === item ? "active" : ""
              } ${
                selectedItem !== null && selectedItem !== item ? "disabled" : ""
              }`}
              onClick={() => {
                handleClick(item);
                callback(item);
              }}
            >
              {item}
            </li>
          </LiWrapper>
        ))}
      </ul>
    </Wrapper>
  );
};

export default QuestionCard;
