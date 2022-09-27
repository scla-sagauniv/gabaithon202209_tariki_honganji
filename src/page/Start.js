import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Button } from "../components/Button";

import "../css/Start.css";

export const Start = () => {
  return (
    <main>
      <Navbar />
      <div className="body-container">
        <p className="body-subtitle">LET'S EXPLORE</p>
        <p className="body-title">THE SAGA</p>
        <div className="body-button">
          <Button name="play" path="/Game" />
        </div>
      </div>
    </main>
  );
};
