/* 「useState」と「useEffect」をimport↓ */
import React, { useState, useEffect } from "react";
/* 「onAuthStateChanged」と「auth」をimport↓ */
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../FirebaseConfig.js";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import image from "../imgs/logout-icon.png";

export const Navbar = () => {
  /* ↓state変数「user」を定義 */
  const [user, setUser] = useState("");

  /* ↓ログインしているかどうかを判定する */
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  /* ↓関数「logout」を定義 */
  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };
  /* ↓「navigate」を定義 */
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="header-box">
          <Link to="/" className="header-title">
            SAGA GUESSR
          </Link>
          <div className="header-right-item">
            <div className="userName">
              {/* <p className="font-regular">a</p> */}
              <p className="font-regular">{user?.email}</p>
            </div>
            {user?.email && (
              <Link onClick={logout} className="header-logout">
                <img src={image} className="logout-img" alt="" />
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
