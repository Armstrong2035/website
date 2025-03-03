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
      style={{
        backgroundColor: "#005244",
      }}
    >
      <Box
        sx={{
          height: { xs: "50vh", sm: "60vh", md: "70vh" },
        }}
      >
        <HeroImage heroImage={heroImage} />
      </Box>

      <Stack
        sx={{
          width: "100%",
          backgroundColor: "#005244",
          pb: { xs: 4, sm: 4, md: 5 },
        }}
      >
        <HeroNav />
        <Box>
          <HeroText />
        </Box>
      </Stack>
    </div>
  );
}
