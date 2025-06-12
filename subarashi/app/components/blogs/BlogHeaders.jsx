// app/components/blogs/blogHeader.jsx
import React from "react";
import { Typography, Box } from "@mui/material";
import typographyStyles from "../../styles";

export default function BlogHeader() {
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
       Blogs
      </Typography>

      <Typography
        variant="body1"
        sx={{ ...typographyStyles.bodyLarge, color: "#333" }}
      >
        Stay informed with expert advice, market updates, home buying and selling tips, and property investment strategies tailored to help you make smarter decisions.
      </Typography>
    </Box>
  );
}
