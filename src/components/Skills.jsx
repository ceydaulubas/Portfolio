import React from "react";
import "../styles/Skills.scss";
import Techstack from "./Techstack";
import Box1 from "../layout/Box1";

const Skills = () => {
  return (
    <Box1>
      <div className="col">
        <div className="name mt-5">
          <h1 style={{ color:' rgba(255, 255, 255, 0.384)'}}>My Skills</h1>
          {/* <h5> Full-stack developer who shifted her career to coding <br>
          </br> after more than 2 years of experience in brand management.</h5> */}
        </div>
        <div className="mb-5">
          <Techstack />
        </div>
      </div>
    </Box1>
  );
};

export default Skills;
