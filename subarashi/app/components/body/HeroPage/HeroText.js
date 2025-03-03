import { Typography, Box } from "@mui/material";
import typographyStyles from "../../../styles";

export default function HeroText() {
  return (
    <Box
      sx={{
        mt: { xs: 1, sm: 1.5, md: 2 },
        ml: { xs: 2, sm: 5, md: 10 },
        mr: { xs: 2, sm: 5, md: 10 },
        mb: { xs: 3, sm: 4, md: 5 },
      }}
    >
      <Typography
        sx={{
          ...typographyStyles.bannerText,
          color: "#F2FFC2",
          fontSize: {
            xs: "40px",
            sm: "70px",
            md: "100px",
            lg: "130px",
          },
          lineHeight: {
            xs: "48px",
            sm: "76px",
            md: "100px",
            lg: "120px",
          },
          whiteSpace: { xs: "normal" },
        }}
      >
        Find your dream home in Dubai
      </Typography>
    </Box>
  );
}
