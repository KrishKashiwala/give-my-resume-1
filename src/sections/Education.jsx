// @ts-nocheck
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DataContext from '../utils/myContext';
import { degreeList } from '../utils/rawData';
import DeleteButton from '../utils/buttons/DeleteButton';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

const Education = ({ props, inputField, setInputFields, inputFields }) => {
	const URL = 'http://universities.hipolabs.com/search?name=&country=india'
	const [universityNamesList, setUniversityNamesList] = React.useState([])
	const [customDrop, setCustomDrop] = React.useState(false)
	const baseState = useContext(DataContext)
	const firstFetch = async () => {
		await fetch(URL).then(res => res.json()).then(data => {
			setUniversityNamesList(data)
		})

	}

	//new code
	const reduxStore = useSelector(state => state.formState)
	const [university, setUniversity] = useState()

	const [educationDetails, setEducationDetails] = useState([
		{
			id: uuidv4(),
			name: "",
			cgpa: "",
			degree: "",
			branch: ""
		}
	])

	const handleEducationInputChange = (e, id) => {
		const newInputMap = educationDetails.map(item => {
			// if (item.id === id)
		})
		setCustomDrop(!customDrop)
	}

	const changeRepoSort = (sortType) => {
		setCustomDrop(false)
	};

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
					{/* <FormControl fullWidth style={{ marginTop: "7px", minWidth: "300px" }}>
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
					</FormControl> */}
					<div className="dropdown">
						<button className="button_dropdown" onClick={() => setCustomDrop(!customDrop)}>
							<label>university</label>
							<svg aria-hidden="true" height="16" role="img" viewBox="0 0 12 16" width="12" ><path fill-rule="evenodd" d="M0 5l6 6 6-6H0z"></path></svg>
						</button>
						{
							customDrop && <ul>
								{universityNamesList.map((item, type) => (
									<li name="university" onClick={(e) => {
										setUniversity(e.target.value)
										setCustomDrop(!customDrop)
									}}>{item.name}</li>
								))}
							</ul>
						}

					</div>

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

			<DeleteButton inputField={inputField} inputFields={inputFields} setInputFields={setInputFields} />

		</Box >
	)
}

export default Education