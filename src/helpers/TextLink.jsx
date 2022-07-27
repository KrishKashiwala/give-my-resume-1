import { TextField } from '@mui/material'
import React from 'react'

const TextLink = (props) => {
	return (
		<>
			<TextField name={props} label={`${props.platform} link`} style={{ marginTop: "5px" }} />
		</>

	)
}

export default TextLink