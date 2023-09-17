import { Box, Button, ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import theme from "../theme";
import { East } from "@mui/icons-material";

const Hero = () => {
  return (
    <div id="home">
    <Box
      sx={{ display: 'grid', px: 5, py: 5, gap: 5, [theme.breakpoints.up('md')]: {display: 'flex', px: 10, py: 4, gap: 10} }}
      className="hero justify-between"
    >
        {/* Column 1 */}
      <Stack sx={{ width: "50%", [theme.breakpoints.down('md')]: {width: '100%'} }} className="grid justify-center">
        <Typography variant='body2' sx={{color: theme.palette.primary.main}} className="uppercase pb-8">Design and Development</Typography>
        <Typography variant='h1' className='uppercase pb-8'>We use our Experience & Innovations</Typography>
        <Typography variant='body1' className='pb-8'>
        Donec vel sapien augue integer urna vel turpis cursus porta, mauris sed augue luctus GeneGenemy - Creative Multi Concept Landing Pages Pack magna at risus
        </Typography>
        <Button disableElevation endIcon={<East sx={{fill: '#fff'}} />} size="large" variant='contained' className="w-max" sx={{":hover": {background: theme.palette.primary.main, transform: 'translateY(-2.5px)', transition: 'all 0.125s ease-in-out'}, borderRadius: '50px'}}>Discover Our Projects</Button>
      </Stack>


        {/* Column 2 */}
      <Stack sx={{ width: "50%", [theme.breakpoints.down('md')]: {width: '100%'} }} className="grid justify-center">
        <ImageList gap={20} variant="masonry">
            <ImageListItem>
                <img src="https://jthemes.net/themes/wp/genemy/creative/wp-content/themes/genemy/images/portfolio/img-6.jpg" alt="Image 1" />
            </ImageListItem>
            <ImageListItem>
                <img src="https://jthemes.net/themes/wp/genemy/creative/wp-content/themes/genemy/images/portfolio/img-13.jpg" alt="Image 1" />
            </ImageListItem>
            <ImageListItem>
                <img src="https://jthemes.net/themes/wp/genemy/creative/wp-content/themes/genemy/images/portfolio/img-12.jpg" alt="Image 1" />
            </ImageListItem>
            <ImageListItem>
                <img src="https://jthemes.net/themes/wp/genemy/creative/wp-content/themes/genemy/images/portfolio/img-4.jpg" alt="Image 1" />
            </ImageListItem>
        </ImageList>
      </Stack>
    </Box>
    </div>
  );
};

export default Hero;
