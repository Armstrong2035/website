"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HeroImage({ heroImage, additionalStyles = {} }) {

  const videoRef = useRef(null);

  useEffect(() => {
    const playPromise = videoRef.current?.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {

        console.log("Autoplay blocked:", error);
      });
    }
  }, []);


  return (
    <Box
      sx={{
        height: {
          xs:"70vh",
          sm:"80vh",
          md:"100vh",
        },
        width: "100%",
        position: "relative", // Required for next/image
        overflow: "hidden", // Helps prevent any potential image overflow
        ...additionalStyles, // Allow passing additional styles from parent components
      }}
    >
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/dulafqaoq/video/upload/q_auto:good,vc_auto,w_auto,c_limit,f_auto/v1742972834/Hero-Page_Video_w5dimj.mp4"
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline
        preload="auto"

        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      ></video>
    </Box>
  );
}
