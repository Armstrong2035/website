"use client";

import { useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import { mockListings } from "../../public/mockListings";
import ListingsGrid from "../components/listings/ListingsGrid";
import Footer from "../components/footer/Footer";
import NavBar from "../components/appBar/AppBar";
import HeroNav from "../components/body/HeroPage/HeroNav";

export default function ListingsPage() {
  return (
    <>
      <NavBar />

      <Box
        sx={{
          backgroundColor: "#005244",
          color: "white",
          py: 6,
          mb: 4,
        }}
      >
        {/* <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom>
            All Properties
          </Typography>
          <Typography variant="subtitle1">
            Browse our exclusive collection of properties for sale and rent in
            Dubai
          </Typography>
        </Container> */}
      </Box>

      {/* ListingsGrid now contains the filter component */}
      <ListingsGrid listings={mockListings} />

      <Footer />
    </>
  );
}
