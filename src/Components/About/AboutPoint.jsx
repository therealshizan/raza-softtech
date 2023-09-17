import { Stack, Typography } from '@mui/material'
import React from 'react'

const AboutPoint = ({title, content}) => {
  return (
    <Stack sx={{color: '#fff'}}>
        <Typography pb={1} variant='h3'>{title}<span className='text-secondary underline font-bold'>.</span></Typography>
        <Typography variant='body1'>{content}</Typography>
    </Stack>
  )
}

export default AboutPoint
