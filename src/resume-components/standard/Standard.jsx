import React from 'react'
// @ts-ignore
import './standard.css'
import image from './image.png'
import EducationContext from '../../utils/myContext';
const Standard = () => {
	const baseState = React.useContext(EducationContext);
	return (
		<div className="main-container">
			<div id="displayWrapper" style={{
				display: 'flex',
				alignItems: 'center',
			}}>
				<img src={image} alt="" style={{
					width: "40%",
					height: "40%"
				}} />
				<div className="info ">
					<h2 style={{
						fontSize: "2em",

						// @ts-ignore
					}}>{baseState.basicDetails.name}</h2>
					<h4 style={{
						fontSize: "15px",
						fontWeight: 200,
						letterSpacing: "5px",
						// @ts-ignore
					}}>{baseState.basicDetails.profile}</h4>
				</div>
			</div>
			<div id="content" style={{
				padding: "25px"
			}}>
				<div className="leftContainer">
					<div className="contact">
						<h2 className="title">
							Contact
						</h2>
						<ul className='opacity'>
							<li>8160351412</li>
							<li>krishkashiwala@gmail.com</li>
							<li>Website</li>
						</ul>
					</div>
					<div className="expertise">
						<h2 className="title">Expertise</h2>
						<ul className='opacity'>
							<li>

								Highly Organised
							</li>
							<li>
								Email Marketing
							</li>
							<li>

								Copyediting
							</li>
							<li>

								Proactive Leaner
							</li>
							<li>

								leadership
							</li>
							<li>
								discipline
							</li>
							<li>

								Translation
							</li>
						</ul>
					</div>
					<div className="languages">

						<h2 className="title">Languages</h2>
						<ul className='opacity'>
							<li>

								Hindi
							</li>
							<li>
								Gujarati
							</li>
							<li>

								English
							</li>
						</ul>
					</div>
					<div className="achievements">
						<h2 className="title">Achievements</h2>
						<ul className='opacity'>
							<li>Ranked top 3 in two semesters</li>
							<li>Participated in multiple hackathons</li>
						</ul>
					</div>
				</div>
				<div className="rightContainer" style={{
					marginLeft: "15px"
				}}>
					<div className="aboutMe">
						<h2 className="title">About Me</h2>
						<span className='opacity'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
					</div>
					<div className="experience" style={{
						marginTop: "20px",
						marginBottom: "2em"
					}}>
						<h2 className="title">Experience</h2>
						<div className="designation" style={{
							display: "flex",
							flexDirection: "column",
							gap: "2em"
						}}>
							<div>
								<h4 style={{
									fontSize: "20px",
								}}>SafeTrade.ai 2022-2023</h4>
								<span className='opacity'>Full Stack Engineer Intern</span>
								<span className='opacity'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span></div>

							<div>
								<h4 style={{
									fontSize: "20px",
								}}>SafeTrade.ai 2022-2023</h4>
								<span className='opacity'>Full Stack Engineer Intern</span>
								<span className='opacity'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span>	</div>
						</div>
					</div>
					<div className="projects">

						<h2 className="title">Projects</h2>
						<div>
							<h4 style={{
								fontSize: "20px",
							}}>SafeTrade.ai 2022-2023</h4>
							<span className='opacity'>Full Stack Engineer Intern</span>
							<span className='opacity'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span></div>
					</div>
					<div className="education">
						<h2 className="title">Education</h2>
					</div>
				</div>
			</div>
			<div className="footer">

			</div>
		</div>
	)
}

export default Standard