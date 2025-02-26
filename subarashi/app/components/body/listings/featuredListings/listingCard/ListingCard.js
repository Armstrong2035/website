"use client";
import {
  Typography,
  Grid,
  Chip,
  IconButton,
  Box,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ListingDetails from "./listingDetail/ListingDetails";
import ListingActions from "./ListingActions";

export default function ListingCard({ listing }) {
  return (
    <Card sx={{ display: "flex", flexDirection: "column" }}>
      {/* Image Container */}
      <Box
        sx={{
          height: 300, // Adjust image height
          backgroundImage: `url(${listing.images[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-size 0.3s ease",
          "&:hover": {
            cursor: "pointer",
            backgroundSize: "105%", // Zoom effect on hover
          },
        }}
      >
        {/* Top Bar with Actions */}
        <Box p={1}>
          <ListingActions listing={listing} />
        </Box>
      </Box>

      {/* Content Below Image */}

      <CardContent sx={{}}>
        <ListingDetails listing={listing} />
      </CardContent>
    </Card>
  );
}
