import React from "react";
import "../styles/Home.scss";
import Techstack from "./Techstack";
import Box1 from "../layout/Box1";

const Home = () => {
  return (
    <Box1>
      <div className="col">
        <div className="name mt-5">
          <h1>Ceyda Ulubas</h1>
          <h5> Full-stack developer who shifted her career to coding <br>
          </br> after more than 2 years of experience in brand management.</h5>
        </div>
        <div className="mb-5">
          <Techstack />
        </div>
      </div>
    </Box1>
  );
};

export default Home;
