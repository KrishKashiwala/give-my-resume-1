import { Typography } from '@material-ui/core'
import { Box, TextField } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePersonalDetails } from '../redux/formSlice';

const PersonalDetails = () => {
	// @ts-ignore
	const reduxStore = useSelector(state => state.formState)
	const dispatch = useDispatch()
	const [personalDetails, setPersonalDetails] = useState({
		name: reduxStore.personalDetails.name,
		profile: reduxStore.personalDetails.profile,
		email: reduxStore.personalDetails.email,
		mobileNo: reduxStore.personalDetails.mobileNo,
		aboutMe: reduxStore.personalDetails.aboutMe
	})
	const handleDispatch = () => {
		dispatch(updatePersonalDetails(personalDetails))
	}

	const handleInputChange = (e) => {
		setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value })
	}

	useEffect(() => {
		handleDispatch()
	}, [reduxStore.step, personalDetails])

	return (
		<Box sx={{
			'& .MuiTextField-root': { m: 1, width: '30ch' },

		}} >
			<Typography variant="h5" component="h2" style={{
				textAlign: "start",
				padding: "5px",
				marginBottom: "3px"

			}} >

				Personal Details
			</Typography>
			<hr />

			<div className='input_container'>
				<label htmlFor="">Name</label>
				<input type="text" className="input_class"
					onChange={e => handleInputChange(e)}
					value={personalDetails.name}
					name="name"
				/>
			</div>
			<div className='input_container'>
				<label htmlFor="">Profile</label>
				<input type="text" className="input_class"
					onChange={e => handleInputChange(e)}
					value={personalDetails.profile}
					name="profile"
				/>
			</div>
			<div className='input_container'>
				<label htmlFor="">Email</label>
				<input type="text" className="input_class"
					onChange={e => handleInputChange(e)}
					value={personalDetails.email}
					name="email"
				/>
			</div>

			<div className='input_container'>
				<label htmlFor="">Mobile no.</label>
				<input type="number" className="input_class"
					onChange={e => handleInputChange(e)}
					value={personalDetails.mobileNo}
					name="mobileNo"
				/>
			</div>
			<div className='input_container'>
				<label htmlFor="">About Me</label>
				<textarea maxLength={200} className="input_class"
					onChange={e => handleInputChange(e)}
					value={personalDetails.aboutMe}
					name="aboutMe"
				/>
			</div>

		</Box >
	)
}

export default PersonalDetails