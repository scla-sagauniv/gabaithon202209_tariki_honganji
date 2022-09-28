import React from "react";
import { Link } from "react-router-dom";
import GoogleMapComponent from "../components/GoogleMapComponent";
import { Navbar } from "../components/Navbar";

export const Game = () => {
  return (
    <>
      <Navbar />
      <h1>ゲーム画面</h1>
      <Link to="/">スタート画面に戻る</Link>
      <br></br>
      <Link to="/Result">結果をみる</Link>
      <GoogleMapComponent />
    </>
  );
};
