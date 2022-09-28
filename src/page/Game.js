import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleMapComponent from "../components/GoogleMapComponent";
import HintMenu from "../components/HintMenu";
import "../css/Game.css";

export const Game = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>ゲーム画面</h1>
      <Link to='/'>スタート画面に戻る</Link>
      <br></br>
      <Link to='/Result'>結果をみる</Link>
      <div className='game-area'>
        {isOpen ? (
          <>
            <HintMenu></HintMenu>
            <button onClick={() => setIsOpen(false)}>閉じる</button>
          </>
        ) : (
          <button onClick={() => setIsOpen(true)}>開く</button>
        )}
        <GoogleMapComponent />
      </div>
    </>
  );
};
