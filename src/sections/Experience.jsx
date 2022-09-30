
import "react-datepicker/dist/react-datepicker.css";
import DataContext from '../utils/myContext';
import DeleteButton from '../utils/buttons/DeleteButton';
import { useDispatch, useSelector } from 'react-redux';
import { addNewExperience, updateExperienceDetails } from '../redux/formSlice';
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

const Experience = ({ item }) => {
	// @ts-ignore
	const reduxStore = useSelector(state => state.formState)
	const dispatch = useDispatch()

	const handleDispatch = () => {
		if (experience.title !== "" && experience.company !== "" && experience.description !== "") {

			dispatch(updateExperienceDetails(experience))
		}

	}


	console.log("item: ", item)
	// continue from here and make the redux store work with other experience fields , education section and think about proects section

	const [experience, setExperience] = useState({
		id: item.id,
		company: '',
		title: "",
		description: "",
		startDate: item.startDate,
		endDate: item.endDate
	})

	useEffect(() => {
		handleDispatch()
	}, [experience])

	console.log("experience: ", reduxStore.experience)
	// console.log("local experience: ", experience)

	return (

		<div className='multi_section_container'>
			<div>
				<label htmlFor="">Title</label>
				<input type="text" className='input_class'
					value={experience.title}
					onChange={(e) => setExperience({ ...experience, title: e.target.value })}
				/>
			</div>
			<div>
				<label htmlFor="">Company name</label>
				<input type="text" className='input_class'
					value={experience.company}
					onChange={(e) => setExperience({ ...experience, company: e.target.value })}
				/>
			</div>
			<div>
				<label htmlFor="">Description</label>
				<textarea rows={5} cols={20} className='input_class'
					value={experience.description}
					onChange={(e) => setExperience({ ...experience, description: e.target.value })}
				/>
			</div>

			<div className="experience_duration">
				from

				<DatePicker selected={experience.startDate} onChange={(date) => setExperience({
					...experience, startDate: date
				})} />

				to
				<DatePicker selected={experience.endDate} onChange={(date) => setExperience({
					...experience, endDate: date
				})} />

			</div>



			<DeleteButton experience={item} />
		</div>



	)
}

export default Experience