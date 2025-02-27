import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import EmailIcon from "@mui/icons-material/Email";

export default function ListingShare({ listing }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Typography variant="body1" sx={{ fontWeight: "medium" }}>
        Share:
      </Typography>

      <Box sx={{ display: "flex", gap: 1 }}>
        <IconButton
          size="small"
          sx={{
            color: "#1877F2",
            "&:hover": { backgroundColor: "rgba(24, 119, 242, 0.1)" },
          }}
        >
          <FacebookIcon />
        </IconButton>

        <IconButton
          size="small"
          sx={{
            color: "#1DA1F2",
            "&:hover": { backgroundColor: "rgba(29, 161, 242, 0.1)" },
          }}
        >
          <TwitterIcon />
        </IconButton>

        <IconButton
          size="small"
          sx={{
            color: "#0A66C2",
            "&:hover": { backgroundColor: "rgba(10, 102, 194, 0.1)" },
          }}
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          size="small"
          sx={{
            color: "#E60023",
            "&:hover": { backgroundColor: "rgba(230, 0, 35, 0.1)" },
          }}
        >
          <PinterestIcon />
        </IconButton>

        <IconButton
          size="small"
          sx={{
            color: "#EA4335",
            "&:hover": { backgroundColor: "rgba(234, 67, 53, 0.1)" },
          }}
        >
          <EmailIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
