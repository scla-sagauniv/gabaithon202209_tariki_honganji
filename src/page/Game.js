import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleMapComponent from "../components/GoogleMapComponent";
import "../css/Game.css";
import { Button } from "../components/Button";

export const Game = () => {
  const [submitPosition, setSubmitPosition] = useState();
  // console.log("subm", submitPosition);
  return (
    <>
      {/* <h1>ゲーム画面</h1>
      <Link to='/'>スタート画面に戻る</Link>
      <br></br>
      <Link to='/Result'>結果をみる</Link> */}
      <div className='submit-button'>
        <Button
          name='guess'
          path='/Result'
          onClick={() => console.log(submitPosition)}
        />
      </div>

      <GoogleMapComponent setSubmitPosition={setSubmitPosition} />
    </>
  );
};
