import React from "react";
import "../styles/Skills.scss";
import BoxH from "../layout/BoxH";
import Me2 from "../images/Home/pinkme.jpg"

const Skills = () => {
  return (
    <BoxH>
      <div className="col">
        <div className="name mt-5" style={{ color:'white'}} >
        <img
              // className="col-md-6"
              src={Me2}
              alt="Ceyda Ulubas"
              style={{ width: '16%' , height: '4%' , borderRadius:"25px"}} 
            />
          <h1 style={{  marginTop:"1%" , color:'white'}}>Welcome to my portfolio...</h1>
          <h5 style={{  marginTop:"1%"}}> My name is Ceyda Ulubas.</h5>
          <h5 > I am full-stack web developer who changed her career <br>
          </br>after more than 2 years of experience in brand management.</h5>
          <h5 style={{marginBottom:"5%"}} > Let's check out my skills, projects, and details of myself part. </h5>
        </div>
      </div>
    </BoxH>
  );
};

export default Skills;
