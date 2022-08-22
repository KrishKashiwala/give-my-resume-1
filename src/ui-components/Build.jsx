// @ts-nocheck
import { Box } from '@mui/material'
import React from 'react'
import CreateResume from './CreateResume'
import Formdata from './Formdata'
import Sections from './Sections'
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react'
import DataContext from '../utils/myContext'

const Build = () => {
  const baseState = useContext(DataContext)
  const [achievements, setAchievements] = React.useState([])
  const [step, setStep] = React.useState(1)
  const [website, setWebsite] = React.useState('')
  const [linkedin, setLinkedin] = React.useState('')
  const [educationDetails, setEducationDetails] = React.useState({
    name: '',
    cgpa: ''
  })
  const [inputFields, setInputFields] = React.useState([
    { id: uuidv4(), name: '', cgpa: '' }
  ]);
  const [experience, setExperience] = React.useState([{
    id: uuidv4(),
    company: '',
    title: "",
    startDate: "",
    endDate: "",
    description: ""
  }])
  const [hardSkills, setHardSkills] = React.useState([])
  const [softSkills, setSoftSkills] = React.useState([])



  return (
    <Box style={{
      display: 'flex',
      flexDirection: 'column',
      resize: "both",
      padding: "5em 2em",

    }}>
      <Box style={{
        display: "flex",
        padding: "3em",
        alignItems: "start",
        gap: "15em",
        color: "#ffffff",
        fontWeight: "bold"
      }}>
        <Box style={{
          width: "10%"
        }}>
          Sections
        </Box>
        <Box style={{
          marginRight: "18em"
        }}>Fill different section details</Box>
        <Box >Resume Preview</Box>
      </Box>
      <Box style={{
        display: 'flex',
        gap: "2em"
      }}>
        <Sections step={step} setStep={setStep} />
        <Formdata step={step} setStep={setStep} achievements={achievements} setAchievements={setAchievements} inputFields={inputFields} setInputFields={setInputFields} education={educationDetails} setEducationDetails={setEducationDetails} experience={experience} setExperience={setExperience} hardSkills={hardSkills} setHardSkills={setHardSkills} softSkills={softSkills} setSoftSkills={setSoftSkills} website={website} setWebsite={setWebsite} linkedin={linkedin} setLinkedin={setLinkedin} />
        <CreateResume />

      </Box>

    </Box>
  )
}

export default Build