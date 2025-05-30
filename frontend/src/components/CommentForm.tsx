import React from "react";

const CommentForm = () => {
  return (
    <form style={{
      display: "flex",
      gap: "8px",
      marginTop: "16px"
    }}>
      <input
        type="text"
        placeholder="댓글을 입력하세요"
        style={{
          flex: 1,
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #e0e0e0",
          fontSize: "1rem",
          fontFamily: "inherit"
        }}
      />
      <button type="submit" style={{
        padding: "10px 18px",
        borderRadius: "8px",
        border: "none",
        background: "#e3e7eb",
        color: "#222",
        fontWeight: 600,
        fontSize: "1rem",
        cursor: "pointer"
      }}>
        등록
      </button>
    </form>
  );
};

export default CommentForm;
