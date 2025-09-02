import React, { useState } from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import typographyStyles from "../../styles";

export default function ListingHero({ listing }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % listing.media.pictures.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + listing.media.pictures.length) %
        listing.media.pictures.length
    );
  };

  if (!listing || !listing.media || !listing.media.pictures.length) {
    return (
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "60vh", sm: "70vh", md: "100vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography
          sx={{
            ...typographyStyles.bodyLarge,
            color: "#005244",
          }}
        >
          Loading property details...
        </Typography>
      </Box>
    );
  }

  const heroImage = listing.media.pictures[currentImageIndex].file.url;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "60vh", sm: "70vh", md: "100vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white", // Creates the whitespace
        overflow: "hidden",
      }}
    >
      {/* Image Container with constrained size */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          maxWidth: "70%", // Constrains the width on large screens
          maxHeight: { xs: "60vh", md: "80vh" }, // Constrains the height
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={heroImage}
          alt={`${listing.title || "Property"} main image`}
          fill={true}
          priority={true}
          sizes="(max-width: 600px) 90vw, (max-width: 960px) 80vw, 70vw"
          quality={90}
          style={{
            objectFit: "contain", // Prevents upscaling and pixelation
            objectPosition: "center",
          }}
        />
        {/* Navigation Buttons on top of the image container */}
        <IconButton
          onClick={handlePrevImage}
          sx={{
            position: "absolute",
            left: 0,
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
          }}
        >
          <ChevronLeftIcon sx={{ fontSize: { xs: 40, md: 60 } }} />
        </IconButton>
        <IconButton
          onClick={handleNextImage}
          sx={{
            position: "absolute",
            right: 0,
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
          }}
        >
          <ChevronRightIcon sx={{ fontSize: { xs: 40, md: 60 } }} />
        </IconButton>
      </Box>

      {/* Text and image count below the image container */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          padding: { xs: "20px", md: "40px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "flex-end" },
          background:
            "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.0))",
        }}
      >
        {/* <Typography
          sx={{
            ...typographyStyles.bannerText,
            fontSize: { xs: "28px", sm: "42px", md: "44px" },
            fontWeight: 300,
            color: "white",
            mb: { xs: 1, md: 0 },
          }}
        >
          {`${listing.location.bayut.buildingName || ""}, 
    ${listing.location.bayut.community || ""}, 
    ${listing.location.bayut.subCommunity || ""}`}
        </Typography> */}
        <Typography
          sx={{
            ...typographyStyles.bannerText,
            fontSize: { xs: "28px", sm: "42px", md: "20px" },
            fontWeight: 300,
            color: "white",
          }}
        >
          {`${currentImageIndex + 1}/${listing.media.pictures.length}`}
        </Typography>
      </Box>
    </Box>
  );
}
