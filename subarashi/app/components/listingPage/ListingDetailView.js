import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import Footer from "../footer/Footer";
import ListingHero from "./ListingHero";
import ListingHeader from "./ListingHeader";
import ListingDetails from "./ListingDetails";
import ListingAmenities from "./ListingAmenities";
import ListingFeatures from "./ListingFeatures";
import ListingContactForm from "./ListingContactForm";
import ListingLocation from "./ListingLocation";
import ListingGallery from "./ListingGallery";
import ListingSimilarHomes from "./ListingSimilarHomes";
import ListingNearby from "./ListingNearby";
import ListingReviews from "./ListingReviews";
import typographyStyles from "../../styles";

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
      {/* Hero Section - Image only */}
      <ListingHero listing={listing} />

      {/* Listing Header - Title, Location, Price */}
      <ListingHeader listing={listing} />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Left Column (Main Content) */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ ...typographyStyles.listingOverview }}
            >
              Overview
            </Typography>
            <Typography sx={{ ...typographyStyles.listingTitle }}>
              {listing.description}
            </Typography>

            {/* Gallery/Images */}
            <ListingGallery listing={listing} />

            {/* Property Details */}
            <ListingDetails listing={listing} />

            {/* Property Features */}
            <ListingFeatures listing={listing} />

            {/* Amenities */}
            <ListingAmenities listing={listing} />

            {/* What's Nearby */}
            {/* <ListingNearby listing={listing} /> */}

            {/* Similar Homes */}
            <ListingSimilarHomes listing={listing} />
          </Grid>

          {/* Right Column (Sidebar) */}
          <Grid item xs={12} md={4}>
            {/* Agent Contact */}
            <ListingContactForm listing={listing} />

            {/* Location Map */}
            <ListingLocation listing={listing} />
          </Grid>
        </Grid>

        {/* Reviews Section */}
        <Box sx={{ my: 8 }}>
          <ListingReviews listing={listing} />
        </Box>
      </Container>

      <Footer />
    </>
  );
}
