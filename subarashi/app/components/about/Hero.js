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
        height: "40vh",
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
        justifyContent={"center"}
        alignItems={"center"}
      >
        {!isMobile ? (
          <Typography
            sx={{
              ...typographyStyles.heroTitle,
              color: "#F2FFC2",
              fontSize: "70px",
            }}
          >
            About Us
          </Typography>
        ) : null}
      </Stack>
    </Box>
  );
}
