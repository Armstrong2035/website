import { Typography, Grid, Chip, IconButton, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import typographyStyles from "../../../../../styles";

export default function ListingActions({ listing }) {
  return (
    <Box sx={{ p: { xs: 1, sm: 1.5, md: 2 } }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Chip
            label={
              <Typography sx={{ ...typographyStyles.caption }}>
                {listing.purpose}{" "}
              </Typography>
            }
            size="small"
            sx={{
              borderRadius: "16px",
              fontWeight: "medium",
              backgroundColor: "#F2FFC2",
              color: "#005244",
              fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.875rem" },
              height: { xs: 24, sm: 28, md: 32 },
            }}
          />
        </Grid>
        <Grid item>
          <Grid container spacing={{ xs: 0.5, sm: 0.75, md: 1 }}>
            <Grid item>
              <IconButton
                size="small"
                sx={{
                  padding: { xs: 0.5, sm: 0.75, md: 1 },
                }}
              >
                <FavoriteIcon
                  sx={{
                    color: "#F2FFC2",
                    fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
                  }}
                />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                size="small"
                sx={{
                  backgroundColor: "#F2FFC2",
                  padding: { xs: 0.5, sm: 0.75, md: 1 },
                }}
              >
                <AddIcon
                  sx={{
                    color: "#005244",
                    fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
                  }}
                />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                size="small"
                sx={{
                  padding: { xs: 0.5, sm: 0.75, md: 1 },
                }}
              >
                <BookmarkIcon
                  sx={{
                    color: "#F2FFC2",
                    fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
                  }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
