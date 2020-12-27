import React from 'react';
import HTML from ".././images/skill-logo/frontend/html-logo.png"
import JS from ".././images/skill-logo/frontend/js-logo.png"
import CSS from ".././images/skill-logo/frontend/css-logo.png"
import SASS from ".././images/skill-logo/frontend/sass-logo.png"
import REACTJS from ".././images/skill-logo/frontend/react2-logo.png"
import BOOTSTRAP from ".././images/skill-logo/frontend/bootstrap-logo.png"
import ExpressJS from ".././images/skill-logo/backend/express-logo.png"
import NodeJS from ".././images/skill-logo/backend/nodeJs-logo.png"
import MongoDB from ".././images/skill-logo/data/mongoDB2-logo.png"
import Postman from ".././images/skill-logo/Other Skill/postman2-logo.png"
import Jasmine from ".././images/skill-logo/Other Skill/jasmine-2-logo.png"
import Heroku from ".././images/skill-logo/Other Skill/heroku-logo.png"
import Github from ".././images/skill-logo/Other Skill/github-logo.png"


import '../styles/Techstack.scss';


const Techstack = () => {
	return (
		<div className="tech row">
			<div className="box .col-xs-6 offset-md-1 m-bottom">
					<div className="icons pr-md-3">
					<h3 className="Fronth3">Front-End</h3>
						<img
							src={HTML}
							alt="HTML5"
						/>
						<img
							src={JS}
							alt="JS"
						/>
						<img
							src={CSS}
							alt="CSS3"
						/>
						<img
							src={SASS}
							alt="SASS"
						/>
						<img
							src={REACTJS}
							alt="React Js"
						/>
						<img
							src={BOOTSTRAP}
							alt="Bootstrap"
						/>
				</div>
			</div>

			<div className="box .col-xs-6 offset-md-1">
					<div className="icons pr-md-4">
					<h3 className="Backh3">Back-End</h3>
						<img
							src={NodeJS}
							alt="NodeJS"
						/>
						<img
							src={ExpressJS}
							alt="ExpressJS"
						/>
					</div>
					</div>

				<div className="box col-md-5 offset-md-1 m-bottom">			
					<div className="icons pr-md-4">
					<h3 className="Datah3">Database</h3>
						<img
							src={MongoDB}
							alt="MongoDB"
						/>
					</div>
					</div>
				
				<div className="box col-md-5 offset-md-1">				
					<div className="icons pr-md-4">
					<h3 className="Otherh3">Others</h3>
						<img
							src={Postman}
							alt="PostMan"
						/>
						<img
							src={Jasmine}
							alt="Jasmine"
						/>
						<img
							src={Heroku}
							alt="Heroku"
						/>
						<img
							src={Github}
							alt="Github"
						/>
					</div>
					</div>
					
		</div>
	);
};

export default Techstack;


