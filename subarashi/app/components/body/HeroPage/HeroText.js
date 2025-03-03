import { Typography, Box } from "@mui/material";
import typographyStyles from "../../../styles";

export default function HeroText({ style }) {
  return (
    <Box sx={{ mt: 2, ml: 10, mr: 10, mb: 5 }}>
      <Typography sx={{ ...typographyStyles.bannerText, color: "#F2FFC2" }}>
        Find your dream home in Dubai
      </Typography>
    </Box>
  );
}
