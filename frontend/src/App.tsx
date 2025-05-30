import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import PostForm from "./components/PostForm";
import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";
import ProfileEdit from "./components/ProfileEdit";

const App: React.FC = () => {
  return (
    <Router>
      <nav style={{
        display: "flex",
        gap: "16px",
        padding: "16px",
        background: "#f6f7f9",
        borderBottom: "1px solid #e0e0e0"
      }}>
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
        <Link to="/posts">게시글 목록</Link>
        <Link to="/post/new">글쓰기</Link>
        <Link to="/profile">프로필수정</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/post/new" element={<PostForm />} />
        <Route path="/comments" element={<CommentList />} />
        <Route path="/comment/new" element={<CommentForm />} />
        <Route path="/profile" element={<ProfileEdit />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App; 