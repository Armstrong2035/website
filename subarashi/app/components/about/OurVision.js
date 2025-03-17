import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import typographyStyles from "../../styles";

export default function OurVision() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        // backgroundColor: "#DEEAA0",
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
        Our Vision
      </Typography>

      <Typography
        sx={{
          ...typographyStyles.bodyLarge,
          textAlign: "center",
          width: "50%",
          fontSize: isMobile ? "12px" : "18px",
        }}
      >
        To be the leading name in real estate, offering tailor-made solutions
        that put our clients first. We strive to build lasting relationships
        based on trust, quality service, and remarkable results.
      </Typography>
    </Box>
  );
}
