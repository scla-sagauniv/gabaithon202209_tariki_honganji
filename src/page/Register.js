/* Register.js（完成版） */
import "../css/account.css";
import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../FirebaseConfig.js";
/* 「Link」をimport↓ */
import { Navigate, Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      alert("正しく入力してください");
    }
  };

  const [user, setUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <>
      {user ? (
        <Navigate to={`/`} />
      ) : (
        <>
          <main>
            <Navbar />
            <div className="body-container">
              <h1 className="account-title">SignUp</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  {/* <label>Email</label> */}
                  <input
                    name="email"
                    type="email"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                  />
                </div>
                <div>
                  {/* <label>Password</label> */}
                  <input
                    name="password"
                    type="password"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                  />
                </div>
                <button>SignUp</button>
                {/* ↓リンクを追加 */}
                <p>
                  <Link to={`/login/`}>Login</Link>
                </p>
              </form>
            </div>
          </main>
        </>
      )}
    </>
  );
};
