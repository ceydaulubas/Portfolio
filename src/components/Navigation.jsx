import React from "react";
// import { NavLink } from "react-router-dom";
import "../styles/Navigation.scss";
import GithubLogo from "../images/githubwhite.png"
import LinkedinLogo from "../images/linkedin.png"
import MailLogo from "../images/mail.png"
import MediumLogo from "../images/medium-logo.png"

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
            <a
              className="hvr-grow"
              href="https://ceydaulubas.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={MediumLogo}
                alt="Ceyda Ulubas-medium"
              />
            </a>
     
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
