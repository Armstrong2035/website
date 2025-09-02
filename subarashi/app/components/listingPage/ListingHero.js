import React from "react";
import { Box, Grid, Stack, Typography, Container } from "@mui/material";
import Image from "next/image";
import typographyStyles from "../../styles";
import ListingHeaderModal from "./ListingHeaderModal";
import { useState } from "react";

export default function ListingHero({ listing, isSales }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!listing || !listing.media) {
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

  console.log(listing);
  const heroImage = listing.media.pictures[0].file.url;
  console.log(heroImage);

  // Function to optimize Cloudinary URL if it's from Cloudinary
  // const getOptimizedImageUrl = (url) => {
  //   if (url.includes("cloudinary.com")) {
  //     // Extract base parts of the URL
  //     const urlParts = url.split("/upload/");
  //     if (urlParts.length === 2) {
  //       // Insert optimization parameters
  //       return `${urlParts[0]}/upload/q_auto:best,f_auto,dpr_auto/${urlParts[1]}`;
  //     }
  //   }
  //   return url;
  // };

  // const optimizedHeroImage = getOptimizedImageUrl(heroImage);

  return (
    <Box
    // sx={{
    //   border: "1px solid red",
    //   width: "100%",
    //   height: { xs: "60vh", sm: "70vh", md: "100vh" },

    //   overflow: "hidden",
    //   cursor: "pointer",
    //   "&:hover": {
    //     "& > .overlay": {
    //       opacity: 1,
    //     },
    //   },
    // }}
    >
      <ListingHeaderModal open={open} setOpen={setOpen} listing={listing} />
    </Box>
  );
}
