// @ts-nocheck
import React from 'react'
import ChipInput from 'material-ui-chip-input'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import DataContext from '../utils/myContext'
export const handleAddChip = (chip, values, setter) => {
	setter([...values, chip])
}
export const handleDeleteChip = (chip, index, values, setter) => {
	setter(values.filter((c, i) => i !== index))
}


const Skills = (props) => {
	const baseState = React.useContext(DataContext)
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
					value={props.hardSkills}
					onAdd={(chip) => {
						handleAddChip(chip, props.hardSkills, props.setHardSkills)
						baseState.addSkills(chip, "hard")
					}}
					onDelete={(chip, index) => {
						handleDeleteChip(chip, index, props.hardSkills, props.setHardSkills)
						baseState.removeSkills(index, "hard")
					}}
				/>
				<label htmlFor="">Soft skills</label>
				{/* @ts-ignore */}
				<ChipInput
					style={{
						width: "100%",
					}}
					value={props.softSkills}
					onAdd={(chip) => {
						handleAddChip(chip, props.softSkills, props.setSoftSkills)
						baseState.addSkills(chip, "soft")
					}}
					onDelete={(chip, index) => {
						handleDeleteChip(chip, index, props.softSkills, props.setSoftSkills)
						baseState.removeSkills(index, "soft")
					}}
				/>
			</Box>
		</Box >
	)
}

export default Skills