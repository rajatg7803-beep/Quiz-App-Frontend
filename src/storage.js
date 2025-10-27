const QUIZZES_KEY = 'quiz_app_quizzes';

export const loadQuizzes = () => {
  const data = localStorage.getItem(QUIZZES_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveQuizzes = (quizzes) => {
  localStorage.setItem(QUIZZES_KEY, JSON.stringify(quizzes));
};
