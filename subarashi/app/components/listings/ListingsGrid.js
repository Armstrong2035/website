import React from "react";
import { Grid, Typography, Box, CircularProgress } from "@mui/material";
import ListingItem from "./ListingItem";

const ListingsGrid = ({ listings, isLoading = false }) => {
  // If loading is in progress
  if (isLoading) {
    return (
      <Box
        sx={{
          py: 8,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <CircularProgress size={40} sx={{ color: "#005244" }} />
        <Typography variant="body1" color="text.secondary">
          Finding properties that match your criteria...
        </Typography>
      </Box>
    );
  }

  // If no listings match the filter criteria
  if (listings.length === 0) {
    return (
      <Box
        sx={{
          py: 8,
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          borderRadius: 2,
          my: 4,
        }}
      >
        <Typography variant="h5" gutterBottom color="text.secondary">
          No properties match your search criteria
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Try adjusting your filters to see more results
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h5" component="h2">
          Properties ({listings.length})
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Showing {listings.length} properties
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {listings.map((listing) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={listing.id}>
            <ListingItem listing={listing} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ListingsGrid;
