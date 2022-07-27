import { Box } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button'
import Education from '../helpers/Education';
import Add from '@mui/icons-material/Add'
import { Typography } from '@material-ui/core';
import EducationContext from '../utils/myContext';
import { v4 as uuidv4 } from 'uuid';

const EducationTitle = (props) => {
	const baseState = React.useContext(EducationContext)
	const [cnt, setCnt] = React.useState(1)
	const handleSaveChanges = () => {
		console.log(props.inputFields)
		// @ts-ignore
		baseState.addtoEducation(props.inputFields)
	}


	const handleAddFields = () => {
		console.log(props.inputFields)
		props.setInputFields(inputFields => [...inputFields, { id: uuidv4(), name: '', cgpa: '' }])
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

					Education
				</Typography>
				<Button variant="contained"
					// @ts-ignore
					onClick={() => handleAddFields()}
					startIcon={<Add />}> Add section</Button>
			</Box>


			{
				props.inputFields.map(inputField => {
					return (
						<>
							<hr />
							< Education props={props} inputFields={props.inputFields} inputField={inputField} setInputFields={props.setInputFields} />
						</>
					)
				})
			}


		</>
	)
}

export default EducationTitle