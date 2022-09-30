// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit'

import { v4 as uuidv4 } from 'uuid';
const initialState = {
	personalDetails: {
		name: '',
		profile: "",
		email: "",
		mobileNo: "",
		aboutMe: ""
	},
	education:
	{
		id: "",
		cgpa: "",
		university: "",
		degree: "",
		branch: ""
	}
	,
	experience: [{
		id: uuidv4(),
		company: '',
		title: "",
		description: "",
		startDate: new Date(),
		endDate: new Date()
	}],
	links: {
		linkedin: "",
		website: ""
	},
	skills: {
		hardSkills: [],
		softSkills: [],
		achievements: [],
	},
	step: 1

}

export const formSlice = createSlice({
	name: 'formReducer',
	initialState,
	reducers: {
		addNewExperience: (state, action) => {
			console.log("new input: ", action.payload)
			state.experience.push(action.payload)
		},
		updatePersonalDetails: (state, action) => {
			const keys = Object.keys(action.payload);
			keys.map(key => {
				state.personalDetails[key] = action.payload[key]
			})
		},
		updateDropDownDetails: (State, action) => {
		},
		updateExperienceDetails: (state, action) => {
			console.log("action.payload: ", action.payload)
			const idx = state.experience.find(item => item.id === action.payload.id)
			if (idx) {
				console.log("found idx", idx)
				let foundMap = state.experience.filter(item => item.id === action.payload.id)
				console.log("foundMap: ", foundMap)
			}

		},
		updateStep: (state, action) => {
			state.step = action.payload
		},
		updateSkillDetails: (state, action) => {
			console.log("action", action);
			switch (action.payload.type) {

				case "hardSkills": {
					state.skills[action.payload.type].push(action.payload.skill);
					break;
				}
				case "softSkills": state.skills[action.payload.type].push(action.payload.skill);
					break;
				case "achievements": state.skills[action.payload.type].push(action.payload.skill);
				default: return state;
			}

		},
		updateSocialLinks: (state, action) => {
			const keys = Object.keys(action.payload);
			console.log(keys)
			keys.map(key => {
				state.links[key] = action.payload[key]
			})
		},
		removeSkillDetails: (state, action) => {
			const idx = state.skills[action.payload.type].indexOf(action.payload.skill);
			state.skills[action.payload.type].splice(idx, 1)
		},
		removeExperienceDetails: (state, action) => {
			state.experience.filter(item => item.id !== action.payload.experience.id)
			console.log(state.experience)
		}



	},
})

export const { addNewExperience, updatePersonalDetails, updateStep, updateSkillDetails, updateSocialLinks, updateExperienceDetails, removeExperienceDetails, removeSkillDetails } = formSlice.actions

export default formSlice.reducer