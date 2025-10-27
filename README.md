# 🎯 Quiz Builder (Frontend)

An elegant and interactive **Quiz Builder App** built using **React + Vite**.  
Users can create, edit, delete, and play quizzes with real-time progress tracking —  
a perfect showcase of modular React components and clean UI design.

---

## 🗂 Folder Structure
├─ frontend/
│  ├─ package.json
│  ├─ index.html
│  └─ src/
│     ├─ main.jsx
│     ├─ App.jsx
│     ├─ types.js
│     ├─ storage.js
│     ├─ components/
│     │  ├─ QuizList.jsx
│     │  ├─ QuizCard.jsx
│     │  ├─ QuizForm.jsx
│     │  ├─ QuizPlayer.jsx
│     │  ├─ QuizReview.jsx
│     │  └─ ProgressBar.jsx
│     └─ styles.css
│     └─ utils.js    

## 🚀 Setup Instructions
cd frontend
npm create vite@latest . -- --template react
npm install axios
npm run dev

## Features
Create quizzes with multiple questions and options
Edit or delete any quiz
Play quizzes with live progress tracking
Review final score and correct answers
Responsive modern UI built with pure CSS

##🪄 Tech Stack

Frontend Framework: React (Vite)
Styling: CSS (Modern responsive layout)
State Management: React Hooks (useState, useEffect)
HTTP Client: Axios

##🧠 API Connection

The frontend communicates with the backend at:
http://localhost:5000/api/quizzes

Make sure your backend server is running before saving or fetching quizzes.
