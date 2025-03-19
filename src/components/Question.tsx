import "./Question.scss";

interface QuestionProps {
  questionText: string;
}

function Question({ questionText }: QuestionProps) {
  return <h2 className="question">{questionText}</h2>;
}

export default Question;
