"use client";
import HeroText from "./HeroText";

import HeroImage from "./HeroImage";
import HeroNav from "./HeroNav";
import { Container, Box, Stack } from "@mui/material";
import { useListingsStore } from "../../../zustand/listingsStore";

export default function HeroPage({ heroImage }) {
  const listings = useListingsStore((state) => state.listings);

  return (
    <div
      style={{
        backgroundColor: "#005244",
      }}
    >
      <Box sx={{ height: "70vh" }}>
        {" "}
        {/* Add explicit height here */}
        <HeroImage heroImage={heroImage} />
      </Box>

      <Stack
        sx={{
          width: "100%",
          backgroundColor: "#005244",
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
