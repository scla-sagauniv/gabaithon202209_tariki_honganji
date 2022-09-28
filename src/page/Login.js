/* Login.js*/
import "../css/account.css";
import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../FirebaseConfig.js";
/* 「Link」をimport↓ */
import { Navigate, Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (error) {
      alert("メールアドレスまたはパスワードが間違っています");
    }
  };

  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });

  return (
    <>
      {user ? (
        <Navigate to={`/`} />
      ) : (
        <>
          <div className="body-container">
            <Navbar />
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              <button>Login</button>
              {/* ↓リンクを追加 */}
              <p>
                <Link to={`/register/`}>SignUp</Link>
              </p>
            </form>
          </div>
        </>
      )}
    </>
  );
};
