import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <header>
        <div className="header-box">
          <Link to="/" className="header-title">
            SAGA GUESSR
          </Link>
        </div>
      </header>
    </>
  );
};
