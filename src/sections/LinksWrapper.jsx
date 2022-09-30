import React, { useEffect, useState } from 'react'
import { updateSocialLinks } from '../redux/formSlice';
import { useDispatch, useSelector } from 'react-redux';


const LinksWrapper = (props) => {

	// @ts-ignore
	const reduxStore = useSelector(state => state.formState)
	const dispatch = useDispatch()
	const [links, setLinks] = useState({
		website: reduxStore.links.website,
		linkedin: reduxStore.links.linkedin
	})
	const handleDispatch = () => {
		dispatch(updateSocialLinks(links))
	}

	useEffect(() => {
		handleDispatch()
	}, [reduxStore.step, links])


	return (
		<div>
			<div className='input_container'>
				<label htmlFor="">Website</label>
				<input type="text" className='input_class' onChange={(e) => {
					setLinks({ ...links, website: e.target.value })

				}} /></div>
			<div className='input_container'>
				<label htmlFor="">Linkedin</label>
				<input type="text" className='input_class' onChange={(e) => {
					setLinks({ ...links, linkedin: e.target.value })

				}} /></div>

		</div>

	)

}

export default LinksWrapper