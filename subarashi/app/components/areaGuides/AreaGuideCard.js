// app/components/areaGuides/AreaGuideCard.js
import React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import Link from "next/link";
import typographyStyles from "../../styles";

export default function AreaGuideCard({ guide, isHovered = false }) {
  return (
    <Link href={`/areaGuides/${guide.id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          height="240"
          image={
            guide.image ||
            "https://res.cloudinary.com/dulafqaoq/image/upload/v1739812368/Image_17_uijjge.png"
          }
          alt={guide.title}
          sx={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#FFF",
            p: 3,
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{
              ...typographyStyles.cardHeader,
              color: "#005244",
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            {guide.title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
