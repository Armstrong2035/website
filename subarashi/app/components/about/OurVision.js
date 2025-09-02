"use client";

import { Box, Stack, Typography } from "@mui/material";
import typographyStyles from "../../styles";
import { useIsMobile } from "../../providers/MobileProvider";

export default function OurVision({ image }) {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useIsMobile();

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
        backgroundImage: `url(${image})`, // ✅ Background image
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
            fontSize: isMobile ? "40px" : "70px",
            position: "relative", // Ensures it appears above overlay
            zIndex: 2,
            textAlign: isMobile ? "left" : "right",
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
            textAlign: isMobile ? "left" : "right",
            color: "#043D32",
          }}
        >
          Our vision is to be the most approachable and trusted real estate
          partner, making home-buying seamless with warmth, hospitality, and
          expert guidance. We aim to lead Dubai’s real estate market by
          delivering tailor-made solutions and building lasting relationships
          based on trust, quality service, and remarkable outcomes.
        </Typography>
      </Stack>
    </Box>
  );
}
