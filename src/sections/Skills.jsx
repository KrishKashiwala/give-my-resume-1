// @ts-nocheck
import React from 'react'
import ChipInput from 'material-ui-chip-input'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { removeSkillDetails, updateSkillDetails } from '../redux/formSlice'
import { useDispatch, useSelector } from 'react-redux'




const Skills = (props) => {

	const dispatch = useDispatch()
	const reduxStore = useSelector(state => state.formState)



	const handleSkillInputChange = (type, skill) => {
		dispatch(updateSkillDetails({ type, skill }))
	}
	const handleDeleteSkillChange = (type, skill) => {
		dispatch(removeSkillDetails({ type, skill }))
	}

	return (
		<Box
		>
			<Box style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "5px"
			}}>
				<Typography variant="h5" component="h2" style={{
					textAlign: "center",
				}} >

					Skills
				</Typography>
			</Box>
			<hr />
			<Box style={{ padding: "10px" }}>
				<label htmlFor="">Hard skills</label>
				{/* @ts-ignore */}
				<ChipInput
					style={{
						width: "100%",
						marginBottom: "1em"
					}}
					value={reduxStore.skills.hardSkills}
					onAdd={(chip) => {

						handleSkillInputChange("hardSkills", chip)
					}}
					onDelete={(chip, index) => {

						handleDeleteSkillChange("hardSkills", chip)
					}}
				/>
				<label htmlFor="">Soft skills</label>
				{/* @ts-ignore */}
				<ChipInput
					style={{
						width: "100%",
					}}
					value={reduxStore.skills.softSkills}
					onAdd={(chip) => {

						handleSkillInputChange("softSkills", chip)
					}}
					onDelete={(chip, index) => {

						handleDeleteSkillChange("softSkills", chip)
					}}
				/>
			</Box>
		</Box >
	)
}

export default Skills