import "./App.scss";
import StartButton from "./components/Button";
import QuestionBlock from "./components/QuestionBlock";
import { useState } from "react";

function App() {
  const [beginnGame, setBeginnGame] = useState(false);

  function hideButton() {
    const button: null | HTMLElement = document.querySelector(".StartButton");
    if (button) {
      button.style.display = "none";
      setBeginnGame(true);
    }
  }
  if (!beginnGame) {
    return (
      <div className="app">
        <StartButton action={hideButton} title="Start Game"></StartButton>
      </div>
    );
  } else {
    return (
      <div className="app">
        <QuestionBlock></QuestionBlock>
      </div>
    );
  }
}

export default App;
