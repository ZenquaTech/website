"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'; 

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHovered, setIsHovered] = useState(false);
 
  const router =  useRouter ()

  const handleSubmit = (event : any) => {
    event.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/user/login`, payload)
      .then((response) => {
        if (response.data.data.role === 'admin') {
          localStorage.setItem('token', response.data.data.token);
          router.push('/admin')
          return;
        }

        localStorage.setItem('token', response.data.token);
      })
      .catch((error) => console.error("Error :  ", error));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "400px",
        margin: "auto",
        padding: "40px",
        borderRadius: "10px",
        border: "1px solid #ccc",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        marginTop: "10%",
      }}
    >
      <h2 style={{ color: "#3b4c61" }}>Admin Login</h2>

      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="email"
            style={{
              display: "block",
              fontSize: "14px",
              marginBottom: "8px",
              color: "#3b4c61",
            }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="john@example.com"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "14px",
              outline: "none",
              boxSizing: "border-box",
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#3b4c61")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="password"
            style={{
              display: "block",
              fontSize: "14px",
              marginBottom: "8px",
              color: "#3b4c61",
            }}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="********"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "14px",
              outline: "none",
              boxSizing: "border-box",
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#3b4c61")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            border: "none",
            backgroundColor: "#3b4c61",
            color: "#fff",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "transform 0.3s ease",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
