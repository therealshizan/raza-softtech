import { Stack, Typography } from "@mui/material";

const SectionTitle = ({ subtitle, title, coloredText }) => {
  return (
    <Stack>
      <Typography variant="body2" className="uppercase pb-8">
        {subtitle}
      </Typography>
      <Typography className="uppercase" variant="h1">
        {title}
        <span className="text-secondary underline">{coloredText}</span>
      </Typography>
    </Stack>
  );
};

export default SectionTitle;
