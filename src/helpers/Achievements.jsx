import { Box } from '@mui/material'
import React from 'react'
import ChipInput from 'material-ui-chip-input'
import { Typography } from '@mui/material'
import { handleAddChip, handleDeleteChip } from './Skills'
const Achievements = () => {
	const [achievements, setAchievements] = React.useState([])
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
					style={{
						width: "100%",
					}}
					value={achievements}
					onAdd={(chip) => handleAddChip(chip, achievements, setAchievements)}
					onDelete={(chip, index) => handleDeleteChip(chip, index, achievements, setAchievements)}
				/>
			</Box>
		</Box >
	)
}

export default Achievements