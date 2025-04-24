import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Paper,
  Divider,
  Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import typographyStyles from "../../styles";

export default function ListingAgent({ listing }) {
  return (
    <Box sx={{ textAlign: "left", mb: 2, mt: 12 }}>
      {/* Agent Box with Image */}
      <Box
        sx={{
          overflow: "hidden",
        }}
      >
        {/* Image container that fills the width of the box */}
        <Box
          sx={{
            width: "100%",
            height: 300,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={listing?.agent?.image}
            alt={listing?.agent?.name}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>

        {/* Text content below the image */}
        <Box sx={{ p: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Degular, Arial, sans-serif",
              fontWeight: 400,
              color: "#005244",
              fontSize: "24px",
            }}
          >
            {listing?.agent?.name || "Agent Name"}
          </Typography>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontFamily: "Degular, Arial, sans-serif",
              fontWeight: 300,
              color: "#005244",
              fontSize: "16px",
            }}
          >
            Investment Consultant
          </Typography>
          <Stack direction={"row"} alignItems={"center"} spacing={2} mt={2}>
            <Typography
              component="a"
              href={`mailto:${listing?.agent?.email}?subject=Inquiry about your listing&body=Hi ${listing?.agent?.name}`}
              sx={{
                ...typographyStyles.bodyLarge,
                color: "#005244",
                textDecoration: "none",
              }}
            >
              Contact
            </Typography>
            <ArrowForwardIcon sx={{ color: "#005244" }} />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
