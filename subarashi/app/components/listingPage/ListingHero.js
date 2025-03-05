import React from "react";
import { Box } from "@mui/material";

export default function ListingHero({ listing }) {
  // Extract the main image URL
  const heroImage = listing?.images?.[0] || "";

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "40vh", sm: "50vh", md: "60vh", lg: "70vh" },
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
