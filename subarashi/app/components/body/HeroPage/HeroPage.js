"use client";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import HeroNav from "./HeroNav";
import { Box } from "@mui/material";

export default function HeroPage({ heroImage }) {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#005244",
        height: {
          xs: "70vh",
          sm: "80vh",
          md: "100vh",
        },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: "100%",
          position: "relative",
        }}
      >
        <HeroImage heroImage={heroImage} />
        <HeroText />
        <HeroNav />
      </Box>
    </Box>
  );
}
