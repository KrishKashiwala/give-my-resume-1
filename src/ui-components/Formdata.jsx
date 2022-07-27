import React from 'react'
import {
	Paper

} from "@material-ui/core";
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import EducationTitle from '../helpers/EducationTitle';
import PersonalDetails from './PersonalDetails';
import { v4 as uuidv4 } from 'uuid';
import ExperienceTitle from '../helpers/ExperienceTitle';
import Skills from '../helpers/Skills';
import Achievements from '../helpers/Achievements';
import Links from '../helpers/LinksWrapper';
import LinksWrapper from '../helpers/LinksWrapper';
const Formdata = () => {
	const [step, setStep] = React.useState(1)
	const [platform, setPlatform] = React.useState([
		{
			id: uuidv4(),
			name: "",
			link: ""
		}
	])
	const [educationDetails, setEducationDetails] = React.useState({
		name: '',
		cgpa: ''
	})
	const [inputFields, setInputFields] = React.useState([
		{ id: uuidv4(), name: '', cgpa: '' }
	]);
	const [experienceDetails, setExperienceDetails] = React.useState([{
		id: uuidv4(),
		company: '',
		title: "",
		startDate: "",
		endDate: "",
		description: ""
	}])
	const [hardSkills, setHardSkills] = React.useState([])
	const [softSkills, setSoftSkills] = React.useState([])

	const PageDisplay = () => {
		switch (step) {
			case 1: return (
				<PersonalDetails />
			)
			case 2:
				return (
					<EducationTitle inputFields={inputFields} setInputFields={setInputFields} />
				)
			case 3: return (<ExperienceTitle expDetails={experienceDetails} setExpDetails={setExperienceDetails} />)
			case 4: return (
				<>
					<Skills hardSkills={hardSkills} setHardSkills={setHardSkills} setSoftSkills={setSoftSkills} softSkills={softSkills} />
					<hr />
					<Achievements />
				</>
			)
			default: return (<LinksWrapper platform={platform} setPlatform={setPlatform} />)
		}
	}

	return (
		<div>
			<Paper style={{
				padding: "15px", marginTop: "5px", marginLeft: "4em", background: "rgba(255, 255, 255, 0.8)",
				backdropFilter: "saturate(180 %) blur(10px)",
			}}>
				<div>
					{PageDisplay()}
				</div>
				<Box style={{ padding: "10px", display: "flex", alignItems: "end", justifyContent: "space-between" }}>
					<Button variant='contained' disabled={step === 1} onClick={() => setStep(step => step - 1)} >Prev</Button>
					<Button variant='contained' disabled={step === 5} onClick={() => setStep(step => step + 1)} style={{ marginLeft: "5px" }}>Next</Button>
				</Box>
			</Paper>
		</div >
	)
}

export default Formdata