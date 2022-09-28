import React, { useState } from "react";
import GoogleMapComponent from "../components/GoogleMapComponent";
import { Navbar } from "../components/Navbar";
import { HintMenu } from "../components/HintMenu";
import "../css/Game.css";
import { Button } from "../components/Button";

export const Game = () => {
  const [submitPosition, setSubmitPosition] = useState();
  console.log(submitPosition);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  function showResult() {
    setIsSubmitted(true);
  }
  return (
    <>
      <Navbar />
      <div className='game-area'>
        {isOpen ? (
          <>
            <HintMenu hints='ふみや' />
            <button onClick={() => setIsOpen(false)}>閉じる</button>
          </>
        ) : (
          <button onClick={() => setIsOpen(true)}>開く</button>
        )}
        <div className='submit-button' onClick={showResult}>
          {/* ボタンを押したら、正解との線を引く関数を走らせる */}
          <Button name='guess' />
        </div>
        <GoogleMapComponent
          setSubmitPosition={setSubmitPosition}
          isSubmitted={isSubmitted}
        />
      </div>
    </>
  );
};
