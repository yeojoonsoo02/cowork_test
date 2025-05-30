import React from "react";
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
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "40px",
      padding: "40px 0",
      background: "#f6f7f9",
      minHeight: "100vh"
    }}>
      <h1 style={{marginBottom: 0}}>모든 도구(컴포넌트) 한눈에 보기</h1>
      <Login />
      <Signup />
      <PostList />
      <PostDetail />
      <PostForm />
      <CommentList />
      <CommentForm />
      <ProfileEdit />
    </div>
  );
};

export default App; 