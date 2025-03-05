import React from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  IconButton,
  Grid,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import typographyStyles from "../../styles";

export default function ListingHeader({ listing }) {
  // Format the price
  const formattedPrice = listing?.price?.amount
    ? `${listing.price.amount.toLocaleString()}`
    : "$1,67,000";

  // Calculate monthly payment estimate if price exists
  const monthlyPayment = listing?.price?.amount
    ? `${((listing.price.amount * 0.05) / 12).toLocaleString("en-US", {
        maximumFractionDigits: 0,
      })}/mo*`
    : "$8,343/mo*";

  // Address
  const address = listing?.location?.area
    ? `${listing.location.building || ""} ${listing.location.area}, ${
        listing.location.city || "Dubai"
      }`
    : "3891 Ranchview Dr. Richardson, California";

  return (
    <Box
      sx={{
        py: { xs: 4, md: 5 },
        mb: { xs: 2, md: 1 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          {/* Left column - Title */}
          <Grid item xs={12} md={7} lg={8}>
            <Box>
              {/* Title in large display */}
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  ...typographyStyles.bannerText,
                  fontSize: { xs: "50px", sm: "60px" },
                  lineHeight: { xs: "60px", sm: "70px" },
                  fontWeight: 500,
                  mb: { xs: 2, md: 3 },
                  color: "#000000",
                }}
              >
                {listing.title}
              </Typography>

              {/* FOR SALE tag and Location in single row */}
              <Box sx={{ display: "flex", alignItems: "center", mt: 1, mb: 3 }}>
                <Chip
                  label={listing.purpose || "FOR SELL"}
                  size="small"
                  sx={{
                    ...typographyStyles.button2,
                    backgroundColor: "#005244",
                    color: "white",

                    borderRadius: "4px",
                    height: 32,
                    mr: 2,
                  }}
                />
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocationOnIcon
                    sx={{ color: "#777777", fontSize: 20, mr: 0.5 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      ...typographyStyles.bodyLarge,
                      color: "#777777",
                      fontSize: "15px",
                    }}
                  >
                    {address}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right column - Price info */}
          <Grid item xs={12} md={5} lg={4}>
            <Box
              sx={{
                textAlign: "right",
                height: "100%",
                display: "flex",
                flexDirection: "column",

                mt: { xs: 2, md: 0 },

                alignItems: { md: "flex-end", xs: "flex-start" },
                justifyContent: { md: "flex-end", xs: "flex-start" },
              }}
            >
              {/* Price section */}

              <Box sx={{}}>
                <Box sx={{ mb: 5 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      ...typographyStyles.headerRight,
                      fontSize: { xs: "28px" },
                      lineHeight: { xs: "34px" },
                      color: "#000000",
                      mb: 0.5,
                    }}
                  >
                    Price: {formattedPrice}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      ...typographyStyles.captionRight,
                      color: "#555555",

                      fontWeight: 400,
                    }}
                  >
                    Payment: 6 cheques
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    mt: { xs: 3, md: 0 },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      ...typographyStyles.bodyLarge,
                      mr: 2,
                      color: "#333333",

                      fontWeight: 500,
                    }}
                  >
                    Share
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <IconButton
                      sx={{
                        border: "1px solid #005244",
                        borderRadius: "4px",
                        p: 1,
                        backgroundColor: "#005244",
                        "&:hover": {
                          backgroundColor: "#003d33",
                        },
                      }}
                    >
                      <FavoriteIcon sx={{ color: "#FFFFFF", fontSize: 20 }} />
                    </IconButton>
                    <IconButton
                      sx={{
                        border: "1px solid #E0E0E0",
                        borderRadius: "4px",
                        p: 1,
                      }}
                    >
                      <BookmarkBorderIcon
                        sx={{ color: "#333333", fontSize: 20 }}
                      />
                    </IconButton>
                    <IconButton
                      sx={{
                        border: "1px solid #E0E0E0",
                        borderRadius: "4px",
                        p: 1,
                      }}
                    >
                      <ShareIcon sx={{ color: "#333333", fontSize: 20 }} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>

              {/* Share button */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
