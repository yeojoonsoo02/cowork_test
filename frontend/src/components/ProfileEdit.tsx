import React from "react";

const ProfileEdit = () => {
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
          fontSize: "1.5rem",
          color: "#222"
        }}>프로필 수정</h2>
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
        <input
          type="file"
          accept="image/*"
          style={{
            padding: "8px 0"
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
          저장
        </button>
      </form>
    </div>
  );
};

export default ProfileEdit;
