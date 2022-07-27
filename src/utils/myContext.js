// @ts-nocheck
import React from 'react'
import { createContext } from 'react';
const EducationContext = createContext({})
export function EducationProvider({ children }) {
	const [education, setEducation] = React.useState([])
	const [basicDetails, setBasicDetails] = React.useState({
		name: '',
		phone: -1,
		email: '',
		profile: ''
	})
	const [sectionId, setSectionId] = React.useState(0);
	const incrementSectionId = () => {
		setSectionId(sectionId => sectionId + 1)
	}



	const addtoEducation = (arr) => {
		setEducation(education => [...education, arr])
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
		}
	}

	return (
		<EducationContext.Provider value={{ education, addtoEducation, basicDetails, addtoBasicDetails, sectionId, setSectionId }}>{children}</EducationContext.Provider>
	)
}
export default EducationContext