import React, { useState } from "react";
import GoogleMapComponent from "../components/GoogleMapComponent";
import { Navbar } from "../components/Navbar";
import { HintMenu } from "../components/HintMenu";
import "../css/Game.css";
import { Button } from "../components/Button";
import ScoreBoard from "../components/ScoreBoard";

export const Game = () => {
  const [selectedPosition, setSelectedPosition] = useState();
  const [distance, setDistance] = useState();
  console.log(selectedPosition);
  console.log(distance);
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
          {isSubmitted && selectedPosition ? (
            <ScoreBoard distance={distance} />
          ) : (
            <Button name='guess' />
          )}
        </div>
        <GoogleMapComponent
          setSelectedPosition={setSelectedPosition}
          isSubmitted={isSubmitted}
          setDistance={setDistance}
        />
      </div>
    </>
  );
};
