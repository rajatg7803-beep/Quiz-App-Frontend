import React, { useEffect, useState } from "react";
import axios from "axios";
import QuizList from "./components/QuizList";
import QuizForm from "./components/QuizForm";
import QuizPlayer from "./components/QuizPlayer";
import QuizReview from "./components/QuizReview";

const API_URL = "http://localhost:5000/api/quizzes";

export default function App() {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [mode, setMode] = useState("list");
  const [review, setReview] = useState(null);

  const fetchQuizzes = async () => {
    const res = await axios.get(API_URL);
    setQuizzes(res.data);
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const saveQuiz = async (quiz) => {
    try {
      if (quiz._id) {
        await axios.put(`${API_URL}/${quiz._id}`, quiz);
      } else {
        await axios.post(API_URL, quiz);
      }
      await fetchQuizzes();
      setMode("list");
    } catch {
      alert("Failed to save quiz. Check backend connection.");
    }
  };

  const deleteQuiz = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchQuizzes();
  };

  if (mode === "form")
    return <QuizForm quiz={selectedQuiz} onSave={saveQuiz} onCancel={() => setMode("list")} />;

  if (mode === "play")
    return <QuizPlayer quiz={selectedQuiz} onFinish={(r) => { setReview(r); setMode("review"); }} />;

  if (mode === "review")
    return <QuizReview review={review} onBack={() => setMode("list")} />;

  return (
    <QuizList
      quizzes={quizzes}
      onEdit={(q) => { setSelectedQuiz(q); setMode("form"); }}
      onDelete={deleteQuiz}
      onPlay={(q) => { setSelectedQuiz(q); setMode("play"); }}
      onNew={() => { setSelectedQuiz(null); setMode("form"); }}
    />
  );
}
