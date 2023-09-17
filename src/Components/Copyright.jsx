import { Box, Typography } from '@mui/material'
import React from 'react'
import theme from '../theme'

const Copyright = () => {
  return (
    <Box className="text-white bg-accent border-t" sx={{ px: 10, py: 5, [theme.breakpoints.down("md")]: { p: 5 } }}>
      <Typography align={'center'} className='uppercase'>© Copyright <a href="/" className="text-secondary">Raza Software & Technologies</a>. All Rights Reserved</Typography>
    </Box>
  )
}

export default Copyright
