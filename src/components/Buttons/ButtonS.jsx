import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Buttons.scss";
import cv from "../data/cv.json";

const ButtonS = () => {
  return (
    <div className="buttons row">

      <div className="col-12 col-md-3">
        <Link to="/">Home</Link>
      </div>

      <div className="col-12 col-md-3">
        <Link to="/projects">Projects</Link>
      </div>
      <div className="col-12 col-md-3">
        <Link to="/about">About</Link>
      </div>
      <div className="col-12 col-md-3">
        <a
          href={cv.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
      </div>
    </div>
  );
};

export default ButtonS;
