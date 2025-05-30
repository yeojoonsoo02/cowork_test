import React from "react";

const Signup = () => {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f6f7f9"
    }}>
      <form style={{
        background: "#fff",
        padding: "40px 32px",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        minWidth: "320px"
      }}>
        <h2 style={{
          margin: 0,
          fontFamily: "Inter, Arial, sans-serif",
          fontWeight: 700,
          fontSize: "1.7rem",
          color: "#222"
        }}>회원가입</h2>
        <input
          type="text"
          placeholder="이메일"
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #e0e0e0",
            fontSize: "1rem",
            fontFamily: "inherit"
          }}
        />
        <input
          type="password"
          placeholder="비밀번호"
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #e0e0e0",
            fontSize: "1rem",
            fontFamily: "inherit"
          }}
        />
        <input
          type="text"
          placeholder="닉네임"
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #e0e0e0",
            fontSize: "1rem",
            fontFamily: "inherit"
          }}
        />
        <button type="submit" style={{
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          background: "#e3e7eb",
          color: "#222",
          fontWeight: 600,
          fontSize: "1rem",
          cursor: "pointer",
          transition: "background 0.2s"
        }}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Signup;
