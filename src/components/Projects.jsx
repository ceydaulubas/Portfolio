import React from "react";
import "../styles/Projects.scss";
// import YouTubeVideo from "../thirdParty/YouTube";
import Card from "react-bootstrap/Card";
// import data from "./data/data.json";
import PetAdopt from "../images/WebProjectScreen/petadopt1.png"
import CodeChat from "../images/WebProjectScreen/codeChat-screenhot.png"
import HalloweenSnake from "../images/WebProjectScreen/HalloweenSnake-screenshot.png"

import BoxH from "../layout/BoxH";

const projects = () => {
  return (
    <BoxH>
    <div className="containerP">
      <Card className="project1" style={{ width: '30%' , height: '25%' , borderRadius:"25px"}}>
        <Card.Img variant="top" src={PetAdopt} style={{ width: '100%' , height: '100%' , borderRadius:"25px"}}  />
        <Card.Body>
          <Card.Title >PetAdopt</Card.Title>
          <Card.Text >
            Final Project in Ironhack.
            This website provides easy access and adoption to cats and dogs waiting for adoption.
        </Card.Text>
          <Card.Text style={{ marginBottom:'1%' }}>
            <b> Stack: </b>MongoDB, Mongoose, Express.js, React Js, Node.js
        </Card.Text>
        </Card.Body>
        <Card.Footer>
          <a
            className="btn-warning pt-1 pb-1 pl-2 pr-2 mr-4"
            href="https://pet-adopt-ironhack.herokuapp.com/"
            target="_blank"
            rel=" noopener noreferrer"
          >
            Website
            </a>
          <a
            className="btn-primary pt-1 pb-1 pl-2 pr-2"
            href="https://github.com/ceydaulubas/petAdopt"
            target="_blank"
            rel=" noopener noreferrer"
          >
            Github
          </a>
        </Card.Footer>
      </Card>

      <Card className="project2" style={{ width: '30%' , height: '25%' , borderRadius:"25px"}}>
        <Card.Img variant="top" src={CodeChat} />
        <Card.Body>
          <Card.Title>CodeChat</Card.Title>
          <Card.Text>
            Second group project in Ironhack.
            Social network platform for people who want to connect with other coders.
        </Card.Text>
          <Card.Text>
            <b> Stack: </b> Node.js , Express.js, SCSS, MongoDB, Mongoose, Handlebars
        </Card.Text>
        </Card.Body>
        <Card.Footer>
          <a
            className="btn-warning pt-1 pb-1 pl-2 pr-2 mr-4"
            href="http://codechat-ironhack.herokuapp.com"
            target="_blank"
            rel=" noopener noreferrer"
          >
            Website
            </a>
          <a
            className="btn-primary pt-1 pb-1 pl-2 pr-2"
            href="https://github.com/eliachiarucci/codechat.git"
            target="_blank"
            rel=" noopener noreferrer"
          >
            Github
          </a>
        </Card.Footer>
      </Card>

      <Card className="project3" style={{ width: '30%' , height: '25%' , borderRadius:"25px"}} >
        <Card.Img variant="top" src={HalloweenSnake}  />
        <Card.Body>
          <Card.Title>HalloweenSnake</Card.Title>
          <Card.Text>
            First group project in Ironhack.
            Halloween Snake is a modified version of the Nostalgic snake game with the Halloween theme.
        </Card.Text>
          <Card.Text style={{ marginBottom:'6%' }}>
            <b> Stack: </b> Javascript, HTML, CSS
        </Card.Text>
        </Card.Body>
        <Card.Footer>
          <a
            className="btn-warning pt-1 pb-1 pl-2 pr-2 mr-4"
            href="https://codebrokerad.github.io/halloweenSnake/"
            target="_blank"
            rel=" noopener noreferrer"
          >
            Website
            </a>
          <a
            className="btn-primary pt-1 pb-1 pl-2 pr-2"
            href="https://github.com/codebrokerad/halloweenSnake"
            target="_blank"
            rel=" noopener noreferrer"
          >
            Github
          </a>
        </Card.Footer>
      </Card>
    </div>
    </BoxH>
  )
};
export default projects;