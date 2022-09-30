import { Box } from '@mui/material';
import React from 'react'
import User from '../images/user.svg'
import Work from '../images/work.svg'
import Education from '../images/education.svg'
import Project from '../images/project.svg'
import Achievement from '../images/skill.svg'
import Link from '../images/link.svg'
const Sections = (props) => {
	return (
		<Box style={{
			display: 'flex',
			alignItems: "flex-start",
			flexDirection: "column",
			gap: "1em",
			padding: "0 1em",

		}}>
			<Box style={{
				display: 'flex',
				alignItems: "center",
				justifyContent: "center",
				padding: "0.5em",
				textAlign: "center",
				gap: "3em"
			}}>
				<Box style={{

					maxWidth: "20vw",
					width: "7vw",
					padding: "0.5em",
					borderRadius: "10px",
					cursor: "pointer",
					maxHeight: "15vw",
					height: "6em",
					background: "#FFFFFF",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}} onClick={() => props.setStep(1)}>
					<img src={User} alt="user_img" />
				</Box>

				<Box style={{

					maxWidth: "20vw",
					width: "7vw",
					padding: "0.5em",
					borderRadius: "10px",
					cursor: "pointer",
					maxHeight: "15vw",
					height: "6em",
					background: "#FFFFFF",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}} onClick={() => props.setStep(2)}>

					<img src={Education} alt="user_img" />
				</Box>
			</Box>
			<Box style={{
				display: 'flex',
				padding: "0.5em",
				textAlign: "center",
				alignItems: "center",
				justifyContent: "center",
				gap: "3em",
			}}>
				<Box style={{

					maxWidth: "20vw",
					width: "7vw",
					padding: "0.5em",
					borderRadius: "10px",
					cursor: "pointer",
					maxHeight: "15vw",
					height: "6em",
					background: "#FFFFFF",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}} onClick={() => props.setStep(3)}>

					<img src={Work} alt="user_img" />

				</Box>
				<Box style={{

					maxWidth: "20vw",
					width: "7vw",
					padding: "0.5em",
					borderRadius: "10px",
					cursor: "pointer",
					maxHeight: "15vw",
					height: "6em",
					background: "#FFFFFF",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}} onClick={() => props.setStep(4)}>

					<img src={Project} alt="user_img" />
				</Box>

			</Box>
			<Box
				style={{
					display: 'flex',
					alignItems: "center",
					justifyContent: "center",
					padding: "0.5em",
					textAlign: "center",
					gap: "3em"
				}}
			>
				<Box style={{
					maxWidth: "20vw",
					width: "7vw",
					padding: "0.5em",
					borderRadius: "10px",
					cursor: "pointer",
					maxHeight: "15vw",
					height: "6em",
					background: "#FFFFFF",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}} onClick={() => props.setStep(5)}>

					<img src={Link} alt="user_img" />

				</Box>
				<Box style={{

					maxWidth: "20vw",
					width: "7vw",
					padding: "0.5em",
					borderRadius: "10px",
					cursor: "pointer",
					maxHeight: "15vw",
					height: "6em",
					background: "#FFFFFF",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}} onClick={() => props.setStep(6)}>

					<img src={Achievement} alt="user_img" />

				</Box>
			</Box>
		</Box >

	)
}

export default Sections