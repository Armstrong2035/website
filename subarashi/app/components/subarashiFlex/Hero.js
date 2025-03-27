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
        alignItems: "flex-end",
      }}
    >
      <Typography
        sx={{
          ...typographyStyles.displayLarge,
          fontSize: "50px",
          color: "#F2FFC2",
          lineHeight: "60px",
        }}
      >
        Pay your rent in flexible installments
      </Typography>
    </Box>
  );
}
