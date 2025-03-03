"use client";

import { useState } from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import { mockListings } from "../../../public/mockListings";
import ListingsFilter from "./ListingsFilter";
import ListingCard from "../body/listings/featuredListings/listingCard/ListingCard";
import Footer from "../footer/Footer";
export default function ListingsPage() {
  // State for the filtered listings
  const [filteredListings, setFilteredListings] = useState(mockListings);

  return (
    <>
      {/* Filter at the top */}
      <ListingsFilter />

      {/* Main content area */}
      <Container maxWidth="lg" sx={{ my: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
          Listings
        </Typography>

        {/* Grid of listing cards */}
        <Grid container spacing={4}>
          {filteredListings.map((listing) => (
            <Grid item xs={12} sm={6} md={6} key={listing.id}>
              <ListingCard listing={listing} />
            </Grid>
          ))}
        </Grid>

        {/* No results message */}
        {filteredListings.length === 0 && (
          <Box
            sx={{
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px dashed #ccc",
              borderRadius: 2,
              mt: 3,
            }}
          >
            <Typography variant="body1" color="text.secondary">
              No properties match the selected filters
            </Typography>
          </Box>
        )}
      </Container>
    </>
  );
}
