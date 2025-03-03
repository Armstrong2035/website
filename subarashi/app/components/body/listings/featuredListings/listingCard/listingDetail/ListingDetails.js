import {
  Typography,
  Grid,
  Chip,
  IconButton,
  Box,
  Grid2,
  Stack,
  Divider,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DetailBody from "./DetailBody";
import typographyStyles from "../../../../../../styles";

export default function ListingDetails({ listing }) {
  return (
    <Grid2 container sx={{ border: "1px solid #005244" }}>
      <Grid2
        item
        size={{ lg: 6 }}
        sx={{ backgroundColor: "#005244", p: 3 }}
        direction={"column"}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Typography
            sx={{ ...typographyStyles.sectionTitle, color: "#FFFFFF" }}
          >
            {listing.title}
          </Typography>

          <Typography
            variant="p"
            sx={{ ...typographyStyles.bodyLarge, color: "#F2FFC2" }}
          >
            {`${listing.location.area}, ${listing.location.city}`}
          </Typography>
        </Box>
      </Grid2>

      <Grid2 size={{ lg: 6 }} sx={{ backgroundColor: "#FFFFFF", p: 2 }}>
        <DetailBody listing={listing} />
      </Grid2>
    </Grid2>
  );
}
