import React from 'react'
import styles from '../css/deletebutton.module.css'
import { RiDeleteBin7Line } from 'react-icons/ri'

const DeleteButton = ({ inputField, inputFields, setInputFields }) => {
	const handleRemoveFields = Id => {
		const values = [...inputFields];
		values.splice(values.findIndex(value => value.id === Id), 1);
		setInputFields(values);
	}
	return (
		<div>
			<button style={{
				padding: "8px",
				borderRadius: "25px",
				color: "#ffffff",
				width: "8em",
				marginTop: "2em",
				marginLeft: "75%",
				outline: "brown",
				border: "#ffffff",
				display: "flex",
				justifyContent: "space-evenly",
				gap: "5px",
				alignItems: "center",
				textAlign: "center"

			}} className={styles.deleteButton} onClick={() => handleRemoveFields(inputField.id)}>

				<RiDeleteBin7Line />
				<span style={{
					backgroundColor: "#ffffff",
					height: "1.2em",
					width: "1px"
				}}></span>
				Remove
			</button>
		</div>
	)
}

export default DeleteButton