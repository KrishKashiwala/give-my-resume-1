import { Box } from '@mui/material'
import React from 'react'
import CreateResume from './CreateResume'
import Formdata from './Formdata'
import Sections from './Sections'

const Build = () => {
  return (
    <Box style={{
      display: 'flex',
    }}>
      <Sections />
      <Formdata />
      <CreateResume />
    </Box>
  )
}

export default Build