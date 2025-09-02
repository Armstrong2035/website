import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import typographyStyles from "../../styles";

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
      <Typography gutterBottom sx={{ ...typographyStyles.cardHeader }}>
        Property Details
      </Typography>

      <Grid container spacing={2} sx={{}}>
        {propertyDetails.map((detail, index) => (
          <Grid item xs={6} sm={6} key={index}>
            <Box sx={{ mb: 2 }}>
              <Typography
                sx={{ ...typographyStyles.priceRight }}
                color="text.secondary"
              >
                {detail.label}
              </Typography>
              <Typography sx={{ ...typographyStyles.priceRight }}>
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
