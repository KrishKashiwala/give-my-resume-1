import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box, TextField } from '@mui/material'
import React, { useContext } from 'react'
import EducationContext from '../utils/myContext';
import DeleteIcon from '@mui/icons-material/Delete';


const Education = ({ props, inputField, setInputFields, inputFields }) => {
	const URL = 'http://universities.hipolabs.com/search?name=&country=india'
	const [universityNamesList, setUniversityNamesList] = React.useState([])


	const firstFetch = async () => {
		await fetch(URL).then(res => res.json()).then(data => {
			setUniversityNamesList(data)
		})

	}


	const handleChangeInput = (id, event) => {
		const newInputFields = inputFields.map(i => {
			if (id === i.id) {
				i[event.target.name] = event.target.value
			}
			console.log(i)
			return i;
		})
		setInputFields(newInputFields);
	}

	const handleRemoveFields = id => {
		const values = [...inputFields];
		values.splice(values.findIndex(value => value.id === id), 1);
		setInputFields(values);
	}

	React.useEffect(() => {
		firstFetch()
	}, [])



	const baseState = useContext(EducationContext)
	return (
		<Box component="div"
			id="edu"

			sx={{
				'& .MuiTextField-root': { m: 1, width: '25ch' },
			}}
			style={{
				display: 'flex',
				flexDirection: "column"
			}}
		>
			<Box component="form"
				sx={{
					'& .MuiTextField-root': { m: 1, width: '25ch' },
				}}
				style={{
					display: 'flex',
					flexDirection: "row"
				}}
				noValidate
				autoComplete="off">


				<TextField
					id="cgpa"
					label="CGPA"
					type="number"
					name="cgpa"
					// @ts-ignore
					value={inputField.cgpa}
					autoComplete="current-cgpa"
					// @ts-ignore
					onChange={event => handleChangeInput(inputField.id, event)}
				/>
				<FormControl fullWidth style={{ marginTop: "7px", minWidth: "300px" }}>
					<InputLabel id="demo-simple-select-label">University Name</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						label="university"
						name="name"
						value={inputField.name}
						// @ts-ignore

						onChange={event => handleChangeInput(inputField.id, event)}

					>
						{
							universityNamesList.map(item => {
								let name;
								if (item) {
									// @ts-ignore
									name = item.name
								}
								return (
									<MenuItem value={name}>{name}</MenuItem>
								)
							})
						}
					</Select>
				</FormControl>
				<DeleteIcon
					style={{
						cursor: "pointer",
						marginTop: "22px",
						marginLeft: "5px"
					}}
					onClick={() => handleRemoveFields(inputField.id)} />

			</Box>




		</Box >
	)
}

export default Education