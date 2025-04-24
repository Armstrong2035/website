"use client";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import HeroNav from "./HeroNav";
import { Box, Stack } from "@mui/material";
import { useListingsStore } from "../../../zustand/listingsStore";

export default function HeroPage({ heroImage }) {
  const listings = useListingsStore((state) => state.listings);

  return (
    <div
      data-aos="zoom-in"
      style={{
        backgroundColor: "#005244",
        height: {
          xs: "70vh",
          sm: "80vh",
          md: "100vh",
        },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: { xs: "100%", sm: "100%", md: "100%" },
        }}
      >
        <HeroImage heroImage={heroImage} />
      </Box>

      {/* <Stack
        justifyContent={"center"}
        sx={{
          width: "100%",
          backgroundColor: "#005244",
          // pb: { xs: 4, sm: 4, md: 5 },
        }}
      >
        <HeroNav />
        <HeroText />
      </Stack> */}
    </div>
  );
}
