import React from 'react'
import ChipInput from 'material-ui-chip-input'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
export const handleAddChip = (chip, values, setter) => {
	// @ts-ignore
	setter([...values, chip])
}
export const handleDeleteChip = (chip, index, values, setter) => {
	setter(values.filter((c, i) => i !== index))
}
const Skills = (props) => {

	return (
		<Box
			style={{
				width: "30vw",
			}}
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
					onAdd={(chip) => handleAddChip(chip, props.hardSkills, props.setHardSkills)}
					onDelete={(chip, index) => handleDeleteChip(chip, index, props.hardSkills, props.setHardSkills)}
				/>
				<label htmlFor="">Soft skills</label>
				{/* @ts-ignore */}
				<ChipInput
					style={{
						width: "100%",
					}}
					value={props.softSkills}
					onAdd={(chip) => handleAddChip(chip, props.softSkills, props.setSoftSkills)}
					onDelete={(chip, index) => handleDeleteChip(chip, index, props.softSkills, props.setSoftSkills)}
				/>
			</Box>
		</Box >
	)
}

export default Skills