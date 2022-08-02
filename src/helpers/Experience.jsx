// @ts-nocheck
import { Box, TextField } from '@mui/material';
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DatePicker from 'react-date-picker';
import DataContext from '../utils/myContext';

const Experience = (props) => {
	const baseState = React.useContext(DataContext)
	const [startDate, setStartDate] = React.useState(new Date('2022-07-30T21:11:54'))
	const [endDate, setEndDate] = React.useState(new Date('2022-07-30T21:11:54'))

	const handleChangeInput = (id, event) => {
		const newInputFields = props.expDetails.map(i => {
			if (id === i.id) {
				console.log("i : ", i[event.target])
				i[event.target.name] = event.target.value
			}
			return i;
		})
		console.log("field : ", newInputFields)
		newInputFields.map(item => {
			baseState.addToExperience(item)
		})
		props.setExpDetails(newInputFields);
	}
	const handleRemoveFields = id => {
		const values = [...props.expDetails];
		values.splice(values.findIndex(value => value.id === id), 1);
		props.setExpDetails(values);
	}
	console.log(baseState.experience)
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
			<Box sx={{
				'& .MuiTextField-root': { m: 1, width: '65ch' },
			}}
			><TextField
					id="title"
					label="Job Title"
					type="text"
					fullWidth
					name="title"
					value={props.expDetail.title}
					onChange={(e) => handleChangeInput(props.expDetail.id, e)}
					autoComplete="current-title"
				/>
			</Box>
			<Box component="form"
				sx={{
					'& .MuiTextField-root': { m: 1, width: '65ch' },
				}}
				style={{
					display: 'flex',
					flexDirection: "row"
				}}
				noValidate
				autoComplete="off">


				<TextField
					id="company"
					label="Company"
					type="text"
					fullWidth
					name="company"
					value={props.expDetail.company}
					onChange={(e) => handleChangeInput(props.expDetail.id, e)}
					autoComplete="current-company"
				/>
			</Box>
			<Box
				sx={{
					'& .MuiTextField-root': { m: 1, width: '65ch' },
				}}
			>

				<TextField name="description" value={props.expDetail.description} onChange={(e) => handleChangeInput(props.expDetail.id, e)} multiline variant="outlined" placeholder="Description" rows={5} maxRows={20} />
			</Box>

			<Box
				sx={{
					'& .MuiTextField-root': { m: 1, width: '65ch' },
				}}
				style={{
					display: 'flex',
					alignItems: "center",
					justifyContent: "space-around",
					padding: "10px"

				}}
			>
				from
				<input type="date" value={props.expDetail.startDate} name="startDate" onChange={(e) => handleChangeInput(props.expDetail.id, e)} /> to
				<input type="date" value={props.expDetail.endDate} name="endDate" onChange={(e) => handleChangeInput(props.expDetail.id, e)} />

			</Box>

			<Box style={{
				display: 'flex',
				padding: "5px",
				justifyContent: "flex-end",
				width: "100%"
			}}>
				<DeleteIcon style={{
					cursor: "pointer",

				}} onClick={() => handleRemoveFields(props.expDetail.id)} />
			</Box>




		</Box >



	)
}

export default Experience