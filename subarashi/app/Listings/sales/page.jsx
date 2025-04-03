"use client"
import { Box, Grid2, Card, CardMedia, CardContent, Typography, Chip, Container } from "@mui/material"
import { mockListings } from "../mockData"
import NavBar from "../../components/appBar/AppBar"
import typographyStyles from "../../styles";


export default function PropertyListings() {
  return (
    <>
   <NavBar      color="#005244"
        hoverColor="#005244"
        hoverBackground={"#FFFFFF"} />
    <Container maxWidth="lg" sx={{ py: 4, mt: 6 }}>
      <Grid2 container spacing={3} justifyContent="center">
        {mockListings.map((listing) => (
          <Grid2 item xs={12} sm={6} md={4} key={listing.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: "none",
                border: "none",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia component="img" height="225" image={listing.image} alt={listing.address} />
                <Chip
                  label={listing.status}
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
                  }}
                />
              </Box>
              <CardContent sx={{ p: 1, pt: 2 }}>
                <Typography variant="body1"
        sx={{ ...typographyStyles.bodyLarge, color: "#333", fontWeight: 500 }}
         component="div" gutterBottom>
                  {listing.address}
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
                      mr: 2,
                      pr: 2,
                      borderRight: "1px solid #e0e0e0",
                      "&:last-child": {
                        borderRight: "none",
                      },
                    },
                  }}
                >
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 400 }}>
                      {listing.sqft}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      sqft
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 400 }}>
                      {listing.beds}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      beds
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 400 }}>
                      {listing.kitchen}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      kitchen
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 400 }}>
                      {listing.baths}
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
    </Container>
    </>
  )
}

