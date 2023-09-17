import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import SectionTitle from "../Components/SectionTitle";
import theme from "../theme";

const ContactParts = ({ title, children }) => {
  return (
    <>
      <Typography className="uppercase" variant={"h3"}>
        {title}
      </Typography>
      <div style={{ color: "#ffffffb1" }}>{children}</div>
    </>
  );
};

const Contact = () => {
  return (
    <div id="contact">
      <Box
        className="bg-accent text-white"
        sx={{ px: 10, py: 10, [theme.breakpoints.down("md")]: { p: 5 } }}
      >
        <SectionTitle
          title={"Need Help? "}
          subtitle={"Get In Touch"}
          coloredText={"Say Hello"}
        />

        <Grid rowGap={5} container pt={10}>
          <Grid xs={12} md={6} item>
            <ContactParts title={"Call Us"}>
              <Typography variant={"body1"}>
                <a href="tel:+919619756588">+919619756588</a>
              </Typography>
              <Typography variant={"body1"}>
                <a href="tel:+919619756589">+919619756589</a>
              </Typography>
            </ContactParts>
          </Grid>
          <Grid xs={12} md={6} item>
            <ContactParts title={"Email Us"}>
              <Stack>
                <Typography color={"#ffffffb1"} variant={"body1"}>
                  <a href="mailto:info@razasofttech.com">
                    info@razasofttech.com
                  </a>
                </Typography>
              </Stack>
            </ContactParts>
          </Grid>
          <Grid xs={12} md={6} item>
            <ContactParts title={"Address"}>
              <Stack>
                <Typography color={"#ffffffb1"} variant={"body1"}>
                  B/713,Om Sai krupa Society Anant Kanekar Marg Opp Bandra Court
                  Bandra(East) Mumbai-400051
                </Typography>
              </Stack>
            </ContactParts>
          </Grid>
          <Grid xs={12} md={6} item>
            <ContactParts title={"Open Hours"}>
              <Stack>
                <Typography color={"#ffffffb1"} variant={"body1"}>
                  Monday - Friday
                </Typography>
                <Typography color={"#ffffffb1"} variant={"body1"}>
                  10:00AM - 06:00PM
                </Typography>
              </Stack>
            </ContactParts>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Contact;
