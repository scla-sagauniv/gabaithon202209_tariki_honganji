/* 「useState」と「useEffect」をimport↓ */
import React, { useState, useEffect } from "react";

/* 「onAuthStateChanged」と「auth」をimport↓ */
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../FirebaseConfig.js";
import { Navbar } from "../components/Navbar";

import "../css/Start.css";

export const Quiz = () => {
  /* ↓state変数「user」を定義 */
  const [user, setUser] = useState("");

  /* ↓ログインしているかどうかを判定する */
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <main>
      <Navbar email={user?.email} />
      <div className="body-container"></div>
    </main>
  );
};
