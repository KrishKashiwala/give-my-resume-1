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
	const [platform, setPlatform] = React.useState([
		{
			id: "",
			name: "",
			link: ""
		}
	])



	//add platform
	const addPlatform = (obj) => {
		let flag = checkAndUpdatePlatform(obj)
		if (!flag) {
			const newMap = [...education]
			newMap.push(obj)
			setPlatform(newMap)
		}

	}


	//remove platform
	const removePlatform = (id) => {
		const arr = platform.filter(item => item.id === id)
		console.log(arr)
	}

	const checkAndUpdatePlatform = (obj) => {
		const index = platform.findIndex(item => item.id === obj.id)
		if (index > -1) {
			const newEduMap = [...platform]
			newEduMap[index] = obj
			setPlatform(newEduMap)
			return true;
		} else return false
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
			achievements, platform, experience, removePlatform, addPlatform, education, addtoEducation, hardSkills, softSkills, addSkills, removeSkills, basicDetails, addtoBasicDetails, sectionId,
			addToExperience, setSectionId
		}}>{children}</DataContext.Provider>
	)
}
export default DataContext