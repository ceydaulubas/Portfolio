import React from "react";
import "../styles/Projects.scss";
// import YouTubeVideo from "../thirdParty/YouTube";
import Card from "react-bootstrap/Card";
// import data from "./data/data.json";
import PetAdopt from "../images/WebProjectScreen/petadopt1.png"
import CodeChat from "../images/WebProjectScreen/codeChat-screenhot.png"
import HalloweenSnake from "../images/WebProjectScreen/HalloweenSnake-screenshot.png"
import TodoList from "../images/WebProjectScreen/todolist-angular-pagepic.png"

import BoxP from "../layout/BoxP";

const projects = () => {
  return (
    <BoxP>
      <div className="containerP">

        {/* PROJECT 1 */}
        <Card className="projectL" style={{ borderRadius: "25px" }}>
          <Card.Img variant="top" src={PetAdopt} className="projectImage" />
          <Card.Body>
            <Card.Title >PetAdopt</Card.Title>
            <Card.Text >
              Final Project in Ironhack.
              This website provides easy access and adoption to cats and dogs waiting for adoption.
        </Card.Text>
            <Card.Text style={{ marginBottom: '1%' }}>
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

        {/* PROJECT 2 */}
        <Card className="projectR" style={{ borderRadius: "25px"}} >
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

        {/* PROJECT 3 */}
        <Card className="projectR" style={{ borderRadius: "25px"}}>
          <Card.Img variant="top" src={HalloweenSnake} />
          <Card.Body>
            <Card.Title>HalloweenSnake</Card.Title>
            <Card.Text  >
              First group project in Ironhack.
              Halloween Snake is a modified version of the Nostalgic snake game with the Halloween theme.
        </Card.Text>
            <Card.Text >
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

        {/* PROJECT 4 */}
        <Card className="projectL" style={{  borderRadius: "25px" }} >
          <Card.Img variant="top" src={TodoList} />
          <Card.Body>
            <Card.Title>Todo List</Card.Title>
            <Card.Text  >
              The first project that I created using the Angular framework and mocked JSON file.
        </Card.Text>
            <Card.Text >
              <b> Stack: </b> Typecript, SCSS, Angular CLI
        </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a
              className="btn-primary pt-1 pb-1 pl-2 pr-2"
              href="https://github.com/ceydaulubas/ToDoList-Angular-CLI-FakeBackEnd"
              target="_blank"
              rel=" noopener noreferrer"
            >
              Github
          </a>
          </Card.Footer>
        </Card>

      </div>
    </BoxP>
  )
};
export default projects;