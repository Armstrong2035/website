import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import typographyStyles from "../../styles";

export default function ListingAmenities({ listing }) {
  // Get amenities from the listing data
  const amenities = listing.buildingAmenities || [];

  // If no amenities, use default text
  const displayText =
    amenities.length > 0
      ? amenities.join(". ")
      : "Premium amenities include 24/7 security, covered parking, swimming pool, and fitness center. Enjoy luxurious living with all modern conveniences at your fingertips.";

  return (
    <Box sx={{ my: 5 }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        Amenities
      </Typography>

      <Typography sx={{ ...typographyStyles.priceRight }}>
        {displayText}
      </Typography>

      <Divider sx={{ my: 3 }} />
    </Box>
  );
}
