import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import Footer from "../footer/Footer";
import ListingHero from "./ListingHero";
import ListingDetails from "./ListingDetails";
import ListingAmenities from "./ListingAmenities";
import ListingFeatures from "./ListingFeatures";
import ListingContactForm from "./ListingContactForm";
import ListingLocation from "./ListingLocation";
import ListingGallery from "./ListingGallery";
import ListingMortgage from "./ListingMortgage";
import ListingSimilarHomes from "./ListingSimilarHomes";
import ListingNearby from "./ListingNearby";
import ListingReviews from "./ListingReviews";
import ListingShare from "./ListingShare";

export default function ListingDetailView({ listing }) {
  if (!listing) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h5">Listing not found</Typography>
        <Link href="/" passHref>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            sx={{ mt: 2, backgroundColor: "#005244" }}
          >
            Back to Home
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <>
      {/* Hero Section with Main Image and Title */}
      <ListingHero listing={listing} />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Left Column (Main Content) */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Overview
            </Typography>
            <Typography variant="body1" paragraph>
              {listing.description}
            </Typography>

            {/* Property Details Section */}

            {/* Video Tour section now uses the enhanced carousel component */}
            <ListingGallery listing={listing} />
            <ListingDetails listing={listing} />

            {/* Property Features */}
            <ListingFeatures listing={listing} />

            {/* Amenities */}
            <ListingAmenities listing={listing} />

            {/* Floor Plans */}
            {/* <Box sx={{ my: 5 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                Floor Plans
              </Typography>
              <Box
                sx={{
                  height: 350,
                  backgroundColor: "#f5f5f5",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Contact agent for floor plans
                </Typography>
              </Box>
            </Box> */}

            {/* What's Nearby */}
            <ListingNearby listing={listing} />

            {/* Similar Homes */}
            <ListingSimilarHomes listing={listing} />
          </Grid>

          {/* Right Column (Sidebar) */}
          <Grid item xs={12} md={4}>
            {/* Agent Contact */}
            <ListingContactForm listing={listing} />

            {/* Mortgage Calculator */}
            {/* <ListingMortgage listing={listing} /> */}

            {/* Walk Score */}
            {/* <ListingWalkScore listing={listing} /> */}

            {/* Location Map */}
            <ListingLocation listing={listing} />
          </Grid>
        </Grid>

        {/* Reviews Section */}
        <Box sx={{ my: 8 }}>
          <ListingReviews listing={listing} />
        </Box>

        {/* Share Listing */}
        <Box sx={{ my: 5 }}>
          <ListingShare listing={listing} />
        </Box>
      </Container>
      <Footer />
    </>
  );
}
