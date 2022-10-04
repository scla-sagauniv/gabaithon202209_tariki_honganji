/* 「useState」と「useEffect」をimport↓ */
import React, { useState, useEffect } from "react";

/* 「onAuthStateChanged」と「auth」をimport↓ */
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../FirebaseConfig.js";
import { Navbar } from "../components/Navbar";
import { Button } from "../components/Button";

import "../css/Start.css";

export const Start = () => {
  /* ↓state変数「user」を定義 */
  const [user, setUser] = useState("");

  /* ↓ログインしているかどうかを判定する */
  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
  }, []);

  return (
    <main>
      <Navbar email={user?.email} />
      <div className='body-container'>
        <div className='container-title'>
          <p className='body-subtitle'>LET'S EXPLORE</p>
          <p className='body-title'>THE SAGA</p>
        </div>
        <div className='body-button'>
          {user?.email ? (
            <Button name='Play' path='/Game' />
          ) : (
            <Button name='GuestPlay' path='/Game' />
          )}
        </div>
        <div className='body-button'>
          <Button name='PlaceList' path='PlaceList' />
        </div>
        {!user?.email && (
          <div className='body-button'>
            <Button name='SignUp' path='/Register' />
          </div>
        )}
        {!user?.email && (
          <div className='body-button'>
            <Button name='Login' path='/Login' />
          </div>
        )}
        {user?.email && (
          <div className='body-button'>
            <Button name='Create Quiz' path='/Quiz' />
          </div>
        )}
      </div>
    </main>
  );
};
