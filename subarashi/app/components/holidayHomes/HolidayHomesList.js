"use client";

import { Box, Grid, Typography } from "@mui/material";
import HolidayHomeCard from "./HolidayHomesCard";

export default function HolidayHomesList({ listings }) {
  if (!listings || listings.length === 0) {
    return (
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
          No holiday homes available at the moment
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 6 }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Degular, Arial, sans-serif",
          fontWeight: 400,
          color: "#005244",
          mb: 4,
        }}
      >
        Featured Holiday Homes
      </Typography>

      <Grid container spacing={4}>
        {listings.map((listing) => (
          <Grid item xs={12} md={6} key={listing.id}>
            <HolidayHomeCard listing={listing} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
