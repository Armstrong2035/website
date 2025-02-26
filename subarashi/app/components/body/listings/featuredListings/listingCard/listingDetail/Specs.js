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
        <Typography variant="p" sx={{ color: "black" }}>
          {listing.specs.size.value}
        </Typography>

        <Typography sx={{ color: "black" }}>sqft</Typography>
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
        <Typography sx={{ color: "black" }}>Beds</Typography>
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
        <Typography sx={{ color: "black" }}>Baths</Typography>
      </Box>
    </Stack>
  );
}
