"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import icon from "../../../public/logos/icon.png";

export default function Introduction({ logoIcon, backgroundImage }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative", // Needed for absolute overlay
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        pt: 10,
        pb: 10,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "50vh",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "70vh",
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Adjust opacity for effect
          zIndex: 1, // Ensures text stays on top
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Image
          src={logoIcon}
          alt="Subarashi real estate"
          layout="responsive"
          width={isMobile ? 50 : 10}
          height={isMobile ? 50 : 10}
        />
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          width: isMobile ? "80%" : "50%",
          fontSize: isMobile ? "12px" : "18px",
          position: "relative",
          zIndex: 2, // Ensures it's above the overlay
          color: theme.palette.text.primary,
        }}
      >
        At Subarashi Real Estate, we embody the essence of excellence,
        innovation, and unmatched service. Inspired by the Japanese word
        "Subarashi", meaning "wonderful" or "splendid," our mission is to bring
        these qualities to life in every aspect of real estate.
      </Typography>
    </Box>
  );
}
