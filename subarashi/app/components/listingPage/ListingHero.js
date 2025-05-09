import React from "react";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import Image from "next/image";
import typographyStyles from "../../styles";
import ListingHeaderModal from "./ListingHeaderModal";
import { useState } from "react";

export default function ListingHero({ listing }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Add null/undefined check before accessing properties
  if (!listing || !listing.media || !listing.media.length) {
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

  // Now it's safe to access listing.media
  const heroImage = listing.media[0];

  // Function to optimize Cloudinary URL if it's from Cloudinary
  const getOptimizedImageUrl = (url) => {
    if (url.includes("cloudinary.com")) {
      // Extract base parts of the URL
      const urlParts = url.split("/upload/");
      if (urlParts.length === 2) {
        // Insert optimization parameters
        return `${urlParts[0]}/upload/q_auto:best,f_auto,dpr_auto/${urlParts[1]}`;
      }
    }
    return url;
  };

  const optimizedHeroImage = getOptimizedImageUrl(heroImage);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "60vh", sm: "70vh", md: "100vh" },
        overflow: "hidden",
        cursor: "pointer",
        "&:hover": {
          "& > .overlay": {
            opacity: 1,
          },
        },
      }}
    >
      <Image
        src={optimizedHeroImage}
        alt={`${listing.title || "Property"} main image`}
        fill={true}
        priority={true}
        quality={90}
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Text overlay with semi-transparent background */}
      <Grid2
        container
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          padding: { xs: "20px", md: "40px" },
          background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
          display: "flex",
          flexDirection: "row",
          zIndex: 2,
        }}
      >
        <Grid2 item size={{ sm: 12, md: 2 }}>
          <Typography
            sx={{
              ...typographyStyles.bannerText,
              fontSize: { xs: "28px", sm: "42px", md: "20px" },
              fontWeight: 300,
              width: "100%",
              color: "white",
            }}
          >
            01
          </Typography>
        </Grid2>

        <Grid2 item size={{ sm: 12, md: 8 }}>
          <Typography
            sx={{
              ...typographyStyles.bannerText,
              fontSize: { xs: "28px", sm: "42px", md: "44px" },
              fontWeight: 300,
              width: "100%",
              color: "white",
            }}
          >
            {listing.location.building}, {listing.location.locality},{" "}
          </Typography>
        </Grid2>

        <Grid2
          item
          size={{ sm: 12, md: 2 }}
          onClick={() => {
            setOpen(true);
          }}
        >
          <Typography
            sx={{
              ...typographyStyles.bannerText,
              fontSize: { xs: "28px", sm: "42px", md: "20px" },
              fontWeight: 300,
              width: "100%",
              color: "white",
            }}
          >
            Gallery
          </Typography>
        </Grid2>
      </Grid2>

      <ListingHeaderModal open={open} setOpen={setOpen} listing={listing} />
    </Box>
  );
}
