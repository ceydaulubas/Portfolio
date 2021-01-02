import React from "react";
import "../styles/BoxP.scss";
import ButtonP from "../components/Buttons/ButtonP";

const BoxP = (props) => {
  return (
    <div>
      <div className="boxp">{props.children}</div>
      <ButtonP />
    </div>
  );
};

export default BoxP;
