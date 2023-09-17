import { Stack, Typography } from '@mui/material'


const Logo = () => {
  return (
    <Stack component={'a'} href="/" direction={'row'} gap={1} alignItems={"center"} className="logo">
        <Typography variant="h1" className="uppercase">
          Raza
        </Typography>
        <span className="bg-accent w-1 h-1"></span>
        <Typography variant="body2" className='uppercase'>Software & Technologies</Typography>
      </Stack>
  )
}

export default Logo
