import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import typographyStyles from "../../styles";

const backgroundImageUrl = "/grantLemons.jpg"; // ✅ Make sure this exists in /public

export default function OurMission() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        flexDirection: "column",
        position: "relative", // Needed for overlay effect
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${backgroundImageUrl})`, // ✅ Background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Stack
        justifyContent={"flex-end"}
        alignItems={"flex-end"}
        sx={{ pr: 20, width: "50%" }}
      >
        <Typography
          sx={{
            ...typographyStyles.subheading2,
            fontSize: isMobile ? "50px" : "70px",
            position: "relative", // Ensures it appears above overlay
            zIndex: 2,
            textAlign: "right",
            color: "#043D32",
          }}
        >
          Our Vision
        </Typography>

        <Typography
          sx={{
            ...typographyStyles.bodyLarge,
            textAlign: "center",
            width: isMobile ? "80%" : "50%",
            fontSize: isMobile ? "18px" : "18px",
            position: "relative",
            zIndex: 2,
            textAlign: "right",
            color: "#043D32",
          }}
        >
          To be the leading name in real estate, offering tailor-made solutions
          that put our clients first. We strive to build lasting relationships
          based on trust, quality service, and remarkable results.
        </Typography>
      </Stack>
    </Box>
  );
}
