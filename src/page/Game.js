import React, { useState } from "react";
import GoogleMapComponent from "../components/GoogleMapComponent";
import "../css/Game.css";
import { Button } from "../components/Button";

export const Game = () => {
  const [submitPosition, setSubmitPosition] = useState();

  return (
    <>
      <div className='submit-button'>
        {/* ボタンを押したら、正解との線を引く関数を走らせる */}
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
