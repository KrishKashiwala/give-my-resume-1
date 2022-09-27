// @ts-nocheck
import { Box, TextField } from '@mui/material'
import React from 'react'
import { Typography } from '@material-ui/core';
import DataContext from '../utils/myContext';


const LinksWrapper = (props) => {
	const baseState = React.useContext(DataContext)
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

			</Box>
			<Box style={{

				display: "flex",
				flexDirection: "column",
				gap: "3em",
				padding: "10px 10px"
			}}>
				<TextField id="website" value={props.website} label="website link" fullWidth variant="standard" onChange={(e) => {
					props.setWebsite(e.target.value)
					baseState.addPlatform("website", e.target.value)

				}} />
				<TextField id="linkedin" value={props.linkedin}
					label="linkedin link" fullWidth variant="standard" onChange={(e) => {
						props.setLinkedin(e.target.value)
						baseState.addPlatform("linkedin", e.target.value)
					}}
				/>
			</Box>
		</Box>


	)

}

export default LinksWrapper