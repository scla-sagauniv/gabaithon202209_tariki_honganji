import React, { useEffect } from "react";
import "../css/ScoreBoard.css";
import { shuffleNumberCounter } from "../lib/shuffleNumberCounter";
import ProgressBar from "./ProgressBar";

const ScoreBoard = ({ distance }) => {
  const sml = Math.floor(distance * 1000) / 1000;
  const cal = 1000 * 0.95 ** distance;
  const score = Math.floor(cal * 10) / 10;

  useEffect(() => {
    const target = document.querySelector(".score");
    shuffleNumberCounter(target);
    const target2 = document.querySelector(".sml");
    shuffleNumberCounter(target2);
  }, [score]);

  return (
    <>
      <div className='score-container'>
        <div className='score-div'>
          <span className='score' data-num={score}>
            0
          </span>
        </div>
        {score && <ProgressBar score={score} />}
        <div className='distance-description'>
          Your guess was
          <span className='sml' data-num={sml}>
            0
          </span>
          from the correct location.
        </div>
      </div>
    </>
  );
};

export default ScoreBoard;
