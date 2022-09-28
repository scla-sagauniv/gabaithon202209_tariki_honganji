import React, { useState } from "react";
import GoogleMapComponent from "../components/GoogleMapComponent";
import { Navbar } from "../components/Navbar";
import { HintMenu } from "../components/HintMenu";
import "../css/Game.css";
import { Button } from "../components/Button";

export const Game = () => {
  const [submitPosition, setSubmitPosition] = useState();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className="game-area">
        {isOpen ? (
          <>
            <HintMenu hints="ふみや" />
            <button onClick={() => setIsOpen(false)}>閉じる</button>
          </>
        ) : (
          <button onClick={() => setIsOpen(true)}>開く</button>
        )}
        <div className="submit-button">
          {/* ボタンを押したら、正解との線を引く関数を走らせる */}
          <Button
            name="guess"
            path="/Result"
            onClick={() => console.log(submitPosition)}
          />
        </div>
        <GoogleMapComponent setSubmitPosition={setSubmitPosition} />
      </div>
    </>
  );
};
