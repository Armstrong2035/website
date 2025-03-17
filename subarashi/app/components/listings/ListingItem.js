import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Grid,
  Divider,
  Chip,
} from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ListingItem = ({ listing }) => {
  // Determine badge text based on purpose
  const badgeText = listing.purpose === "For Sale" ? "FOR SALE" : "FOR RENT";
  const badgeColor = listing.purpose === "For Sale" ? "#005244" : "#FF9800";

  // Format price
  const formatPrice = (priceObj) => {
    if (!priceObj) return "";

    const { amount, currency, frequency } = priceObj;
    const formattedAmount = amount.toLocaleString("en-AE");

    if (frequency) {
      return `${currency} ${formattedAmount}/${frequency}`;
    }
    return `${currency} ${formattedAmount}`;
  };

  // Format location display
  const formatLocation = (locationObj) => {
    if (!locationObj) return "";

    if (typeof locationObj === "string") return locationObj;

    const { building, area, community, city } = locationObj;
    const locationParts = [building, area, community].filter(Boolean);

    if (locationParts.length === 0) return city || "";
    return locationParts[0];
  };

  // Get area display
  const formatArea = (specs) => {
    if (!specs || !specs.size) return "";

    const { value, unit } = specs.size;
    return `${value.toLocaleString()} ${unit}`;
  };

  // Get first image or placeholder
  const mainImage =
    listing.images && listing.images.length > 0
      ? listing.images[0].trim()
      : "https://res.cloudinary.com/dulafqaoq/image/upload/v1739812368/Image_17_uijjge.png";

  return (
    <Card
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
        },
      }}
    >
      {/* Image Section with Badge */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="220"
          image={mainImage}
          alt={listing.title}
        />
        <Chip
          label={badgeText}
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            backgroundColor: badgeColor,
            color: "white",
            fontWeight: "bold",
            fontSize: "0.75rem",
          }}
        />
      </Box>

      {/* Content Section */}
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        {/* Price */}
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", mb: 1 }}
        >
          {formatPrice(listing.price)}
        </Typography>

        {/* Title */}
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ fontWeight: "medium", mb: 1 }}
        >
          {listing.title}
        </Typography>

        {/* Location */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <LocationOnIcon
            fontSize="small"
            sx={{ color: "text.secondary", mr: 0.5 }}
          />
          <Typography variant="body2" color="text.secondary">
            {formatLocation(listing.location)}
          </Typography>
        </Box>

        <Divider sx={{ my: 1.5 }} />

        {/* Property Features */}
        <Grid container spacing={2} sx={{ mt: "auto" }}>
          <Grid item xs={4}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <BedIcon
                sx={{ fontSize: 18, color: "text.secondary", mr: 0.5 }}
              />
              <Typography variant="body2" color="text.secondary">
                {listing.specs?.bedrooms || 0}{" "}
                {listing.specs?.bedrooms === 1 ? "Bed" : "Beds"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <BathtubIcon
                sx={{ fontSize: 18, color: "text.secondary", mr: 0.5 }}
              />
              <Typography variant="body2" color="text.secondary">
                {listing.specs?.bathrooms || 0}{" "}
                {listing.specs?.bathrooms === 1 ? "Bath" : "Baths"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <SquareFootIcon
                sx={{ fontSize: 18, color: "text.secondary", mr: 0.5 }}
              />
              <Typography variant="body2" color="text.secondary">
                {formatArea(listing.specs)}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ListingItem;
