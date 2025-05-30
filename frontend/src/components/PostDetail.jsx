import React from "react";

const PostDetail = () => {
  // 더미 데이터
  const post = {
    title: "첫 번째 게시글",
    author: "홍길동",
    content: "이것은 게시글 내용입니다."
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f6f7f9"
    }}>
      <div style={{
        background: "#fff",
        padding: "40px 32px",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        minWidth: "400px"
      }}>
        <h2 style={{
          fontFamily: "Inter, Arial, sans-serif",
          fontWeight: 700,
          fontSize: "1.5rem",
          color: "#222",
          marginBottom: "8px"
        }}>{post.title}</h2>
        <div style={{ color: "#888", marginBottom: "20px" }}>{post.author}</div>
        <div style={{
          fontSize: "1.05rem",
          color: "#333",
          lineHeight: 1.7,
          marginBottom: "24px"
        }}>{post.content}</div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button style={{
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            background: "#e3e7eb",
            color: "#222",
            fontWeight: 600,
            cursor: "pointer"
          }}>수정</button>
          <button style={{
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            background: "#f8d7da",
            color: "#b71c1c",
            fontWeight: 600,
            cursor: "pointer"
          }}>삭제</button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
