import React, { FormEvent, useState } from "react";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState(""); // ✅ 메시지 상태

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, createdAt: new Date() }),
    })
      .then(async (res) => {
        const text = await res.text();
        if (res.ok) {
          setMessage(`${name}님, 회원가입이 성공했습니다!`);
        } else if (res.status === 400) {
          // 이메일 중복일 때 서버가 409를 반환한다고 가정
          setMessage("이미 존재하는 이메일입니다.");
        } else {
          setMessage("회원가입 중 오류가 발생했습니다.");
        }
      })
      .catch((err) => {
        console.error("회원가입 실패:", err);
        setMessage("회원가입 중 오류가 발생했습니다.");
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

        {/* ✅ 회원가입 결과 메시지 */}
        {message && (
          <div style={{
            marginTop: "8px",
            color: message.includes("성공") ? "#2c7a00" : "#c00",
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