// app/components/areaGuides/AreaGuideHeader.js
import React from "react";
import { Typography, Box } from "@mui/material";
import typographyStyles from "../../styles";

export default function AreaGuideHeader() {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          ...typographyStyles.listingOverview,
          color: "#005244",
          fontWeight: 500,
          mb: 2,
        }}
      >
        Area Guides
      </Typography>

      <Typography
        variant="body1"
        sx={{ ...typographyStyles.bodyLarge, color: "#333" }}
      >
        Whether you&apos;re looking for a vibrant city lifestyle or a serene
        area with stunning views, Dubai offers plenty of locations for every
        need. Just browse through our area portfolio below.
      </Typography>
    </Box>
  );
}
