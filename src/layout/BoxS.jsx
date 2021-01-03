import React from "react";
import "../styles/BoxA.scss";
import ButtonS from "../components/Buttons/ButtonS";

const BoxS = (props) => {
  return (
    <div>
      <ButtonS />
      <div className="boxs">{props.children}</div>

    </div>
  );
};

export default BoxS;