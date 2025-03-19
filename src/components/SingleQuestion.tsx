import "./SingleQuestion.scss";

interface SingleQuestionProps {
  questionText: string;
  action: (tap: number) => void;
  noAnswer: number;
}

function SingleQuestion({
  questionText,
  action,
  noAnswer,
}: SingleQuestionProps) {
  function tapAnswer(): void {
    action(noAnswer);
  }

  return (
    <button className="questionText" onClick={tapAnswer} id={String(noAnswer)}>
      {questionText}
    </button>
  );
}

export default SingleQuestion;
