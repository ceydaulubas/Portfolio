/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import Box2 from "../layout/Box2";
import "../styles/About.scss";
// import cv from "./data/cv.json";
import Me from "../images/AboutMe/me.jpg"

const About = () => {
  return (
    <Box2>
      <div className="container">
        <div className="about">
        <img
              // className="col-md-6"
              src={Me}
              alt="Ceyda Ulubas"
              style={{ width: '30%', marginRigt: "5%" , marginTop:"5%", float: "left", textAlign:"right"}} 
            />
          <h3>About Me.. </h3>
          <p>
            I am Ceyda. I graduated from International Business Administration and trade with a 3.26 CGPA at Yeditepe University.
            During university, I joined a management club and arranged lots of activities with members of the club.
            The first time, I have chanced to experience group working thanks to those activities (everyone says that I am a good group worker.)
            Moreover, I did many internships in the summers until graduated from university.
            In this way, I learned the coordination between departments.
            </p>
          <p>
            I started working life 🎉in the marketing department.
            After awesome 2.5 years, I left my job and I went to Amsterdam to improve my English and myself.
            While improving my language, I met lots of people and attended different meetings.
            In this process, I decided what I want to do. Actually, I wanted to create web pages, develop applications and games,
            for these I had to know how to code and I was lucky because my sister and brother-in-law are computer engineers.
            They taught me many things about coding. While I was self-studying, 
            I researched rigth web development Bootcamp at the same time because of the fact that I should learn in a  professional way. 
            I started Ironhack Amsterdam Web Development Bootcamp in October 2020. During 9 super intense weeks, 
            I learned deeply information and created 3 different projects.
            I realized how happy while I am coding in this process and how I love coding. ❤️
          </p>
          <p>

          </p>
        </div>
      </div>
    </Box2>
  );
};

export default About;
