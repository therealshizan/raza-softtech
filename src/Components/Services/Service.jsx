import { Image } from "@mui/icons-material";
import { Grid, List, ListItem, Stack, Typography } from "@mui/material";
import { useEffect } from "react";

const Service = ({ title, description, serviceIcon, features }) => {
  const sectionBeforeCss = `hover:before:w-full before:content-[''] before:h-1 before:absolute  before:bottom-0 before:w-0 before:bg-primary  before:transition-all before:duration-500`;
  const sectionAfterCss = `hover:after:w-full after:content-[''] after:h-1 after:absolute  after:top-0 after:w-0 after:bg-primary before:right-0 after:transition-all after:duration-500`;
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      className={`relative border-primary shadow-xl transition-all duration-250 hover:shadow-2xl ${sectionAfterCss} ${sectionBeforeCss}`}
      sx={{ display: "grid" }}
      p={2.5}
    >
      {/* Service Icon */}
      <Typography
        sx={{ width: "5rem" }}
        className="service-icon text-primary"
        dangerouslySetInnerHTML={{ __html: serviceIcon }}
      ></Typography>

      <Typography variant={"h3"} pt={5} className="uppercase">
        {title}
        <span className="text-secondary underline">.</span>
      </Typography>
      <Typography py={2.5} variant={"body1"}>
        {description}
      </Typography>
      <List className={"grid"} sx={{ rowGap: 2.5 }}>
        {features.map((feature, index) => (
          <ListItem key={feature} disablePadding sx={{ columnGap: 1.75 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
            {feature}
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default Service;
