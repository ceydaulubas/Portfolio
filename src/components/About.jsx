import React from "react";
import BoxA from "../layout/BoxA";
import "../styles/About.scss";
import Me from "../images/AboutMe/me.jpg"

const About = () => {
  return (
    <BoxA>
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
            In this way, I learned the coordination between departments.🎉
            </p>
          <p>
            After graduation from university, I have worked in the marketing department. 
            End of the 2.5 years, I went to Amsterdam for improving myself and English skill.
            This personal development process has been a fruitful period that helped me get to know myself better and decide what I really want.
            I wanted to create web pages, develop applications and games,
            for these I had to know how to code and I was lucky because my sister and brother-in-law are computer engineers.
            They taught me many things about coding.  I started to coding with this way and after self-learnning for a while.
            I started Ironhack Amsterdam Web Development Bootcamp in October 2020. During 9 super intensive teaching weeks
            I learned deeply information about full stack development and created 3 different projects.
            I realized how happy while I am coding in this process and how I love coding. ❤️
          </p>
          <p>
            
          ✨
          </p>
        </div>
      </div>
    </BoxA>
  );
};

export default About;
