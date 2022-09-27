import React from 'react'
import Box from '@mui/material/Box'
import EducationTitle from '../sections/EducationTitle';
import PersonalDetails from './PersonalDetails';
import ExperienceTitle from '../sections/ExperienceTitle';
import Skills from '../sections/Skills';
import Achievements from '../sections/Achievements';
import LinksWrapper from '../sections/LinksWrapper';
import Project from '../sections/Project';
const Formdata = (props) => {

	const PageDisplay = () => {
		switch (props.step) {
			case 1: return (
				<PersonalDetails />
			)
			case 2:
				return (
					<EducationTitle inputFields={props.inputFields} setInputFields={props.setInputFields} />
				)
			// @ts-ignore
			case 3: return (<ExperienceTitle expDetails={props.experience} setExpDetails={props.setExperience} />)
			case 4: return (<Project />)
			case 5: return (<LinksWrapper website={props.website} setWebsite={props.setWebsite} linkedin={props.linkedin} setLinkedin={props.setLinkedin} />)
			default: return (
				<>
					<Skills hardSkills={props.hardSkills} setHardSkills={props.setHardSkills} setSoftSkills={props.setSoftSkills} softSkills={props.softSkills} />
					<hr />
					<Achievements achievements={props.achievements} setAchievements={props.setAchievements} />
				</>
			)
		}
	}

	return (
		<div
			style={{
				minWidth: "40vw",
				maxWidth: "40vw",
				resize: "both",
				background: "#ffffff",
				borderRadius: "10px"
			}}
		>

			<Box style={{
				padding: "1em",
			}}>
				<div>
					{PageDisplay()}
				</div>
				<Box style={{ padding: "10px", display: "flex", alignItems: "end", justifyContent: "space-between" }}>

				</Box>
			</Box>
		</div >
	)
}

export default Formdata