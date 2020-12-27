import React from 'react';
import HTML from ".././images/skill-logo/frontend/html-logo.png"
import JS from ".././images/skill-logo/frontend/js-logo.png"
import CSS from ".././images/skill-logo/frontend/css-logo.png"
import SASS from ".././images/skill-logo/frontend/sass-logo.png"
import REACTJS from ".././images/skill-logo/frontend/react-logo.png"
import BOOTSTRAP from ".././images/skill-logo/frontend/bootstrap-2-logo.png"
import ExpressJS from ".././images/skill-logo/backend/express-logo.png"
import NodeJS from ".././images/skill-logo/backend/nodeJs-logo.png"
import MongoDB from ".././images/skill-logo/data/mongoDB-logo.png"
import Postman from ".././images/skill-logo/Other Skill/postman-logo.png"
import Jasmine from ".././images/skill-logo/Other Skill/jasmine-2-logo.png"
import Heroku from ".././images/skill-logo/Other Skill/heroku-logo.png"
import Github from ".././images/skill-logo/Other Skill/github-logo.png"


import '../styles/Techstack.scss';


const Techstack = () => {
	return (
		<div className="tech row">

			{/* <div className="box col-md-3 offset-md-1 m-bottom"> */}
				<div className="frontend-part">
					<h3 className="Fronth3">Front-End Skills</h3>
					<div className="icons pr-md-4">
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
			{/* </div> */}

			{/* <div className="box col-md-5 offset-md-1"> */}
				<div className="backend-part">
					<h3 className="Backh3">Back-End Skills</h3>
					<div className="icons pr-md-4">
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
				{/* </div> */}

				{/* <div className="box col-md-5 offset-md-1 m-bottom"> */}
					<div className="data-part">
					<h3 className="Datah3">Database Skills</h3>
					<div className="icons pr-md-4">
						<img
							src={MongoDB}
							alt="MongoDB"
						/>
					</div>
				</div>
					{/* </div> */}
				
				{/* <div className="box col-md-5 offset-md-1"> */}
				<div className="other-part">
				<h3 className="Otherh3">Other Skills</h3>
					<div className="icons pr-md-4">
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
				{/* </div> */}
					
		</div>
	);
};

export default Techstack;
