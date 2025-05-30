import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import PostForm from "./components/PostForm";
import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";
import ProfileEdit from "./components/ProfileEdit";

const features = [
  { name: "로그인", component: <Login /> },
  { name: "회원가입", component: <Signup /> },
  { name: "게시글 목록", component: <PostList /> },
  { name: "게시글 상세", component: <PostDetail /> },
  { name: "글쓰기", component: <PostForm /> },
  { name: "댓글 목록", component: <CommentList /> },
  { name: "댓글 작성", component: <CommentForm /> },
  { name: "프로필 수정", component: <ProfileEdit /> },
];

const App: React.FC = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f6f7f9",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 0"
    }}>
      <h1 style={{ marginBottom: 24 }}>협업 연습</h1>
      <div style={{ display: "flex", gap: "12px", marginBottom: 32 }}>
        {features.map((f, idx) => (
          <button
            key={f.name}
            onClick={() => setSelected(idx)}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              border: selected === idx ? "2px solid #222" : "1px solid #e0e0e0",
              background: selected === idx ? "#e3e7eb" : "#fff",
              color: "#222",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background 0.2s, border 0.2s"
            }}
          >
            {f.name}
          </button>
        ))}
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {features[selected].component}
      </div>
    </div>
  );
};

export default App; 