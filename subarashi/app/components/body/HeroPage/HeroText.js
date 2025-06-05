"use client";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import typographyStyles from "../../../styles";

const carouselTexts = [
  "Find your dream home in Dubai",
  "Luxury Living Redefined",
  "Your Vision, Our Expertise",
  "Experience Excellence in Real Estate",
];

export default function HeroText() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % carouselTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, rgba(0,82,68,0.3) 0%, rgba(0,82,68,0.7) 100%)",
        zIndex: 2,
      }}
    >
      {/* Subarashi Animation */}
      <Box sx={{ mb: 4 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {["S", "U", "B", "A", "R", "A", "S", "H", "I"].map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterAnimation}
              style={{
                display: "inline-block",
                fontSize: { xs: "48px", sm: "64px", md: "96px" },
                fontWeight: 700,
                color: "#F2FFC2",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                marginRight: letter === " " ? "16px" : "4px",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </Box>

      {/* Text Carousel */}
      <Box
        sx={{
          overflow: "hidden",
          textAlign: "center",
          px: { xs: 2, sm: 5, md: 10 },
        }}
      >
        <motion.div
          key={currentTextIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Typography
            sx={{
              ...typographyStyles.bannerText,
              color: "#F2FFC2",
              fontSize: {
                xs: "24px",
                sm: "32px",
                md: "48px",
              },
              lineHeight: {
                xs: "32px",
                sm: "40px",
                md: "56px",
              },
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            {carouselTexts[currentTextIndex]}
          </Typography>
        </motion.div>
      </Box>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <Typography
          sx={{
            ...typographyStyles.bodyLarge,
            color: "#F2FFC2",
            fontSize: {
              xs: "16px",
              sm: "18px",
              md: "20px",
            },
            mt: 4,
            textAlign: "center",
            opacity: 0.9,
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
          }}
        >
          Discover Exceptional Properties in Dubai
        </Typography>
      </motion.div>
    </Box>
  );
}
