import React from "react";

const dummyComments = [
  { id: 1, author: "김철수", content: "좋은 글이네요!" },
  { id: 2, author: "이영희", content: "감사합니다." },
];

const CommentList = () => {
  return (
    <div style={{
      background: "#fff",
      padding: "24px 20px",
      borderRadius: "12px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
      marginTop: "24px",
      minWidth: "360px"
    }}>
      <h3 style={{
        fontFamily: "Inter, Arial, sans-serif",
        fontWeight: 600,
        fontSize: "1.1rem",
        color: "#222",
        marginBottom: "16px"
      }}>댓글</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {dummyComments.map(comment => (
          <li key={comment.id} style={{
            padding: "12px 0",
            borderBottom: "1px solid #e0e0e0"
          }}>
            <span style={{ fontWeight: 500 }}>{comment.author}</span>
            <span style={{ color: "#555", marginLeft: "8px" }}>{comment.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
