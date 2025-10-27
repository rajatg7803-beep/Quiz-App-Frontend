import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function QuizPlayer({ quiz, onFinish }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (i) => {
    if (i === quiz.questions[current].correctOptionIndex) setScore(score + 1);
    if (current + 1 < quiz.questions.length) setCurrent(current + 1);
    else onFinish({ quiz, score });
  };

  return (
    <div className="player">
      <h2>{quiz.title}</h2>
      <ProgressBar value={((current + 1) / quiz.questions.length) * 100} />
      <h3>{quiz.questions[current].text}</h3>
      {quiz.questions[current].options.map((opt, i) => (
        <button key={i} onClick={() => handleAnswer(i)}>{opt}</button>
      ))}
    </div>
  );
}
