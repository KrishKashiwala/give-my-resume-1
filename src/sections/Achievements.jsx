import { Box } from '@mui/material'
import React from 'react'
import ChipInput from 'material-ui-chip-input'
import { Typography } from '@mui/material'

import { removeSkillDetails, updateSkillDetails } from '../redux/formSlice'
import { useDispatch, useSelector } from 'react-redux'


const Achievements = (props) => {
	const dispatch = useDispatch()
	// @ts-ignore
	const reduxStore = useSelector(state => state.formState)



	const handleSkillInputChange = (type, skill) => {
		dispatch(updateSkillDetails({ type, skill }))
	}
	const handleDeleteSkillChange = (type, skill) => {
		dispatch(removeSkillDetails({ type, skill }))
	}

	return (

		<div className="achievements_container" >
			<Typography variant="h5" component="h2" style={{
				textAlign: "left",
				marginBottom: "1em"
			}} >

				Achievements
			</Typography>
			{/* @ts-ignore */}
			<ChipInput
				fullWidth
				value={reduxStore.skills.achievements}
				onAdd={(chip) => {
					handleSkillInputChange("achievements", chip)
				}}
				onDelete={(chip, index) => {

					handleDeleteSkillChange("achievements", chip)
				}
				}

			/></div >
	)
}

export default Achievements