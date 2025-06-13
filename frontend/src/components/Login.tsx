import React, { FormEvent, useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("로그인 성공! 토큰:", data.token);
        // localStorage.setItem("token", data.token); // 원하면 저장도 가능
      })
      .catch((err) => {
        console.error("로그인 실패:", err);
      });
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f6f7f9"
    }}>
      <form onSubmit={handleSubmit} style={{
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
        }}>로그인</h2>
        <input
          type="text"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;