// @ts-nocheck
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box, TextField } from '@mui/material'
import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DataContext from '../utils/myContext';
import { degreeList } from '../utils/rawData';
import DeleteButton from '../utils/buttons/DeleteButton';


const Education = ({ props, inputField, setInputFields, inputFields }) => {
	const URL = 'http://universities.hipolabs.com/search?name=&country=india'
	const [universityNamesList, setUniversityNamesList] = React.useState([])

	const baseState = useContext(DataContext)
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
			return i;
		})
		newInputFields.map(item => {
			baseState.addtoEducation(item)
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


	return (
		<Box component="div"
			sx={{
				'& .MuiTextField-root': { m: 1, width: '30ch' },
			}}
			style={{
				display: 'flex',
				flexDirection: "column",
			}}
		>
			<Box
				sx={{
					'& .MuiTextField-root': { m: 1, width: '30ch' },
				}}
			>


				<Box component="form"
					sx={{
						'& .MuiTextField-root': { m: 1, width: '30ch' },
					}}
					style={{
						display: 'flex',
						flexDirection: "row"
					}}
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


				</Box>
				<Box component="form"
					sx={{
						'& .MuiTextField-root': { m: 1, width: '65ch', p: 1 },
					}}
					style={{
					}}
				>

					<FormControl style={{ marginTop: "7px", marginLeft: "8px", minWidth: "575px" }}>
						<InputLabel id="demo-simple-select-label">Degree Course Name</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							label="Degree Course Name"
							name="degree"
							value={inputField.degree}
							// @ts-ignore

							onChange={event => handleChangeInput(inputField.id, event)}

						>
							{
								degreeList.map(item => {
									let name;
									console.log("item : ",)
									if (item) {
										// @ts-ignore
										name = item
									}
									return (
										<MenuItem value={name}>{name}</MenuItem>
									)
								})
							}
						</Select>
					</FormControl>

				</Box>
				<Box component="form"
					sx={{
						'& .MuiTextField-root': { m: 1, width: '65ch', p: 1 },
					}}
				>

					<FormControl style={{ marginLeft: "8px", marginTop: "1em", minWidth: "575px" }}>
						<InputLabel id="demo-simple-select-label">Branch Name</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							label="Branch"
							name="branch"
							value={inputField.branch}
							// @ts-ignore

							onChange={event => handleChangeInput(inputField.id, event)}

						>
							{
								degreeList.map(item => {
									let name;
									console.log("item : ",)
									if (item) {
										// @ts-ignore
										name = item
									}
									return (
										<MenuItem value={name}>{name}</MenuItem>
									)
								})
							}
						</Select>
					</FormControl>

				</Box>
			</Box>
			{/* <DeleteIcon
				style={{
					cursor: "pointer",
					marginTop: "22px",
					marginLeft: "5px"
				}}
				onClick={() => handleRemoveFields(inputField.id)} /> */}
			<DeleteButton inputField={inputField} inputFields={inputFields} setInputFields={setInputFields} />

		</Box >
	)
}

export default Education