
import { Button, Box } from '@mui/material'
import React from 'react'
import { Typography } from '@material-ui/core';
import Add from '@mui/icons-material/Add'
import Links from './Links'
import { v4 as uuidv4 } from 'uuid';

const LinksWrapper = (props) => {

	const handlePlatformFields = () => {
		props.setPlatform(platform => [...platform, { id: uuidv4(), name: "", link: "" }])
	}
	return (
		<Box style={{
			padding: "10px",
		}}>
			<Box style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "5px"
			}}>
				<Typography variant="h5" component="h2" style={{
					textAlign: "center",
				}} >

					Social Links
				</Typography>
				<Button variant="contained"
					// @ts-ignore
					onClick={() => handlePlatformFields()}
					startIcon={<Add />}> Add section</Button>
			</Box>
			{
				props.platform.map(platform => {
					return (

						<Links platform={platform} platforms={props.platform} setPlatform={props.setPlatform} />
					)
				})
			}
		</Box>

	)

}

export default LinksWrapper