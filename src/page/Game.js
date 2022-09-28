import React from "react";
import { Link } from "react-router-dom";
import GoogleMapComponent from "../components/GoogleMapComponent";
import HintMenu from "../components/HintMenu";
import "../css/Game.css";

export const Game = () => {
  return (
    <>
      <h1>ゲーム画面</h1>
      <Link to="/">スタート画面に戻る</Link>
      <br></br>
      <Link to="/Result">結果をみる</Link>
      <div className="game-area">
        <HintMenu></HintMenu>
        <GoogleMapComponent />
      </div>
    </>
  );
};
