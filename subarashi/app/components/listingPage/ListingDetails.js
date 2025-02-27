import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";

export default function ListingDetails({ listing }) {
  // Define property details to display
  const propertyDetails = [
    { label: "Furnishing", value: listing.furnishingStatus || "Unfurnished" },
    {
      label: "Year Built",
      value: listing?.buildingInfo?.completionYear || "2010",
    },
    { label: "Garage", value: listing.specs?.parking || "01" },
    { label: "Status", value: listing.purpose || "For Sale" },
    { label: "Property Type", value: listing.propertyType || "Apartment" },
    { label: "Bedrooms", value: listing.specs?.bedrooms || "N/A" },
    { label: "Bathrooms", value: listing.specs?.bathrooms || "N/A" },
    { label: "Floor", value: "Ground" },
    { label: "Ceiling Height", value: "3.2m" },
    { label: "Renovation", value: "N/A" },
  ];

  return (
    <Box sx={{ my: 5 }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        Property Details
      </Typography>

      <Grid container spacing={2}>
        {propertyDetails.map((detail, index) => (
          <Grid item xs={6} md={4} key={index}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                {detail.label}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                {detail.value}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 3 }} />
    </Box>
  );
}
