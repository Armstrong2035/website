// app/components/body/featured/featuredAreaGuides/FeaturedAreaGuideCard.js
import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import typographyStyles from "../../../../styles";

export default function FeaturedAreaGuideCard({ guide }) {
  return (
    <Link href={`/areaGuides/${guide.id}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",

          overflow: "hidden",

          transition: "all 0.3s ease",
          backgroundColor: "#FFF",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: 200,
          }}
        >
          <Image
            src={
              guide.image ||
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1739812368/Image_17_uijjge.png"
            }
            alt={guide.title}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flexStart",

            p: 2,
          }}
        >
          <Typography
            sx={{
              ...typographyStyles.cardHeader,
              color: "#005244",
              textAlign: "center",
              fontWeight: 500,
              fontSize: "18px",
            }}
          >
            {guide.title}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}
