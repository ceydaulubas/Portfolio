import React from "react";
import "../styles/BoxH.scss";
import ButtonH from "../components/Buttons/ButtonH";

const BoxH = (props) => {
  return (
    <div>
      <ButtonH />
      <div className="boxh">{props.children}</div>

    </div>
  );
};

export default BoxH;
