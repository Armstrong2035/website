"use client";

import {
  Box,
  Typography,
  Stack,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import typographyStyles from "../../styles";

export default function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        height: "60vh",
        backgroundColor: "#005244",
        // border: "1px solid red",
        display: "flex",
        justifyContent: "center",
        alignItems: isMobile ? "center" : "flex-end",
      }}
    >
      <Stack
        sx={{ width: "80%" }}
        direction={"row"}
        justifyContent={"space-between"}
      >
        {!isMobile ? (
          <Typography sx={{ ...typographyStyles.heroTitle, color: "#F2FFC2" }}>
            About Us
          </Typography>
        ) : null}

        <Box sx={{ alignSelf: isMobile ? "center" : null }}>
          <Typography
            sx={{
              ...typographyStyles.displayLarge,
              fontSize: "50px",
              color: "#F2FFC2",
              lineHeight: "60px",
            }}
          >
            YOUR GATEWAY TO LUXURY,
          </Typography>
          <Typography
            sx={{
              ...typographyStyles.displayLarge,
              fontSize: "50px",
              color: "#F2FFC2",
              lineHeight: "60px",
            }}
          >
            {" "}
            PROFIT AND SUSTAINABILITY
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
