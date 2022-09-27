import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import "../css/Start.css";

export const Start = () => {
  return (
    <main>
      <Navbar />
      <div className="body-container">
        <p className="body-subtitle">LET'S EXPLORE</p>
        <p className="body-title">THE SAGA</p>
      </div>
    </main>
  );
};
