"use client";
import HeroText from "./HeroText";

import HeroImage from "./HeroImage";
import HeroNav from "./HeroNav";
import { Container, Box, Stack } from "@mui/material";

const styles = {
  heroTitle: {
    fontFamily: "Degular",
    fontWeight: "300",
    fontSize: "64px", // Reduced from 130px
    lineHeight: "72px", // Reduced from 140px proportionally
    letterSpacing: "0%",
    color: "#F2FFC2",
  },
  heroText: {
    fontFamily: "Degular",
    fontWeight: 400,
    fontSize: "24px", // Reduced from 30px
    lineHeight: "40px", // Reduced from 80px proportionally
    letterSpacing: "0%",
    textAlign: "center",
    color: "#F2FFC2",
  },
  heroSubtext: {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "24px", // Reduced from 30px
    lineHeight: "40px", // Reduced from 80px proportionally
    letterSpacing: "0%",
    textAlign: "center",
    color: "#F2FFC2",
  },
};

export default function HeroPage({ heroImage }) {
  return (
    <div
      style={{
        height: "100vh",
        border: "1px solid red",
        backgroundColor: "#005244",
      }}
    >
      <Box sx={{ height: "70%" }}>
        <HeroImage heroImage={heroImage} />
      </Box>

      <Stack
        sx={{
          height: "30%",
          width: "100%",
          backgroundColor: "#005244",
        }}
      >
        <HeroNav style1={styles.heroText} style2={styles.heroSubtext} />
        <Box>
          <HeroText style={styles.heroTitle} />
        </Box>
      </Stack>
    </div>
  );
}
