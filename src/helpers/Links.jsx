import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import TextLink from './TextLink'
import DeleteIcon from '@mui/icons-material/Delete';
const Links = (props) => {
	const handleChangeInput = (id, event) => {
		const newInputFields = props.platforms.map(i => {
			if (id === i.id) {
				i[event.target.name] = event.target.value
			}
			return i;
		})
		props.setPlatform(newInputFields);
	}
	const handleRemoveFields = id => {
		const values = [...props.platforms];
		values.splice(values.findIndex(value => value.id === id), 1);
		props.setPlatform(values);
	}
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


			<TextLink platform={props.platform.name} />
			<DeleteIcon
				style={{
					cursor: "pointer",
					marginTop: "22px",
					marginLeft: "5px"
				}}
				onClick={() => handleRemoveFields(props.platform.id)} />
		</Box >
	)
}

export default Links