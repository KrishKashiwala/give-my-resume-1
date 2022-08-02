import React from 'react'
import Box from '@mui/material/Box'
import EducationTitle from '../helpers/EducationTitle';
import PersonalDetails from './PersonalDetails';
import ExperienceTitle from '../helpers/ExperienceTitle';
import Skills from '../helpers/Skills';
import Achievements from '../helpers/Achievements';
import LinksWrapper from '../helpers/LinksWrapper';
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
			case 4: return (
				<>
					<Skills hardSkills={props.hardSkills} setHardSkills={props.setHardSkills} setSoftSkills={props.setSoftSkills} softSkills={props.softSkills} />
					<hr />
					<Achievements achievements={props.achievements} setAchievements={props.setAchievements} />
				</>
			)
			default: return (<LinksWrapper platform={props.platform} setPlatform={props.setPlatform} />)
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