import { Box } from '@mui/material';
import React from 'react'
import { HiUser } from "react-icons/hi";
import { GiOpenBook, GiAchievement } from "react-icons/gi";
import { GrLink } from "react-icons/gr";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { GoProject } from 'react-icons/go'
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

					<HiUser />
					<p>Personal info</p>
				</Box>
				<Box style={{

					maxWidth: "20vw",
					width: "7vw",
					padding: "1em",
					borderRadius: "10px",
					maxHeight: "10vw",
					cursor: "pointer",
					background: "#FFFFFF",
				}} onClick={() => props.setStep(2)}>

					< GiOpenBook />
					<p>Education</p>
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

					<BsFillBriefcaseFill />
					<p>Work Experience</p>

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

					<GoProject />
					<p>Projects</p>

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
					borderRadius: "10px",
					maxHeight: "10vw",
					padding: "1em",
					textAlign: "center",
					cursor: "pointer",
					background: "#FFFFFF",
				}} onClick={() => props.setStep(5)}>

					<GrLink />
					<p>Links</p>

				</Box>
				<Box style={{

					maxWidth: "20vw",
					width: "7vw",
					cursor: "pointer",
					padding: "1em",
					borderRadius: "10px",
					maxHeight: "10vw",
					background: "#FFFFFF",
				}} onClick={() => props.setStep(6)}>

					<GiAchievement />
					<p>Skills</p>

				</Box>
			</Box>
		</Box>

	)
}

export default Sections