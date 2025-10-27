import React from "react";

export default function QuizCard({ quiz, onEdit, onDelete, onPlay }) {
  return (
    <div className="quiz-card">
      <h3>{quiz.title}</h3>
      <p>{quiz.questions.length} Questions</p>
      <div className="actions">
        <button onClick={() => onPlay(quiz)}>▶ Play</button>
        <button onClick={() => onEdit(quiz)}>✏ Edit</button>
        <button onClick={() => onDelete(quiz._id)}>🗑 Delete</button>
      </div>
    </div>
  );
}
