import { Typography } from '@material-ui/core'
import { Box, TextField } from '@mui/material'
import React from 'react'
import EducationContext from '../utils/myContext';

const PersonalDetails = () => {
	const baseState = React.useContext(EducationContext);
	return (
		<div>
			<Typography variant="h5" component="h2" style={{
				textAlign: "start",
				padding: "5px",
				marginBottom: "3px"

			}} >

				Personal Details
			</Typography>
			<hr />
			<Box

				style={{
					display: 'flex',
					flexDirection: "column",
				}}
			>
				<Box style={{
					display: 'flex',
					flexDirection: "row",
					alignItems: "center",
				}}>
					<TextField
						id="name"
						label="Name"
						fullWidth
						required
						style={{
							marginLeft:
								'9px',
							maxWidth: "30em"
						}}
						type="text"
						// @ts-ignore
						value={baseState.basicDetails.name}
						autoComplete="current-name"
						// @ts-ignore
						onChange={e => baseState.addtoBasicDetails("name", e.target.value)}
					/>
					<TextField
						id="job_profile"
						label="Job Profile"
						fullWidth
						required
						style={{
							marginLeft:
								'9px',
						}}
						// @ts-ignore
						value={baseState.basicDetails.profile}
						type="text"
						// @ts-ignore
						onChange={e => baseState.addtoBasicDetails("profile", e.target.value)}
						autoComplete="current-job_profile"
					/>
				</Box>
				<Box style={{
					paddingRight: "10px"
				}}>
					<TextField
						id="email"
						label="Email"
						fullWidth
						style={{
							marginLeft:
								'9px',
							marginTop: "10px",
						}}
						// @ts-ignore
						value={baseState.basicDetails.email}
						type="text"
						autoComplete="current-email"
						required
						// @ts-ignore
						onChange={e => baseState.addtoBasicDetails("email", e.target.value)}
					/>
				</Box>

				<Box
					component="form"
					sx={{
						'& .MuiTextField-root': { m: 1, width: '30ch' },
					}}
					noValidate
					style={{
						display: 'flex',
						flexDirection: "row"
					}}
					autoComplete="off"
				>

					<TextField
						id="phone"
						label="Mobile no."
						type="number"
						autoComplete="current-phoneNumber"
						required

						// @ts-ignore
						value={baseState.basicDetails.phone}
						// @ts-ignore
						onChange={e => baseState.addtoBasicDetails("phone", +(e.target.value))}
					/>

				</Box>

			</Box>
		</div>
	)
}

export default PersonalDetails