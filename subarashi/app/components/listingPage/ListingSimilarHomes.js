import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Divider,
} from "@mui/material";
import Link from "next/link";
import { mockListings } from "../../../public/mockListings";

export default function ListingSimilarHomes({ listing }) {
  // Get similar listings (in a real app, this would be based on similar criteria)
  // Here we're just excluding the current listing
  const similarListings = mockListings
    .filter((item) => item.id !== listing.id)
    .slice(0, 2); // Show only 2 similar listings

  return (
    <Box sx={{ my: 5 }}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Similar Homes You May Like
        <Link href="/listings" style={{ textDecoration: "none" }}>
          <Typography
            variant="body2"
            sx={{ color: "#005244", cursor: "pointer" }}
          >
            VIEW ALL
          </Typography>
        </Link>
      </Typography>

      <Grid container spacing={3}>
        {similarListings.map((similarListing) => (
          <Grid item xs={12} sm={6} key={similarListing.id}>
            <Link
              href={`/listings/${similarListing.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    height: 200,
                    backgroundImage: `url(${similarListing.images[0]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 12,
                      left: 12,
                      backgroundColor:
                        similarListing.purpose === "For Rent"
                          ? "#005244"
                          : "#FF5722",
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: "16px",
                      px: 2,
                      py: 0.5,
                    }}
                  >
                    {similarListing.purpose}
                  </Box>
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {similarListing.price.currency}{" "}
                    {similarListing.price.amount.toLocaleString()}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {similarListing.location.area},{" "}
                    {similarListing.location.city}
                  </Typography>

                  <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                    <Chip
                      label={`${similarListing.specs.bedrooms} Bed`}
                      size="small"
                      sx={{ backgroundColor: "#F2FFC2", color: "#005244" }}
                    />
                    <Chip
                      label={`${similarListing.specs.bathrooms} Bath`}
                      size="small"
                      sx={{ backgroundColor: "#F2FFC2", color: "#005244" }}
                    />
                    <Chip
                      label={`${similarListing.specs.size.value} sqft`}
                      size="small"
                      sx={{ backgroundColor: "#F2FFC2", color: "#005244" }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 3 }} />
    </Box>
  );
}
