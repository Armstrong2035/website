"use client";
import { Typography, Grid, Chip, IconButton, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function ListingCard({ listing }) {
  return (
    <Box
      sx={{
        height: 400,
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url(${listing.images[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&:hover": {
          cursor: "pointer",
          backgroundSize: "105%", // Zoom effect on hover
          transition: "background-size 0.3s ease",
        },
      }}
    >
      {/* Top Bar */}
      <Box sx={{ p: 2 }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Chip
              label={listing.purpose}
              sx={{
                borderRadius: "16px",
                fontWeight: "medium",
                backgroundColor: "#F2FFC2",
                color: "#005244",
              }}
            />
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <IconButton size="small" sx={{ bgcolor: "white" }}>
                  <FavoriteIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small" sx={{ bgcolor: "white" }}>
                  <AddIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small" sx={{ bgcolor: "white" }}>
                  <BookmarkIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Bottom Content */}
      <Box
        sx={{
          background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ color: "white" }}>
              {listing.title}
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
              {listing.location.area}, {listing.location.city}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Grid container spacing={4}>
                  <Grid item>
                    <Typography variant="h6" sx={{ color: "white" }}>
                      {listing.specs.size.value}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                      sqft
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" sx={{ color: "white" }}>
                      {listing.specs.bedrooms}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                      Beds
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" sx={{ color: "white" }}>
                      {listing.specs.bathrooms}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                      Baths
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Typography variant="h6" align="right" sx={{ color: "white" }}>
                  {listing.price.currency}{" "}
                  {listing.price.amount.toLocaleString()}
                  {listing.price.maxAmount &&
                    ` - ${
                      listing.price.currency
                    } ${listing.price.maxAmount.toLocaleString()}`}
                </Typography>
                <Typography
                  align="right"
                  sx={{ color: "rgba(255,255,255,0.8)" }}
                >
                  {listing.price.frequency}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
