import React, { useState } from "react";

export default function QuizForm({ quiz, onSave, onCancel }) {
  const [title, setTitle] = useState(quiz?.title || "");
  const [questions, setQuestions] = useState(quiz?.questions || []);

  const addQuestion = () =>
    setQuestions([...questions, { text: "", options: ["", "", "", ""], correctOptionIndex: 0 }]);

  const save = () => onSave({ ...quiz, title, questions });

  return (
    <div className="form">
      <h2>{quiz ? "Edit Quiz" : "Create New Quiz"}</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Quiz Title" />
      {questions.map((q, i) => (
        <div key={i} className="question">
          <input
            value={q.text}
            onChange={(e) => {
              const copy = [...questions];
              copy[i].text = e.target.value;
              setQuestions(copy);
            }}
            placeholder={`Question ${i + 1}`}
          />
          {q.options.map((opt, j) => (
            <input
              key={j}
              value={opt}
              onChange={(e) => {
                const copy = [...questions];
                copy[i].options[j] = e.target.value;
                setQuestions(copy);
              }}
              placeholder={`Option ${j + 1}`}
            />
          ))}
          <select
            value={q.correctOptionIndex}
            onChange={(e) => {
              const copy = [...questions];
              copy[i].correctOptionIndex = Number(e.target.value);
              setQuestions(copy);
            }}
          >
            {[0, 1, 2, 3].map((n) => (
              <option key={n} value={n}>{`Correct: Option ${n + 1}`}</option>
            ))}
          </select>
        </div>
      ))}
      <button onClick={addQuestion}>➕ Add Question</button>
      <button onClick={save}>💾 Save Quiz</button>
      <button onClick={onCancel}>↩ Back</button>
    </div>
  );
}
