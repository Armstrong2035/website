"use client";

import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import typographyStyles from "../../styles";

export default function OurMission({ image }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
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
        justifyContent={"flex-start"}
        alignItems={"flexStart"}
        sx={{ pl: isMobile ? 5 : 20 }}
      >
        <Typography
          sx={{
            ...typographyStyles.subheading2,
            fontSize: isMobile ? "50px" : "70px",
            position: "relative", // Ensures it appears above overlay
            zIndex: 2,
            textAlign: "left",
            color: "#043D32",
          }}
        >
          Our Mission
        </Typography>

        <Typography
          sx={{
            ...typographyStyles.bodyLarge,
            textAlign: "center",
            width: isMobile ? "80%" : "50%",
            fontSize: isMobile ? "18px" : "18px",
            position: "relative",
            zIndex: 2,
            textAlign: "left",
            color: "#043D32",
          }}
        >
          To provide a seamless, transparent, and <strong>wonderful</strong>{" "}
          real estate experience, empowering our clients to achieve their
          property dreams and investment goals. We aim to set new standards in
          the market by focusing on client satisfaction, attention to detail,
          and ethical practices.
        </Typography>
      </Stack>
    </Box>
  );
}
