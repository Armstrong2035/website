"use client";

import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { mockListings } from "../../public/mockListings";
import ListingsGrid from "../components/listings/ListingsGrid";
import ListingsFilter from "../components/listings/ListingsFilter";
import Footer from "../components/footer/Footer";
import HeroImage from "../components/body/HeroPage/HeroImage";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NavBar from "../components/appBar/AppBar";

export default function ListingsPage() {
  // Sample hero image URL - use the one from the home page or provide another
  const heroImage =
    "https://res.cloudinary.com/dulafqaoq/image/upload/f_auto,q_auto,w_auto,fl_progressive/v1739812368/Image_17_uijjge.png";

  // Search form states
  const [propertyType, setPropertyType] = useState("Buy Apartments");
  const [location, setLocation] = useState("Dubai");
  const [priceRange, setPriceRange] = useState("$10,000 - $250,000");
  const [bedrooms, setBedrooms] = useState("2+");

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <NavBar />
        <Box sx={{ height: "70vh", width: "100%", backgroundColor: "#005244" }}>
          <HeroImage heroImage={heroImage} />
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#005244",
          color: "white",
          py: 3,
          mb: 4,
        }}
      >
        <Container maxWidth="lg" sx={{ pt: 3, pb: 3 }}>
          <Grid container spacing={2} alignItems="flex-end">
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="body2" sx={{ ml: 1, mb: 0.5 }}>
                I'm looking to...
              </Typography>
              <FormControl fullWidth variant="outlined" size="small">
                <Select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "white",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(255,255,255,0.3)",
                    },
                    "& .MuiSvgIcon-root": { color: "white" },
                  }}
                >
                  <MenuItem value="Buy Apartments">Buy Apartments</MenuItem>
                  <MenuItem value="Rent Apartments">Rent Apartments</MenuItem>
                  <MenuItem value="Buy Villas">Buy Villas</MenuItem>
                  <MenuItem value="Rent Villas">Rent Villas</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="body2" sx={{ ml: 1, mb: 0.5 }}>
                Location
              </Typography>
              <TextField
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon sx={{ color: "white" }} />
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "white",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(255,255,255,0.3)",
                    },
                  },
                }}
                sx={{ input: { color: "white" } }}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="body2" sx={{ ml: 1, mb: 0.5 }}>
                Price Range
              </Typography>
              <FormControl fullWidth variant="outlined" size="small">
                <Select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "white",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(255,255,255,0.3)",
                    },
                    "& .MuiSvgIcon-root": { color: "white" },
                  }}
                >
                  <MenuItem value="$10,000 - $250,000">
                    $10,000 - $250,000
                  </MenuItem>
                  <MenuItem value="$250,000 - $500,000">
                    $250,000 - $500,000
                  </MenuItem>
                  <MenuItem value="$500,000 - $1,000,000">
                    $500,000 - $1,000,000
                  </MenuItem>
                  <MenuItem value="$1,000,000+">$1,000,000+</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="body2" sx={{ ml: 1, mb: 0.5 }}>
                Bedroom
              </Typography>
              <FormControl fullWidth variant="outlined" size="small">
                <Select
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "white",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(255,255,255,0.3)",
                    },
                    "& .MuiSvgIcon-root": { color: "white" },
                  }}
                >
                  <MenuItem value="Any">Any</MenuItem>
                  <MenuItem value="1+">1+</MenuItem>
                  <MenuItem value="2+">2+</MenuItem>
                  <MenuItem value="3+">3+</MenuItem>
                  <MenuItem value="4+">4+</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12} md={2}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  py: 1,
                  backgroundColor: "#F2FFC2",
                  color: "#005244",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#E0EEB1",
                  },
                }}
              >
                ADVANCE SEARCH
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <ListingsGrid listings={mockListings} />
      </Container>

      <Footer />
    </>
  );
}
