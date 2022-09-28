import React, { useEffect } from "react";
import "../css/ScoreBoard.css";
import { shuffleNumberCounter } from "../lib/shuffleNumberCounter";

const ScoreBoard = ({ distance }) => {
  const cal = 1000 * 0.95 ** distance;
  const score = Math.floor(cal * 10) / 10;

  useEffect(() => {
    const target = document.querySelector(".score");
    shuffleNumberCounter(target);
  }, [score]);
  return (
    <>
      <div className='score-container'>
        <div className='score' data-num={score}>
          0
        </div>
        <div className='progress-bar'>バー</div>
        <div className='distance-description'>km</div>
      </div>
    </>
  );
};

export default ScoreBoard;
