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

export default function FeaturedAreaGuides({ guides }) {
  const featuredGuides = guides.slice(0, 4);

  return (
    <Container sx={{ pr: 10, pl: 10 }}>
      <Box sx={{ mb: { sm: 2, md: 6 }, mt: { xs: 2, md: 6 } }}>
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
            <Grid item xs={12} sm={12} md={3} key={guide.id}>
              <FeaturedAreaGuideCard guide={guide} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
