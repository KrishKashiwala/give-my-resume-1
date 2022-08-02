// @ts-nocheck
import { TextField } from '@mui/material'
import React from 'react'
import DataContext from '../utils/myContext'

const TextLink = (props) => {
	const baseState = React.useContext(DataContext)
	const handleChangeInput = (id, event) => {
		const newInputFields = props.platforms.map(i => {
			if (id === i.id) {
				i[event.target.placeholder] = event.target.value
			}
			return i;
		})
		props.setPlatform(newInputFields);
		baseState.addPlatform(newInputFields)

	}
	return (

		<>
			<TextField name={props.platform} placeholder="link" label={`${props.platform} link`} style={{ marginTop: "5px" }} onChange={(e) => {
				handleChangeInput(props.id, e)
			}} />
		</>

	)
}

export default TextLink