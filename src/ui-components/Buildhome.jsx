import { Box } from '@mui/material'
import React from 'react'
import Build from './Build'
import '../css/main.css'

const Buildhome = () => {
	return (
		<Box style={{
			display: "flex",
			flexDirection: "column",
		}} className="main">

			<Box style={{
			}}>
				<Build />
			</Box>
		</Box>
	)
}

export default Buildhome