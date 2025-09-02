// app/components/body/featured/areaGuides/FeaturedAreaGuides.js
"use client";

import { useState, useEffect } from "react";
import { Box, Typography, Grid, Button, Container } from "@mui/material";
import typographyStyles from "../../../../styles";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FeaturedAreaGuideCard from "./FeaturedAreaGuideCard";
import { useAreaGuidesStore } from "../../../../store/areaGuidesStore";

export default function FeaturedAreaGuides({ guides }) {
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const featuredGuides = guides.slice(0, 4);

  return (
    <Container>
      <Box
        sx={{
          mb: { sm: 2, md: 6 },
          mt: { xs: 2, md: 6 },
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 6,
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -16,
              left: 0,
              right: 0,
              height: "1px",
              background:
                "linear-gradient(to right, #005244 0%, transparent 100%)",
              opacity: 0.2,
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              ...typographyStyles.cardHeader,
              color: "#005244",
              fontSize: { xs: "24px", md: "32px" },
              fontWeight: 600,
            }}
          >
            Featured Area Guides
          </Typography>
          <Link href="/areaGuides" style={{ textDecoration: "none" }}>
            <Button
              variant="text"
              endIcon={<ArrowForwardIcon />}
              sx={{
                color: "#005244",
                textTransform: "none",
                fontWeight: 500,
                fontSize: "16px",
                padding: "8px 16px",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(0,82,68,0.08)",
                  transform: "translateX(4px)",
                },
              }}
            >
              View all area guides
            </Button>
          </Link>
        </Box>

        <Grid
          container
          spacing={3}
          sx={{
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "200%",
              height: "200%",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle at center, rgba(0,82,68,0.03) 0%, transparent 70%)",
              zIndex: -1,
              pointerEvents: "none",
            },
          }}
        >
          {featuredGuides.map((guide) => (
            <Grid
              item
              size={{ xs: 12, sm: 6, md: 3 }}
              key={guide.id}
              onMouseEnter={() => setHoveredCardId(guide.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              sx={{
                transition: "all 0.3s ease-in-out",
                transform:
                  hoveredCardId === guide.id ? "translateY(-8px)" : "none",
              }}
            >
              <FeaturedAreaGuideCard
                guide={guide}
                isHovered={hoveredCardId === guide.id}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
