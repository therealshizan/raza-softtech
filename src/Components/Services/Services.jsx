import { Box, Grid, Stack, useMediaQuery } from "@mui/material";
import Service from "./Service";
import SectionTitle from "../SectionTitle";
import useFetch from "../../hooks/useFetch";
import { Fragment, useEffect, useState } from "react";
import theme from "../../theme";

const Services = () => {
  const [services, setServices] = useState([]);
  const tabletMedia = useMediaQuery('theme.breakpoints.up("md)');

  const fetchData = useFetch;
  useEffect(() => {
    (async () => {
      const fetchedServices = await fetchData("src/data/services.json");
      setServices(fetchedServices);
    })();
    console.log(tabletMedia);
  }, []);

  return (
    <div id="services">
      <Box sx={{ px: 10, py: 10, [theme.breakpoints.down("md")]: { p: 5 } }}>
        {tabletMedia && "Hello"}
        <SectionTitle
          subtitle={"Our Comprehensive Services"}
          title={"Explore "}
          coloredText={"our expertise"}
        />

        <Grid
          container
          pt={10}
          direction={"row"}
          columnSpacing={2}
          sx={{
            [theme.breakpoints.up("md")]: {
              columnGap: "2rem",
              flexWrap: "nowrap",
              rowGap: 0,
            },
            rowGap: 2.5,
            width: "100%",
            m: "auto",
          }}
          justifyContent={"space-between"}
        >
          {services.map((service) => (
            <Fragment key={service.id}>
              <Service
                title={service.title}
                description={service.description}
                serviceIcon={service.icon}
                features={service.features}
              />
            </Fragment>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Services;
