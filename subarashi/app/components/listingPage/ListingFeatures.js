import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import PoolIcon from "@mui/icons-material/Pool";
import PetsIcon from "@mui/icons-material/Pets";
import ElevatorIcon from "@mui/icons-material/Elevator";
import GarageIcon from "@mui/icons-material/Garage";
import AccessibleIcon from "@mui/icons-material/Accessible";
import FireplaceIcon from "@mui/icons-material/Fireplace";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import YardIcon from "@mui/icons-material/Yard";
import KitchenIcon from "@mui/icons-material/Kitchen";
import HeightIcon from "@mui/icons-material/Height";
import typographyStyles from "../../styles";

export default function ListingFeatures({ listing }) {
  // Define features to display with icons
  const features = [
    { icon: <LocalParkingIcon />, name: "Parking", available: true },
    { icon: <WifiIcon />, name: "Wifi", available: true },
    { icon: <HeightIcon />, name: "Ceiling Height", available: true },
    {
      icon: <PoolIcon />,
      name: "Swimming Pool",
      available: listing.buildingAmenities?.includes("Swimming Pool"),
    },
    { icon: <PetsIcon />, name: "Pet Friendly", available: false },
    { icon: <ElevatorIcon />, name: "Elevator", available: true },
    {
      icon: <GarageIcon />,
      name: "Garages",
      available: listing.specs?.parking > 0,
    },
    { icon: <AccessibleIcon />, name: "Disabled Access", available: false },
    { icon: <FireplaceIcon />, name: "Fireplace", available: false },
    {
      icon: <AcUnitIcon />,
      name: "A/C & Heating",
      available: listing.features?.includes("Centrally Air-Conditioned"),
    },
    { icon: <YardIcon />, name: "Garden", available: false },
    {
      icon: <KitchenIcon />,
      name: "Refrigerator",
      available: listing.furnishingStatus === "Fully Furnished",
    },
  ];

  return (
    <Box sx={{ my: 5 }}>
      <Typography sx={{ ...typographyStyles.cardHeader }}>
        Property Features
      </Typography>

      <Grid container spacing={2}>
        {features.map((feature, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                opacity: feature.available ? 1 : 0.5,
              }}
            >
              {feature.icon}
              <Typography sx={{ ...typographyStyles.priceRight }}>
                {feature.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 3 }} />
    </Box>
  );
}
