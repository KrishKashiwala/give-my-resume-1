import { Box } from '@mui/material'
import React from 'react'
import CreateResume from './CreateResume'
import Formdata from './Formdata'
import Sections from './Sections'
import { v4 as uuidv4 } from 'uuid';

const Build = () => {

  const [step, setStep] = React.useState(1)
  const [platform, setPlatform] = React.useState([
    {
      id: uuidv4(),
      name: "",
      link: ""
    }
  ])
  const [educationDetails, setEducationDetails] = React.useState({
    name: '',
    cgpa: ''
  })
  const [inputFields, setInputFields] = React.useState([
    { id: uuidv4(), name: '', cgpa: '' }
  ]);
  const [experienceDetails, setExperienceDetails] = React.useState([{
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
        <Formdata step={step} setStep={setStep} inputFields={inputFields} setInputFields={setInputFields} education={educationDetails} setEducationDetails={setEducationDetails} experienceDetails={experienceDetails} setExperienceDetails={setExperienceDetails} hardSkills={hardSkills} setHardSkills={setHardSkills} softSkills={softSkills} setSoftSkills={setSoftSkills} platform={platform} setPlatform={setPlatform} />
        <CreateResume />
      </Box>

    </Box>
  )
}

export default Build