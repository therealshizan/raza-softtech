import { Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import AboutPoint from "./AboutPoint";
import theme from "../../theme";
import SectionTitle from "../SectionTitle";

const About = () => {
  const [aboutPoints, setAboutPoints] = useState([]); // Initialize as an empty array

  useEffect(() => {
    (async () => {
      try{
        const response = await fetch("/data/aboutPoints.json");
        const data = await response.json();
        setAboutPoints(data);
      }catch(err){
        console.error('Error Fetching About Points: ' + err)
      }
    })();
  }, []);

  return (
    <div id="about">
    <Stack sx={{ px: 10, py: 10, [theme.breakpoints.down('md')]: {p: 5} }} className="bg-primary about-section">
      <SectionTitle subtitle={'Your road to success'} title={'WE HAVE EVERYTHING TO MAKE YOUR'} coloredText={'BUSINESS A SUCCESS'}/>

      <Grid container pt={10} sx={{[theme.breakpoints.down('md')]: {pt: 5}}} spacing={6}>
        {aboutPoints?.map((data) => (
          <Grid key={data?.title} md={4} sm={6} xs={12} item>
            <AboutPoint title={data?.title} content={data?.content} />
          </Grid>
        ))}
      </Grid>
    </Stack>
    </div>
  );
};

export default About;
