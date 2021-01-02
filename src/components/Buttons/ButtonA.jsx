import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Buttons.scss";
import cv from "../data/cv.json";

const ButtonA = () => {
  return (
    <div className="buttons row">

      <div className="col-12 col-md-3">
        <Link to="/">Home</Link>
      </div>

      <div className="col-12 col-md-3">
        <Link to="/skills">Skills</Link>
      </div>

      <div className="col-12 col-md-3">
        <Link to="/projects">Project</Link>
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
      <div className="col-12 col-md-3">
      </div>
    </div>
  );
};

export default ButtonA;
