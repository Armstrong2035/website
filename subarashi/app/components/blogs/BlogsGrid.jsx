// app/components/areaGuides/AreaGuideGrid.js
"use client";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useAreaGuidesStore } from "../../store/areaGuidesStore";
import BlogCard from "./BlogCard";

export default function BlogsGrid({ guides }) {
  // Add state to track which card is being hovered
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const setGuides = useAreaGuidesStore((state) => state.setGuides);

  useEffect(() => {
    if (guides && guides.length > 0) {
      setGuides(guides);
    }
  }, []);

  // If no guides are provided, use placeholder data for example
  const placeholderGuides = [
    {
      id: "al-barari",
      title: "Al Barari",
      image:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1739812368/Image_17_uijjge.png",
    },
    {
      id: "al-furjan",
      title: "Al Furjan",
      image:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1739812368/Image_17_uijjge.png",
    },
    {
      id: "arabian-ranches",
      title: "Arabian Ranches",
      image:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1739812368/Image_17_uijjge.png",
    },
    {
      id: "arabian-ranches-2",
      title: "Arabian Ranches 2",
      image:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1739812368/Image_17_uijjge.png",
    },
    {
      id: "business-bay-2",
      title: "Business Bay 2",
      image:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1739812368/Image_17_uijjge.png",
    },
    {
      id: "damac-hills",
      title: "Damac Hills",
      image:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1739812368/Image_17_uijjge.png",
    },
  ];

  // Use provided guides or fallback to placeholders
  const displayGuides =
    guides && guides.length > 0 ? guides : placeholderGuides;

  // Handle mouse enter and leave for cards
  const handleMouseEnter = (id) => {
    setHoveredCardId(id);
  };

  const handleMouseLeave = () => {
    setHoveredCardId(null);
  };

  return (
    <Grid container spacing={3}>
      {displayGuides.map((guide) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={guide.id}
          sx={{
            transition: "filter 0.3s ease, transform 0.3s ease",
            filter:
              hoveredCardId && hoveredCardId !== guide.id
                ? "blur(3px)"
                : "none",
            transform: hoveredCardId === guide.id ? "scale(1.02)" : "scale(1)",
            zIndex: hoveredCardId === guide.id ? 2 : 1,
          }}
          onMouseEnter={() => handleMouseEnter(guide.id)}
          onMouseLeave={handleMouseLeave}
        >
          <BlogCard guide={guide} isHovered={hoveredCardId === guide.id} />
        </Grid>
      ))}
    </Grid>
  );
}
