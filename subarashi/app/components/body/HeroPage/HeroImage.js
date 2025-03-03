import { Box } from "@mui/material";
import Image from "next/image";

export default function HeroImage({ heroImage }) {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          position: "relative", // Required for next/image
          overflow: "hidden", // Helps prevent any potential image overflow
        }}
      >
        <Image
          src={heroImage}
          alt="Hero background"
          fill
          priority
          quality={100}
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
    </>
  );
}
