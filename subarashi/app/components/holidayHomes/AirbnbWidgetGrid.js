"use client";

import { useState, useEffect } from "react";
import { Box, Grid, Typography, Button, Card, CardMedia } from "@mui/material";
import typographyStyles from "../../styles";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import HomeIcon from "@mui/icons-material/Home";

export default function AirbnbWidgetGrid({ listings }) {
  const [isClient, setIsClient] = useState(false);

  // This ensures the code runs only on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!listings || listings.length === 0) {
    return (
      <Box sx={{ mt: 4 }}>
        <Typography variant="body1" color="text.secondary">
          No holiday homes available at the moment
        </Typography>
      </Box>
    );
  }

  // Function to extract listing ID from embed code
  const extractListingId = (embedCode) => {
    const match = embedCode.match(/data-id="([^"]+)"/);
    return match ? match[1] : null;
  };

  // Function to extract property description from embed code
  const extractDescription = (embedCode) => {
    const match = embedCode.match(/rel="nofollow">([^<]+)<\/a>/);
    return match ? match[1] : "View Property on Airbnb";
  };

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

      <Grid container spacing={3}>
        {isClient &&
          listings.map((listing) => {
            const listingId = extractListingId(listing.embedCode);
            const description = extractDescription(listing.embedCode);
            const airbnbUrl = `https://www.airbnb.com/rooms/${listingId}?guests=1&adults=1&s=66`;

            return (
              <Grid data-aos="fade-up" item xs={12} md={6} key={listing.id}>
                <Card
                  sx={{
                    mb: 2,
                    overflow: "hidden",
                    borderRadius: 2,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  {/* Property Image - Using the custom image URL */}
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: 240,
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                    onClick={() => window.open(airbnbUrl, "_blank")}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={listing.imageUrl}
                      alt={description}
                      sx={{
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    />

                    {/* Airbnb logo overlay */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        borderRadius: "50%",
                        padding: "6px",
                      }}
                    >
                      {/* <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png"
                        alt="Airbnb"
                        style={{ width: "24px", height: "24px" }}
                      /> */}
                    </Box>
                  </Box>

                  {/* Property details */}
                  <Box sx={{ p: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Degular, Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: "18px",
                        mb: 1.5,
                        color: "#005244",
                      }}
                    >
                      {description}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <HomeIcon
                          sx={{ color: "#777", mr: 0.5, fontSize: 20 }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          Hosted on Airbnb
                        </Typography>
                      </Box>

                      <Button
                        variant="contained"
                        size="small"
                        href={airbnbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<OpenInNewIcon fontSize="small" />}
                        sx={{
                          backgroundColor: "#005244",
                          color: "#F2FFC2",
                          fontWeight: "bold",
                          "&:hover": {
                            backgroundColor: "#00413a",
                          },
                        }}
                      >
                        View Details
                      </Button>
                    </Box>
                  </Box>

                  {/* Footer */}
                  <Box
                    sx={{ p: 1.5, backgroundColor: "#005244", color: "white" }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ textAlign: "center", fontWeight: 500 }}
                    >
                      Managed by Subarashi Real Estate
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}
