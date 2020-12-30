import React from "react";
import "../styles/BoxA.scss";
import ButtonA from "../components/ButtonA";

const BoxA = (props) => {
  return (
    <div>
      <div className="boxa">{props.children}</div>
      <ButtonA />
    </div>
  );
};

export default BoxA;
