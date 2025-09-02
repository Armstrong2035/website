"use client";
// app/components/body/featured/FeaturedResources.js
import { Box, Container, Divider } from "@mui/material";
import CalculatorCard from "./calculator/CalculatorCard";
import FeaturedAreaGuides from "./areaGuides/FeaturedAreaGuides";

export default function FeaturedResources({ guides }) {
  return (
    <Box
      sx={{
        position: "relative",
        pt: {
          xs: 7,
          md: 7,
        },
        pb: 7,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 100% 100%, rgba(0,82,68,0.03) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          "& > *": {
            opacity: 0,
            animation: "fadeIn 0.8s ease-out forwards",
          },
          "@keyframes fadeIn": {
            from: {
              opacity: 0,
              transform: "translateY(20px)",
            },
            to: {
              opacity: 1,
              transform: "translateY(0)",
            },
          },
        }}
      >
        <Box
          sx={{
            animationDelay: "0.2s",
            transform: "translateY(20px)",
          }}
        >
          <CalculatorCard />
        </Box>

        <Divider
          sx={{
            mt: 10,
            mb: 10,
            opacity: "0.7",
            background:
              "linear-gradient(to right, transparent, #005244, transparent)",
            animationDelay: "0.4s",
          }}
        />

        <Box
          sx={{
            animationDelay: "0.6s",
            transform: "translateY(20px)",
          }}
        >
          <FeaturedAreaGuides guides={guides} />
        </Box>
      </Container>
    </Box>
  );
}
