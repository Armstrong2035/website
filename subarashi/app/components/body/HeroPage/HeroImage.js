import { Box } from "@mui/material";
import Image from "next/image";

export default function HeroImage({ heroImage, additionalStyles = {} }) {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        position: "relative", // Required for next/image
        overflow: "hidden", // Helps prevent any potential image overflow
        ...additionalStyles, // Allow passing additional styles from parent components
      }}
    >
      <video
        src="https://res.cloudinary.com/dulafqaoq/video/upload/q_auto:good,vc_auto,w_auto,c_limit,f_auto/v1742972834/Hero-Page_Video_w5dimj.mp4"
        autoPlay
        loop
        muted
        playsInline
        width="100%"
        style={{ objectFit: "cover" }}
      ></video>
    </Box>
  );
}
