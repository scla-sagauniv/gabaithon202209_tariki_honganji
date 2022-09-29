import React, { useEffect, useState } from "react";
import GoogleMapComponent from "../components/GoogleMapComponent";
import { Navbar } from "../components/Navbar";
import { HintMenu } from "../components/HintMenu";
import "../css/Game.css";
import { Button } from "../components/Button";
import ScoreBoard from "../components/ScoreBoard";
import { useFireStore } from "../hooks/useFireStore";

const containerStyle = {
  height: "100vh",
  width: "100%"
};

export const Game = () => {
  const [selectedPosition, setSelectedPosition] = useState();
  const [distance, setDistance] = useState();
  console.log("selectPosition", selectedPosition);
  console.log("distance", distance);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  function showResult() {
    setIsSubmitted(true);
  }

  const { question } = useFireStore();

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
          containerStyle={containerStyle}
          ansPos={question?.latlng}
        />
      </div>
    </>
  );
};
