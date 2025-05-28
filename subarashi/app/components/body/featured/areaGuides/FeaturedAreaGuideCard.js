// app/components/body/featured/areaGuides/FeaturedAreaGuideCard.js
import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import typographyStyles from "../../../../styles";

export default function FeaturedAreaGuideCard({ guide, isHovered }) {
  return (
    <Link href={`/areaGuides/${guide.id}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: "16px",
          overflow: "hidden",
          position: "relative",
          backgroundColor: "#FFF",
          boxShadow: isHovered
            ? "0 16px 32px rgba(0,82,68,0.15)"
            : "0 8px 16px rgba(0,82,68,0.08)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: 240,
            overflow: "hidden",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "30%",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)",
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            },
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
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 3,
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "10%",
              right: "10%",
              height: "1px",
              background: "linear-gradient(to right, transparent, #005244, transparent)",
              opacity: 0.1,
            },
          }}
        >
          <Typography
            sx={{
              ...typographyStyles.cardHeader,
              color: "#005244",
              textAlign: "center",
              fontWeight: 500,
              fontSize: "18px",
              transform: isHovered ? "translateY(-4px)" : "translateY(0)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {guide.title}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}
