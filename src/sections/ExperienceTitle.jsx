import React from 'react'
import { Box, Button, Typography } from '@mui/material'

import { v4 as uuidv4 } from 'uuid';
import Add from '@mui/icons-material/Add'
import Experience from './Experience'
import { useDispatch, useSelector } from 'react-redux';
import { addNewExperience } from '../redux/formSlice';
const ExperienceTitle = ({ expDetails, setExpDetails }) => {
	const dispatch = useDispatch()
	// @ts-ignore
	const reduxStore = useSelector(state => state.formState)
	const handleNewExperienceSection = () => {
		dispatch(addNewExperience({
			id: uuidv4(),
			company: '',
			title: '',
			description: '',
			startDate: new Date(),
			endDate: new Date()

		}))
	}
	return (
		<>
			<Box style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "5px"
			}}>
				<Typography variant="h5" component="h2" style={{
					textAlign: "center",
				}} >

					Experience
				</Typography>
				<Button variant="contained"
					// @ts-ignore
					startIcon={<Add />} onClick={handleNewExperienceSection}> Add section</Button>
			</Box>

			{
				reduxStore.experience.map(item => {
					return (
						<>
							<hr />
							<Experience item={item} />

						</>

					)
				})

			}
		</>
	)
}

export default ExperienceTitle