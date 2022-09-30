// @ts-nocheck
import React from 'react'
// @ts-ignore
import './standard.css'
// @ts-ignore
import image from './image.png'
import DataContext from '../../utils/myContext';
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { BsGlobe } from 'react-icons/bs'
import { BiPhone } from 'react-icons/bi'
import { useSelector } from 'react-redux';
const Standard = () => {
	const baseState = React.useContext(DataContext);
	const skills = [...baseState.hardSkills, baseState.softSkills]
	const reduxStore = useSelector(state => state.formState)
	return (
		<div className="main-container">
			<div id="displayWrapper" style={{
				display: 'flex',
				alignItems: 'center',
			}}>
				<img src={image} alt="" style={{
					width: "40%",
					objectFit: "cover",
					height: "40%"
				}} />
				<div className="info ">
					<h2 style={{
						fontSize: "2em",
						// @ts-ignore
					}}>{reduxStore.personalDetails.name}</h2>
					<h4 style={{
						fontSize: "100%",
						fontWeight: 200,
						letterSpacing: "3px",
						// @ts-ignore
					}}>{reduxStore.personalDetails.profile}</h4>
				</div>
			</div>
			<div id="content" style={{
				padding: "1em"
			}}>
				<div className="leftContainer">
					<div className="contact">
						<h2 className="title">
							Contact
						</h2>
						<div className='opacity'>
							{
								reduxStore.personalDetails.mobileNo ? (
									<div style={{
										display: "flex",
										alignItems: "center",
										gap: "1em"
									}}>
										<BiPhone />
										<div>{reduxStore.personalDetails.mobileNo}</div>
									</div>
								) : null
							}
							{
								reduxStore.personalDetails.email ? (
									<div>
										<AiOutlineMail />
										<a className="link" href={`mailto:${reduxStore.personalDetails.email}`} target="_blank" rel="noopener noreferrer">Email</a>
									</div>
								) : null
							}
							{
								reduxStore.links.website ? (
									<div>
										<BsGlobe />
										<a className='link' target="blank" href={reduxStore.links.website}>Website</a></div>
								) : null
							}
							{
								reduxStore.links.linkedin ? (
									<div>
										<AiFillLinkedin />
										<a className='link' target="blank" href={reduxStore.links.linkedin}>Linkedin</a></div>
								) : null
							}
						</div>
					</div>

					<div className="education">
						<h2 className="title">Education</h2>
					</div>

					<div className="expertise" style={{
						marginBottom: "10px"
					}}
					>
						<h2 className="title">Expertise</h2>
						<div style={{
							display: "flex",
							flexWrap: "wrap",
							width: "10vw",
							gap: "5px",

						}}>
							{skills.map(item => {
								return (

									<div style={{
										background: "#ffffff",
										padding: "5px",
										borderRadius: "25px",
									}}>
										{item}
									</div>
								)
							})

							}
						</div>
					</div>
					<div className="achievements">
						<h2 className="title">Achievements</h2>
						<div className='opacity' style={{
							padding: "1.5em"
						}}>
							{
								baseState.achievements.map(item => {
									return (
										<li>{item}</li>
									)
								})
							}
						</div>
					</div>
				</div>
				<div className="rightContainer" style={{
					marginLeft: "15px"
				}}>
					{reduxStore.personalDetails.aboutMe ? (

						<div className="aboutMe">
							<h2 className="title">About Me</h2>
							<span className='opacity'>{reduxStore.personalDetails.aboutMe}</span>
						</div>
					) : null
					}
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
									fontSize: "120%",
								}}>SafeTrade.ai 2022-2023</h4>
								<span className='opacity'>Full Stack Engineer Intern</span>
								<span className='opacity'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span></div>

							<div>
								<h4 style={{
									fontSize: "120%",
								}}>SafeTrade.ai 2022-2023</h4>
								<span className='opacity'>Full Stack Engineer Intern</span>
								<span className='opacity'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span>	</div>
						</div>
					</div>
					<div className="projects">

						<h2 className="title">Projects</h2>
						<div>
							<h4 style={{
								fontSize: "120%",
							}}>SafeTrade.ai 2022-2023</h4>
							<span className='opacity'>Full Stack Engineer Intern</span>
							<span className='opacity'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </span></div>
					</div>

				</div>
			</div>
			<div className="footer">

			</div>
		</div >
	)
}

export default Standard