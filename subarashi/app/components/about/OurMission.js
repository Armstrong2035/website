import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import typographyStyles from "../../styles";

export default function OurMission() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        // backgroundColor: "#E8F5B8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: 10,
        mb: 10,
      }}
    >
      <Typography
        sx={{
          ...typographyStyles.subheading2,
          fontSize: isMobile ? "50px" : "70px",
        }}
      >
        Our Mission
      </Typography>

      <Typography
        sx={{
          ...typographyStyles.bodyLarge,
          textAlign: "center",
          width: "50%",
          fontSize: isMobile ? "12px" : "18px",
        }}
      >
        We’re here to make real estate seamless, transparent, and rewarding for
        you. Whether you're buying, selling, or investing, our goal is to guide
        you with honesty, expertise, and attention to detail—ensuring that every
        decision you make is the right one.
      </Typography>
    </Box>
  );
}
