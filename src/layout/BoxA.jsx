import React from "react";
import "../styles/BoxA.scss";
import ButtonA from "../components/Buttons/ButtonA";

const BoxA = (props) => {
  return (
    <div>
    <ButtonA />
      <div className="boxa">{props.children}</div>
      {/* <ButtonA /> */}
    </div>
  );
};

export default BoxA;
