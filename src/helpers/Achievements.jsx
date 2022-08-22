// @ts-nocheck
import { Box } from '@mui/material'
import React from 'react'
import ChipInput from 'material-ui-chip-input'
import { Typography } from '@mui/material'
import { handleAddChip, handleDeleteChip } from './Skills'
import DataContext from '../utils/myContext'
const Achievements = (props) => {
	const baseState = React.useContext(DataContext)
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

					Achievements
				</Typography>
			</Box>
			<Box style={{ padding: "10px" }}>
				{/* @ts-ignore */}
				<ChipInput
					fullWidth
					style={{
						width: "100%",
					}}
					value={props.achievements}
					onAdd={(chip) => {
						handleAddChip(chip, props.achievements, props.setAchievements)
						baseState.addSkills(chip, "ach")
					}}
					onDelete={(chip, index) => {

						handleDeleteChip(chip, index, props.achievements, props.setAchievements)
						baseState.removeAchievements(index)
					}
					}
				/>
			</Box>
		</Box >
	)
}

export default Achievements