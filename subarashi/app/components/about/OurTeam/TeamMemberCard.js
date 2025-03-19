"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import typographyStyles from "../../../styles";

export const TeamMemberCard = ({ member }) => {
  // Fix for URLs with double 'h'
  const fixedImageUrl = member.ImageUrl.startsWith("hhttps")
    ? member.ImageUrl.replace("hhttps", "https")
    : member.ImageUrl;

  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 2,
        overflow: "hidden",
        height: "100%",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: "100%", // Creates a square aspect ratio
        }}
      >
        <Image
          src={fixedImageUrl}
          alt={member.Name || "Team Member"}
          fill
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background:
              "linear-gradient(to top, rgba(0,82,68,0.7), transparent)",
            color: "white",
            p: 2,
          }}
        >
          <Typography
            sx={{
              ...typographyStyles.bodyLarge,
              color: "#F2FFC2",
              fontWeight: 600,
            }}
          >
            {member.Name}
          </Typography>
          <Typography
            sx={{
              ...typographyStyles.bodyMedium,
              color: "#F2FFC2",
              opacity: 0.8,
            }}
          >
            {member.Title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
