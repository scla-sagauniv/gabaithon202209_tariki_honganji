import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleMapComponent from "../components/GoogleMapComponent";

export const Game = () => {
  const [submitPosition, setSubmitPosition] = useState();
  console.log("subm", submitPosition);
  return (
    <>
      <h1>ゲーム画面</h1>
      <Link to='/'>スタート画面に戻る</Link>
      <br></br>
      <Link to='/Result'>結果をみる</Link>
      <GoogleMapComponent setSubmitPosition={setSubmitPosition} />
    </>
  );
};
