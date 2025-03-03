import { Typography, Grid, Chip, IconButton, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function ListingActions({ listing }) {
  return (
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
              <IconButton size="small" sx={{}}>
                <FavoriteIcon sx={{ color: "#F2FFC2" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton size="small" sx={{ backgroundColor: "#F2FFC2" }}>
                <AddIcon sx={{ color: "#005244" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton size="small" sx={{}}>
                <BookmarkIcon sx={{ color: "#F2FFC2" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
