import { Typography, Box } from "@mui/material";

export default function HeroText({ style }) {
  return (
    <Box sx={{ mt: 2, ml: 10, mr: 10 }}>
      <Typography sx={style}>Find your dream home in Dubai</Typography>
    </Box>
  );
}
