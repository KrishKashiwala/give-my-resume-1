// @ts-nocheck
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import TextLink from './TextLink'
import DeleteIcon from '@mui/icons-material/Delete';
import DataContext from '../utils/myContext';
const Links = (props) => {
	const baseState = React.useContext(DataContext)
	const handleChangeInput = (id, event) => {
		const newInputFields = props.platforms.map(i => {
			if (id === i.id) {
				i[event.target.name] = event.target.value
			}
			return i;
		})
		props.setPlatform(newInputFields);
		baseState.addPlatform(newInputFields)

	}
	const handleRemoveFields = id => {
		const values = [...props.platforms];
		values.splice(values.findIndex(value => value.id === id), 1);
		props.setPlatform(values);
	}
	console.log("ui platform", baseState.platform)
	return (

		<Box style={{
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			gap: "5px"

		}}>

			<FormControl style={{ marginTop: "7px", width: "200px" }}>
				<InputLabel id="demo-simple-select-label">Platform</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					label="platform"
					name="name"
					value={props.platform.name}
					onChange={e => handleChangeInput(props.platform.id, e)}

				>
					<MenuItem value="website">Website</MenuItem>
					<MenuItem value="linkedin">Linkedin</MenuItem>

				</Select>
			</FormControl>


			<TextLink id={props.platform.id} platform={props.platform.name} platforms={props.platforms} setPlatform={props.setPlatform} />
			<DeleteIcon
				style={{
					cursor: "pointer",
					marginTop: "22px",
					marginLeft: "5px"
				}}
				onClick={() => {
					handleRemoveFields(props.platform.id)
					baseState.removePlatform(props.platform.id)
				}} />
		</Box >
	)
}

export default Links