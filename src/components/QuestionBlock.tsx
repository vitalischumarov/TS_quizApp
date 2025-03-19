import { useState } from "react";
import Question from "./Question";
import "./QuestionBlock.scss";
import SingleQuestion from "./SingleQuestion";
import Button from "./Button";

type question = {
  question: string;
  questionA: string;
  questionB: string;
  questionC: string;
  questionD: string;
  answer: number;
};

function QuestionBlock() {
  const [question, setQuestion] = useState(0);
  const listOfAllQuestions: question[] = [
    {
      question: "ありがとう",
      questionA: "Hallo",
      questionB: "Ciao",
      questionC: "Danke",
      questionD: "Nein",
      answer: 3,
    },
    {
      question: "山",
      questionA: "Berg",
      questionB: "Mensch",
      questionC: "Haus",
      questionD: "Fluss",
      answer: 1,
    },
    {
      question: "男の人",
      questionA: "Mann",
      questionB: "Frau",
      questionC: "Kind",
      questionD: "Person",
      answer: 1,
    },
    {
      question: "この川は大きい",
      questionA: "Das Haus ist gross",
      questionB: "Der Fluss ist gross",
      questionC: "Der Berg ist schön",
      questionD: "Die Nudeln sind lecker",
      answer: 2,
    },
  ];

  function checkClickedAnswer(clickedAnswer: number) {
    const element = document.getElementById(String(clickedAnswer));
    if (clickedAnswer === listOfAllQuestions[question].answer) {
      if (element !== null) {
        element.style.backgroundColor = "green";
      }
    } else {
      if (element !== null) {
        element.style.backgroundColor = "red";
      }
    }
  }

  function nextQuestion() {
    if (question === listOfAllQuestions.length - 1) {
      alert("Ende");
    } else {
      resetAnswers();
      setQuestion(question + 1);
    }
  }

  function resetAnswers() {
    const elements = document.querySelectorAll(".questionText");
    elements.forEach((element) => {
      (element as HTMLElement).style.backgroundColor = "rgb(60 60 60)";
    });
  }

  return (
    <div className="questionBox">
      <Question questionText={listOfAllQuestions[question].question}></Question>
      <SingleQuestion
        questionText={listOfAllQuestions[question].questionA}
        action={checkClickedAnswer}
        noAnswer={1}
      ></SingleQuestion>
      <SingleQuestion
        questionText={listOfAllQuestions[question].questionB}
        action={checkClickedAnswer}
        noAnswer={2}
      ></SingleQuestion>
      <SingleQuestion
        questionText={listOfAllQuestions[question].questionC}
        action={checkClickedAnswer}
        noAnswer={3}
      ></SingleQuestion>
      <SingleQuestion
        questionText={listOfAllQuestions[question].questionD}
        action={checkClickedAnswer}
        noAnswer={4}
      ></SingleQuestion>
      <Button action={nextQuestion} title="next"></Button>
    </div>
  );
}

export default QuestionBlock;
