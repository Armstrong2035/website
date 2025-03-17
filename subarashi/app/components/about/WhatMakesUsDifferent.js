import { Box, Typography, useMediaQuery, useTheme, Stack } from "@mui/material";
import typographyStyles from "../../styles";

export default function WhatMakesUsDifferent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const values = [
    {
      icon: "✅",
      title: "Exceptional Quality",
      description: "We don't settle for less, and neither should you.",
    },
    {
      icon: "✅",
      title: "Client-Centric Approach",
      description: "Your goals are our priority.",
    },
    {
      icon: "✅",
      title: "Innovative Solutions",
      description: "We embrace fresh ideas and smart technology.",
    },
  ];

  return (
    <Box
      sx={{
        // backgroundColor: "#DEEAA0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: 10,
        mb: 10,
      }}
    >
      <Typography
        sx={{
          ...typographyStyles.subheading2,
          fontSize: isMobile ? "50px" : "70px",
        }}
      >
        What Makes Us Different
      </Typography>

      <Stack spacing={2} justifyContent={"center"} alignItems={"center"}>
        {values.map((value, index) => (
          <Stack direction={"row"} key={index}>
            <Typography
              sx={{
                ...typographyStyles.bodyLarge,
                textAlign: "center",

                fontSize: isMobile ? "12px" : "18px",
              }}
            >
              {`${value.icon} ${value.title}: ${value.description}`}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
