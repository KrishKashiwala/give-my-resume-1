// @ts-nocheck
import React from 'react'
import { createContext } from 'react';
const DataContext = createContext({})
export function DataProvider({ children }) {
	const [education, setEducation] = React.useState([])
	const [achievements, setAchievements] = React.useState([])
	const [basicDetails, setBasicDetails] = React.useState({
		name: '',
		email: '',
		profile: ''
	})
	const [experience, setExperience] = React.useState([{
		id: "",
		company: '',
		title: "",
		startDate: "",
		endDate: "",
		description: ""
	}])
	const [hardSkills, setHardSkills] = React.useState([])
	const [softSkills, setSoftSkills] = React.useState([])
	const [sectionId, setSectionId] = React.useState(0);
	const [website, setWebsite] = React.useState('')
	const [linkedin, setLinkedin] = React.useState('')

	const addPlatform = (platform, val) => {
		switch (platform) {
			case 'website': setWebsite(val); return
			case 'linkedin': setLinkedin(val); return
		}
	}


	const addtoEducation = (obj) => {
		let flag = checkUpdateEdu(obj)
		if (!flag) {
			const newMap = [...education]
			newMap.push(obj)
			setEducation(newMap)
		}

	}


	const checkUpdateEdu = (obj) => {
		const index = education.findIndex(item => item.id === obj.id)
		if (index > -1) {
			const newEduMap = [...education]
			newEduMap[index] = obj
			setEducation(newEduMap)
			return true;
		} else return false

	}
	const addtoBasicDetails = (key, payload) => {

		switch (key) {

			case "phone":
				setBasicDetails({
					...basicDetails,
					phone: payload
				})
				return;
			case "email":
				setBasicDetails({
					...basicDetails,
					email: payload,
				})
				return;
			case "name":
				setBasicDetails({
					...basicDetails,
					name: payload
				})
				return;
			case "profile":
				setBasicDetails({
					...basicDetails,
					profile: payload
				})
				return;
			default: return;
		}
	}


	//skills
	const addSkills = (val, skillType) => {
		console.log(skillType)
		switch (skillType) {
			case "hard":
				setHardSkills([...hardSkills, val])
				return;
			case "soft":
				setSoftSkills([...softSkills, val])
				return
			case "ach":
				setAchievements([...achievements, val])
				return;

		}
	}
	//remove skills
	const removeSkills = (index, skillType) => {
		switch (skillType) {
			case "hard": {
				setHardSkills(hardSkills.filter((c, i) => i !== index))
				return;
			}
			case "soft": {
				setSoftSkills(softSkills.filter((c, i) => i !== index))
				return;
			}
			default: return;
		}
	}

	//remove achievements
	const removeAchievements = (index) => {
		setAchievements(achievements.filter((c, i) => i !== index))
	}

	//add experience
	const addToExperience = (obj) => {
		let flag = checkAndUpdateExperience(obj)
		if (!flag) {
			const newMap = [...experience]
			newMap.push(obj)
			setExperience(newMap)
		}

	}


	//update experience
	const checkAndUpdateExperience = (obj) => {
		const index = experience.findIndex(item => item.id === obj.id)
		if (index > -1) {
			const newExpMap = [...experience]
			newExpMap[index] = obj
			setExperience(newExpMap)
			return true;
		} else return false
	}


	return (
		<DataContext.Provider value={{
			achievements, experience, education, addtoEducation, hardSkills, softSkills, addSkills, removeSkills, basicDetails, addtoBasicDetails, sectionId, removeAchievements, addPlatform, website, linkedin,
			addToExperience, setSectionId
		}}>{children}</DataContext.Provider>
	)
}
export default DataContext