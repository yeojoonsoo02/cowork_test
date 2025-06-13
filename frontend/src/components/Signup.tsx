import React, { FormEvent, useState } from "react";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState(""); // ✅ 메시지 상태 추가

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log("회원가입 결과:", data);
        setMessage(`${name}님, 회원가입이 성공했습니다!`); // ✅ 메시지 설정
      })
      .catch((err) => {
        console.error("회원가입 실패:", err);
        setMessage("회원가입 중 오류가 발생했습니다."); // 실패 메시지도 추가
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
        }}>회원가입</h2>

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
        <input
          type="text"
          placeholder="닉네임"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

        {/* ✅ 회원가입 결과 메시지 출력 */}
        {message && (
          <div style={{
            marginTop: "8px",
            color: "#2c7a00",
            fontWeight: 500,
            textAlign: "center"
          }}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default Signup;