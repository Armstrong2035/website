"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroImage({ heroImage, additionalStyles = {} }) {

  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay prevented:", error);

        });
      }
    };

    const handleError = (error) => {
      console.error("Video loading error:", error);
      setIsVideoLoaded(false);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
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
        preload="metadata"
        poster="https://res.cloudinary.com/dulafqaoq/video/upload/so_0/v1742972834/Hero-Page_Video_w5dimj.jpg"
        controls={false}
        style={{ 
          objectFit: "cover", 
          width: "100%", 
          height: "100%",
          backgroundColor: "#000" 
        }}
      />
    </Box>
  );
}
