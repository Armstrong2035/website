import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import StorefrontIcon from "@mui/icons-material/Storefront";
import WaterIcon from "@mui/icons-material/Water";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import StoreIcon from "@mui/icons-material/Store";
import DirectionsSubwayIcon from "@mui/icons-material/DirectionsSubway";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

export default function ListingNearby({ listing }) {
  // Nearby amenities with distances (in a real app, these would come from an API)
  const nearbyPlaces = [
    {
      icon: <SchoolIcon fontSize="small" />,
      name: "School & College",
      distance: "0.9km",
    },
    {
      icon: <FitnessCenterIcon fontSize="small" />,
      name: "Gym",
      distance: "2.3km",
    },
    {
      icon: <StorefrontIcon fontSize="small" />,
      name: "Shopping Mall",
      distance: "1.1km",
    },
    { icon: <WaterIcon fontSize="small" />, name: "River", distance: "3.1km" },
    {
      icon: <ShoppingCartIcon fontSize="small" />,
      name: "Grocery Center",
      distance: "0.2km",
    },
    {
      icon: <AccountBalanceIcon fontSize="small" />,
      name: "University",
      distance: "2.7km",
    },
    {
      icon: <LocalPoliceIcon fontSize="small" />,
      name: "Police Station",
      distance: "1.2km",
    },
    { icon: <StoreIcon fontSize="small" />, name: "Market", distance: "3.4km" },
    {
      icon: <DirectionsSubwayIcon fontSize="small" />,
      name: "Metro Station",
      distance: "0.7km",
    },
    {
      icon: <LocalHospitalIcon fontSize="small" />,
      name: "Hospital",
      distance: "1.7km",
    },
    {
      icon: <DirectionsBusIcon fontSize="small" />,
      name: "Bus Station",
      distance: "1.1km",
    },
  ];

  return (
    <Box sx={{ my: 5 }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        What's Nearby
      </Typography>

      <Grid container spacing={2}>
        {nearbyPlaces.map((place, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {place.icon}
              <Typography variant="body2">
                {place.name}: {place.distance}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Typography variant="body2" sx={{ mt: 3, mb: 2 }}>
        Risk management and compliance, when approached strategically, have the
        potential to go beyond mitigating threats.
      </Typography>

      <Divider sx={{ my: 3 }} />
    </Box>
  );
}
