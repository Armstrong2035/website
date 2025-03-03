"use client";

import { useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import { mockListings } from "../../public/mockListings";
import ListingsGrid from "../components/listings/ListingsGrid";
import ListingsFilter from "../components/listings/ListingsFilter";
import Footer from "../components/footer/Footer";

export default function ListingsPage() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#005244",
          color: "white",
          py: 6,
          mb: 4,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom>
            All Properties
          </Typography>
          <Typography variant="subtitle1">
            Browse our exclusive collection of properties for sale and rent in
            Dubai
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "25%" } }}>
            <ListingsFilter />
          </Box>

          <Box sx={{ width: { xs: "100%", md: "75%" } }}>
            <ListingsGrid listings={mockListings} />
          </Box>
        </Box>
      </Container>

      <Footer />
    </>
  );
}
