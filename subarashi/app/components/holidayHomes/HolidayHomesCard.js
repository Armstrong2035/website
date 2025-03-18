"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Grid,
  Button,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import typographyStyles from "../../styles";

export default function HolidayHomeCard({ listing }) {
  const [isClient, setIsClient] = useState(false);

  // This ensures the Airbnb embed code runs only on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        borderRadius: 2,
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
        },
      }}
    >
      {/* Airbnb Embed */}
      <Box sx={{ height: 300, position: "relative" }}>
        {isClient && (
          <Box
            sx={{
              height: "100%",
              "& .airbnb-embed-frame": {
                width: "100% !important",
                height: "100% !important",
                margin: "0 !important",
              },
            }}
            dangerouslySetInnerHTML={{ __html: listing.embedCode }}
          />
        )}
      </Box>

      {/* Content */}
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              ...typographyStyles.sectionTitle,
              fontWeight: 500,
              mb: 1.5,
              color: "#005244",
            }}
          >
            {listing.title}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <LocationOnIcon sx={{ color: "#777", mr: 0.5, fontSize: 18 }} />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ ...typographyStyles.bodyMedium }}
            >
              {listing.location}
            </Typography>
          </Box>

          <Typography
            variant="h6"
            sx={{
              ...typographyStyles.priceTag,
              color: "#005244",
              mb: 2,
              textAlign: "left",
            }}
          >
            {listing.price}
          </Typography>

          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={6}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <HotelIcon sx={{ color: "#777", mr: 1, fontSize: 18 }} />
                <Typography
                  variant="body2"
                  sx={{ ...typographyStyles.bodyMedium }}
                >
                  {listing.bedrooms}{" "}
                  {listing.bedrooms === 1 ? "Bedroom" : "Bedrooms"}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <BathtubIcon sx={{ color: "#777", mr: 1, fontSize: 18 }} />
                <Typography
                  variant="body2"
                  sx={{ ...typographyStyles.bodyMedium }}
                >
                  {listing.bathrooms}{" "}
                  {listing.bathrooms === 1 ? "Bathroom" : "Bathrooms"}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", mt: "auto" }}>
            <Button
              variant="outlined"
              endIcon={<ArrowOutwardIcon />}
              sx={{
                borderColor: "#005244",
                color: "#005244",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "rgba(0, 82, 68, 0.05)",
                  borderColor: "#003d33",
                },
              }}
            >
              View Details
            </Button>
          </Box>
        </CardContent>

        <Box
          sx={{
            backgroundColor: "#005244",
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "white",
              fontFamily: "Degular, Arial, sans-serif",
            }}
          >
            Managed by Subarashi
          </Typography>

          <Chip
            label="Available Now"
            size="small"
            sx={{
              backgroundColor: "#F2FFC2",
              color: "#005244",
              fontWeight: "medium",
            }}
          />
        </Box>
      </Box>
    </Card>
  );
}
