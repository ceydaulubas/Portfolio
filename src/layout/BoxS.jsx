import React from "react";
import "../styles/BoxA.scss";
import ButtonA from "../components/Buttons/ButtonS";

const BoxS = (props) => {
  return (
    <div>
      <div className="boxa">{props.children}</div>
      <ButtonA />
    </div>
  );
};

export default BoxS;