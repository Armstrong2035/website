import React, { useState } from "react";
import { Box, Typography, Paper, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function ListingGallery({ listing }) {
  // Get images from the listing
  const images = listing.images || [];

  // State for current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Paper
      elevation={2}
      sx={{
        mb: 4,
        p: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        Gallery
      </Typography>

      {images.length > 0 ? (
        <Box sx={{ position: "relative", mt: 2 }}>
          {/* Main carousel */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              paddingTop: "75%", // 4:3 aspect ratio
              borderRadius: 1,
              overflow: "hidden",
              mb: 1,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${images[currentIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "all 0.5s ease-in-out",
              }}
            />

            {/* Navigation arrows */}
            <IconButton
              onClick={goToPrevious}
              sx={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
                zIndex: 1,
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            <IconButton
              onClick={goToNext}
              sx={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
                zIndex: 1,
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Indicators */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 1,
            }}
          >
            {images.map((_, index) => (
              <FiberManualRecordIcon
                key={index}
                onClick={() => goToSlide(index)}
                sx={{
                  fontSize: 12,
                  mx: 0.5,
                  cursor: "pointer",
                  color: index === currentIndex ? "#005244" : "#e0e0e0",
                }}
              />
            ))}
          </Box>

          {/* Thumbnail navigation */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              mt: 2,
              overflowX: "auto",
              pb: 1,
              "&::-webkit-scrollbar": {
                height: 6,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#e0e0e0",
                borderRadius: 3,
              },
            }}
          >
            {images.slice(0, 5).map((image, index) => (
              <Box
                key={index}
                onClick={() => goToSlide(index)}
                sx={{
                  width: 60,
                  height: 45,
                  flexShrink: 0,
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: 1,
                  cursor: "pointer",
                  border:
                    index === currentIndex
                      ? "2px solid #005244"
                      : "2px solid transparent",
                  opacity: index === currentIndex ? 1 : 0.7,
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              />
            ))}

            {images.length > 5 && (
              <Box
                sx={{
                  width: 60,
                  height: 45,
                  flexShrink: 0,
                  backgroundColor: "rgba(0, 82, 68, 0.8)",
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "white",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                }}
              >
                +{images.length - 5}
              </Box>
            )}
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            height: 200,
            backgroundColor: "#f5f5f5",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            No images available
          </Typography>
        </Box>
      )}
    </Paper>
  );
}
