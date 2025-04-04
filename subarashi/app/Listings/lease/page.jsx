"use client"
import { Box, Grid2, Card, CardMedia, CardContent, Typography, Chip, Container } from "@mui/material"
import { mockListings } from "../mockData"
import NavBar from "../../components/appBar/AppBar"
import typographyStyles from "../../styles";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/loading/loading-spinner";


export default function PropertyListings() {
  const [listings, setListings] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch("/api/listings/lease-listings");
        const data = await res.json();
        setListings(data.listings);
      } catch (error) {
        console.error("Failed to fetch listings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  return (
    <>
   <NavBar  color="#005244"
        hoverColor="#005244"
        hoverBackground={"#FFFFFF"} />
    <Container maxWidth="lg" sx={{ py: 4, mt: 6 }}>
            {loading ? (
                  <LoadingSpinner />
                ) : (
      <Grid2 container spacing={3} justifyContent="center">
        {listings.map((listing) => (
          <Grid2 item xs={12} sm={6} md={4} key={listing.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: "none",
                border: "1px solid transparent",
                transition: "all 0.3s ease",
                '&:hover': {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 20px rgba(0, 82, 68, 0.15)",
                  borderColor: "#005244",
                },
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia component="img" height="225" image='/images/listing-img.jpg' alt={listing.location.building} />
                <Chip
                  label={"For sale"}
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "#005e46",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                    borderRadius: "0 0 0 0",
                    ...typographyStyles.bodySmall,
                   
                  }}
                  fontFamily
                />
              </Box>
              <CardContent sx={{ p: 1, pt: 2 }}>
                <Typography variant="body1"
        sx={{ ...typographyStyles.bodyLarge, color: "#333", fontWeight: 500 }}
         component="div" gutterBottom>
                  {`${listing.location.building}, ${listing.location.city}`}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: 1,
                    "& > div": {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mr: 2,
                      pr: 2,
                      borderRight: "2px solid #005244",
                      minHeight: "40px"
                      
                    },
                  }}
                >
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 400 }}>
                      {listing.area}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      sqft
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 400 }}>
                      0{listing.bedrooms
                      }
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      beds
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 400 }}>
                      {" "}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      kitchen
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 400 }}>
                      0{listing.bathrooms}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      baths
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
                )}
    </Container>
    </>
  )
}

