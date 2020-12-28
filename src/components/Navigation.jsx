import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.scss";
import cv from "./data/cv.json";
import GithubLogo from "../images/githubwhite.png"
import LinkedinLogo from "../images/linkedin.png"
import MailLogo from "../images/mail.png"
// import HomeLogo from "../images/navigation-logo/home.jpg"

const Navigation = () => {
  return (
    <div>
      <input type="checkbox" id="openSidebarMenu" />
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner top"></div>
        <div className="spinner middle"></div>
        <div className="spinner bottom"></div>
      </label>
      <div id="sidebarMenu">
        <ul className="menu">
          <li>
          {/* <img src={HomeLogo} alt="Shopping cart" style={{width: "20px"}}/> */}
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <a
              href={cv.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </li>
          <li>
            <a
              href="mailto:ceyda.ulubas@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
          <li className="noBorderBottom">
            <a
              className="hvr-grow"
              href="https://github.com/ceydaulubas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GithubLogo}
                alt="Ceyda Ulubas-github"
              />
            </a>

            <a
              className="hvr-grow"
              href="https://www.linkedin.com/in/ceydaulubas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={LinkedinLogo}
                alt="Ceyda Ulubas-linkedin"
              />
            </a>

            <a
              className="hvr-grow"
              href="mailto:ceyda.ulubas@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={MailLogo}
                alt="CeydaWeb-email"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
