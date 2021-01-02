import React from "react";
import "../styles/BoxH.scss";
import ButtonH from "../components/Buttons/ButtonH";

const BoxH = (props) => {
  return (
    <div>
      <div className="boxh">{props.children}</div>
      <ButtonH />
    </div>
  );
};

export default BoxH;
