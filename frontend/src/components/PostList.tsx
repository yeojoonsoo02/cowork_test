import React from "react";

interface Post {
  id: number;
  title: string;
  author: string;
}

const dummyPosts: Post[] = [
  { id: 1, title: "첫 번째 게시글", author: "홍길동" },
  { id: 2, title: "두 번째 게시글", author: "김철수" },
];

const PostList: React.FC = () => {
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
        padding: "32px 24px",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        minWidth: "400px"
      }}>
        <h2 style={{
          fontFamily: "Inter, Arial, sans-serif",
          fontWeight: 700,
          fontSize: "1.5rem",
          color: "#222",
          marginBottom: "20px"
        }}>게시글 목록</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {dummyPosts.map(post => (
            <li key={post.id} style={{
              padding: "16px 0",
              borderBottom: "1px solid #e0e0e0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <span style={{ fontWeight: 600 }}>{post.title}</span>
              <span style={{ color: "#888", fontSize: "0.95rem" }}>{post.author}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostList;
