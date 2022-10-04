import React, { useState } from "react";
import GoogleMapComponent from "../components/GoogleMapComponent";
import { Navbar } from "../components/Navbar";
import { HintMenu } from "../components/HintMenu";
import "../css/Game.css";
import { Button } from "../components/Button";
import ScoreBoard from "../components/ScoreBoard";
import { useFireStore } from "../hooks/useFireStore";
import { Loading } from "../components/Loading";
import image from "../imgs/hint-icon.png";

const containerStyle = {
  height: "calc(100vh - 70px)",
  width: "100%"
};

export const Game = () => {
  const [selectedPosition, setSelectedPosition] = useState();
  const [distance, setDistance] = useState();
  console.log("selectPosition", selectedPosition);
  console.log("distance", distance);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  function showResult() {
    setIsSubmitted(true);
  }
  const [start, setStart] = useState(false);
  setTimeout(function () {
    setStart(true);
  }, 3000);

  const { question } = useFireStore();

  if (start) {
    return (
      <>
        <Navbar />

        <div className='game-area'>
          {isOpen ? (
            <>
              <HintMenu hints={question?.hints} />
              <button className='hint-button' onClick={() => setIsOpen(false)}>
                <img className='hint-icon' src={image} alt='' />
              </button>
            </>
          ) : (
            <button className='hint-button' onClick={() => setIsOpen(true)}>
              <img className='hint-icon' src={image} alt='' />
            </button>
          )}

          <div onClick={showResult}>
            {isSubmitted && selectedPosition ? (
              <div className='score-board'>
                <ScoreBoard distance={distance} />
              </div>
            ) : (
              <div className='submit-button'>
                <Button name='guess' />
              </div>
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
  } else {
    return <Loading />;
  }
};
