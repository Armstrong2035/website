import {
  Typography,
  Grid,
  Chip,
  IconButton,
  Box,
  Grid2,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import typographyStyles from "../../../../../../styles";

export default function Specs({ listing }) {
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          alignItems: "center",
        }}
      >
        <Typography
          variant="p"
          sx={{ ...typographyStyles.cardTitle, color: "#181D1E" }}
        >
          {listing.specs.size.value}
        </Typography>

        <Typography sx={{ ...typographyStyles.bodyMedium, color: "#181D1E" }}>
          sqft
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="p" sx={{ color: "black" }}>
          {listing.specs.bedrooms}
        </Typography>
        <Typography x={{ ...typographyStyles.bodyMedium, color: "#181D1E" }}>
          Beds
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="p" sx={{ color: "black" }}>
          {listing.specs.bathrooms}
        </Typography>
        <Typography x={{ ...typographyStyles.bodyMedium, color: "#181D1E" }}>
          Baths
        </Typography>
      </Box>
    </Stack>
  );
}
