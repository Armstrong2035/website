import React from "react";
import { Box, Container, Typography, Chip, Button } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

export default function ListingHero({ listing }) {
  // Extract key details for the hero section
  const { title, price, location, specs, purpose } = listing;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "60vh", md: "70vh" },
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${listing.images[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <Button
            variant="contained"
            startIcon={<ShareIcon />}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(5px)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.3)",
              },
            }}
          >
            Share
          </Button>
        </Box>

        <Box sx={{ color: "white" }}>
          <Chip
            label={purpose || "FOR SALE"}
            sx={{
              backgroundColor: "#005244",
              color: "white",
              fontWeight: "bold",
              mb: 2,
            }}
          />
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            {title || "Luxury Apartment"}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {location?.building && `${location.building}, `}
            {location?.area && `${location.area}, `}
            {location?.city || "Dubai"}
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            {specs?.size?.value && (
              <Typography variant="subtitle1">
                Sqft . {specs.size.value}
              </Typography>
            )}
            {specs?.bedrooms && (
              <Typography variant="subtitle1">
                Bed . {specs.bedrooms}
              </Typography>
            )}
            {specs?.bathrooms && (
              <Typography variant="subtitle1">
                Bath . {specs.bathrooms}
              </Typography>
            )}
          </Box>

          <Box sx={{ mt: 3, display: "flex", alignItems: "center", gap: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Price: {price?.currency} {price?.amount?.toLocaleString()}
            </Typography>

            {price?.amount && (
              <Typography variant="subtitle1">
                Est. Payment {((price.amount * 0.05) / 12).toLocaleString()}/mo*
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
