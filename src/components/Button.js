import React from "react";
import { Link } from "react-router-dom";
import "../css/button.css";

export const Button = ({ name, path, onClick }) => {
  return (
    <>
      <Link to={path} className='button-all'>
        {name}
      </Link>
    </>
  );
};
