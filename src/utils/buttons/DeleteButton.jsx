import React from 'react'
import styles from '../css/deletebutton.module.css'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { handleRemoveFields } from '../../helpers/global'
import { useDispatch } from 'react-redux'
import { removeExperienceDetails } from '../../redux/formSlice'

const DeleteButton = ({ experience }) => {
	const dispatch = useDispatch()
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

			}} className={styles.deleteButton} onClick={() => dispatch(removeExperienceDetails({ experience }))}>

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