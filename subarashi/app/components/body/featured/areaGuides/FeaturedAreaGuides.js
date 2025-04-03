// app/components/body/featured/featuredAreaGuides/FeaturedAreaGuides.js
"use client";

import { useState, useEffect, use } from "react";
import { Box, Typography, Grid, Button, Container } from "@mui/material";
import typographyStyles from "../../../../styles";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FeaturedAreaGuideCard from "./FeaturedAreaGuideCard";
import { getAllAreaGuides } from "../../../../lib/notion";
import { useAreaGuidesStore } from "../../../../store/areaGuidesStore";

export default function FeaturedAreaGuides() {
  const guides = useAreaGuidesStore((state) => state.guides);

  //console.log(guides);
  const featuredGuides = guides.slice(0, 4);

  // Dummy data as fallback
  // const dummyGuides = [
  //   {
  //     id: "palm-jumeirah",
  //     title: "Palm Jumeirah",
  //     image:
  //       "https://res.cloudinary.com/dulafqaoq/image/upload/v1739812368/Image_17_uijjge.png",
  //     description:
  //       "Iconic palm-shaped island with luxury villas and apartments",
  //   },
  //   {
  //     id: "dubai-marina",
  //     title: "Dubai Marina",
  //     image:
  //       "https://res.cloudinary.com/dulafqaoq/image/upload/v1739812368/Image_17_uijjge.png",
  //     description:
  //       "Waterfront community with stunning skyscrapers and beachfront living",
  //   },
  //   {
  //     id: "downtown-dubai",
  //     title: "Downtown Dubai",
  //     image:
  //       "https://res.cloudinary.com/dulafqaoq/image/upload/v1739812368/Image_17_uijjge.png",
  //     description:
  //       "Home to Burj Khalifa and Dubai Mall with premium apartments",
  //   },
  //   {
  //     id: "arabian-ranches",
  //     title: "Arabian Ranches",
  //     image:
  //       "https://res.cloudinary.com/dulafqaoq/image/upload/v1739812368/Image_17_uijjge.png",
  //     description: "Established desert-themed community with spacious villas",
  //   },
  // ];

  //nsole.log(dummyGuides);

  // Fetch featured area guides

  return (
    <Container>
      <Box sx={{ mb: 6, mt: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Link href="/areaGuides" style={{ textDecoration: "none" }}>
            <Button
              variant="text"
              endIcon={<ArrowForwardIcon />}
              sx={{
                color: "#005244",
                textTransform: "none",
                fontWeight: 500,
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "transparent",
                  opacity: 0.8,
                },
              }}
            >
              View all area guides
            </Button>
          </Link>
        </Box>

        <Grid container spacing={3}>
          {featuredGuides.map((guide) => (
            <Grid item xs={12} sm={6} md={3} key={guide.id}>
              <FeaturedAreaGuideCard guide={guide} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
