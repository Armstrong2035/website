import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function ListingLocation({ listing }) {
  const address = `${listing.location?.building || ""} ${
    listing.location?.area || ""
  }, ${listing.location?.city || "Dubai"}`;

  return (
    <Paper
      elevation={2}
      sx={{
        mb: 4,
        p: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        Location
      </Typography>

      {/* Map placeholder */}
      <Box
        sx={{
          width: "100%",
          height: 200,
          backgroundColor: "#f5f5f5",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          mb: 2,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#E0E0E0",
            backgroundImage:
              "url(https://maps.googleapis.com/maps/api/staticmap?center=Dubai&zoom=12&size=400x200&key=YOUR_API_KEY)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <LocationOnIcon
          sx={{
            position: "absolute",
            color: "#FF5722",
            fontSize: 40,
          }}
        />
      </Box>

      <Typography variant="body2" sx={{ mb: 2 }}>
        {address}
      </Typography>

      <Button
        fullWidth
        variant="outlined"
        startIcon={<DirectionsIcon />}
        sx={{
          borderColor: "#005244",
          color: "#005244",
          "&:hover": {
            borderColor: "#003d33",
            backgroundColor: "rgba(0, 82, 68, 0.04)",
          },
        }}
      >
        Get Direction
      </Button>
    </Paper>
  );
}
