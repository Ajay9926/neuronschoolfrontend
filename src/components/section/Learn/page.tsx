import { Box } from '@mui/material'
import React from 'react'

const Learn = () => {
  return (
    <Box >
      <video
        src="/Videos/Learn.mp4" 
        autoPlay
        muted
        loop
        className='learn-vid'
      />
    </Box>
  )
}

export default Learn
