import React from "react";
import "../styles/Box1.scss";
import ButtonS from "../components/Buttons/ButtonS";

const Box1 = (props) => {
  return (
    <div className="container-fluid">
      <div className="box1 row">{props.children}</div>
      <ButtonS />
    </div>
  );
};

export default Box1;
