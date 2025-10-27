import React from "react";

export default function QuizReview({ review, onBack }) {
  const { quiz, score } = review;
  return (
    <div className="review">
      <h2>{quiz.title}</h2>
      <p>Final Score: {score} / {quiz.questions.length}</p>
      {quiz.questions.map((q, i) => (
        <div key={i} className="question">
          <h4>{q.text}</h4>
          <p>Correct: {q.options[q.correctOptionIndex]}</p>
        </div>
      ))}
      <button onClick={onBack}>🏠 Back to Quizzes</button>
    </div>
  );
}
