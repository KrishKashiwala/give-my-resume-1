import React from 'react'
import { Box, Button, Typography } from '@mui/material'

import { v4 as uuidv4 } from 'uuid';
import Add from '@mui/icons-material/Add'
import Experience from './Experience'
const ExperienceTitle = ({ expDetails, setExpDetails }) => {
	const handleAddFields = () => {
		setExpDetails(inputFields => [...expDetails,
		{ company: "", title: "", startDate: "", endDate: "", description: "", id: uuidv4() }])
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
					startIcon={<Add />} onClick={handleAddFields}> Add section</Button>
			</Box>

			{
				expDetails.map(item => {
					return (
						<>
							<hr />
							<Experience expDetail={item} expDetails={expDetails} setExpDetails={setExpDetails} />

						</>

					)
				})

			}
		</>
	)
}

export default ExperienceTitle