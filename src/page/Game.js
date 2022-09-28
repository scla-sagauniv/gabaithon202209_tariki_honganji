import React, { useState } from "react";
import GoogleMapComponent from "../components/GoogleMapComponent";
import { HintMenu } from "../components/HintMenu";
import "../css/Game.css";

export const Game = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="game-area">
        {isOpen ? (
          <>
            <HintMenu hints="ふみや" />
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
