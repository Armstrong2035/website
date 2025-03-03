import React from "react";
import {
  Grid,
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import ListingCard from "../body/listings/featuredListings/listingCard/ListingCard";

export default function ListingsGrid({ listings }) {
  // State for sorting
  const [sortBy, setSortBy] = React.useState("newest");

  // Handle sort change
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  // Sort listings based on selected option
  const sortedListings = React.useMemo(() => {
    if (!listings) return [];

    let sorted = [...listings];

    switch (sortBy) {
      case "price-high":
        return sorted.sort((a, b) => b.price.amount - a.price.amount);
      case "price-low":
        return sorted.sort((a, b) => a.price.amount - b.price.amount);
      case "beds":
        return sorted.sort((a, b) => b.specs.bedrooms - a.specs.bedrooms);
      case "baths":
        return sorted.sort((a, b) => b.specs.bathrooms - a.specs.bathrooms);
      case "size":
        return sorted.sort((a, b) => b.specs.size.value - a.specs.size.value);
      case "newest":
      default:
        // Assuming newest would be by ID for mock data
        return sorted;
    }
  }, [listings, sortBy]);

  return (
    <Box>
      {/* Header with count and sort options */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h6">{listings.length} Properties Found</Typography>

        <FormControl variant="outlined" size="small" sx={{ minWidth: 200 }}>
          <InputLabel>Sort By</InputLabel>
          <Select value={sortBy} onChange={handleSortChange} label="Sort By">
            <MenuItem value="newest">Newest First</MenuItem>
            <MenuItem value="price-high">Price: High to Low</MenuItem>
            <MenuItem value="price-low">Price: Low to High</MenuItem>
            <MenuItem value="beds">Most Bedrooms</MenuItem>
            <MenuItem value="baths">Most Bathrooms</MenuItem>
            <MenuItem value="size">Largest Size</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Grid of listing cards */}
      <Grid container spacing={3}>
        {sortedListings.map((listing) => (
          <Grid item xs={12} sm={6} md={6} key={listing.id}>
            <ListingCard listing={listing} />
          </Grid>
        ))}
      </Grid>

      {/* No results message */}
      {sortedListings.length === 0 && (
        <Box
          sx={{
            height: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px dashed #ccc",
            borderRadius: 2,
            mt: 3,
          }}
        >
          <Typography variant="body1" color="text.secondary">
            No properties match the selected filters
          </Typography>
        </Box>
      )}
    </Box>
  );
}
