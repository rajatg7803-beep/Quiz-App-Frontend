import React from "react";
import QuizCard from "./QuizCard";

export default function QuizList({ quizzes, onEdit, onDelete, onPlay, onNew }) {
  return (
    <div className="quiz-list">
      <h1>🎯Quiz Builder</h1>
      <button className="new-btn" onClick={onNew}>➕ Create New Quiz</button>
      <div className="grid">
        {quizzes.map((q) => (
          <QuizCard key={q._id} quiz={q} onEdit={onEdit} onDelete={onDelete} onPlay={onPlay} />
        ))}
      </div>
    </div>
  );
}
