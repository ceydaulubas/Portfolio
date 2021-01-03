import React from "react";
import "../styles/BoxP.scss";
import ButtonP from "../components/Buttons/ButtonP";

const BoxP = (props) => {
  return (
    <div>
      <ButtonP />
      <div className="boxp">{props.children}</div>

    </div>
  );
};

export default BoxP;
