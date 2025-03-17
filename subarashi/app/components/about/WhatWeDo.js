import { Box, Typography, useMediaQuery, useTheme, Stack } from "@mui/material";
import typographyStyles from "../../styles";

export default function WhatWeDo() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const services = [
    {
      icon: "🏡",
      title: "Property Sales",
      description: "Helping you find your dream home or investment.",
    },
    {
      icon: "🏢",
      title: "Property Management",
      description: "Taking care of your assets with top-tier service.",
    },
    {
      icon: "🔑",
      title: "Leasing & Rentals",
      description: "Connecting landlords with quality tenants effortlessly.",
    },
    {
      icon: "📈",
      title: "Real Estate Investments",
      description: "Expert strategies to maximize your returns.",
    },
    {
      icon: "🌴",
      title: "Holiday Homes",
      description:
        "Exclusive short-term rental options for tourists and business travelers.",
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
        What We Do
      </Typography>

      <Stack spacing={2} justifyContent={"center"} alignItems={"center"}>
        {services.map((service, index) => (
          <Stack direction={"row"} key={index}>
            <Typography
              sx={{
                ...typographyStyles.bodyLarge,
                textAlign: "center",

                fontSize: isMobile ? "12px" : "18px",
              }}
            >
              {`${service.icon} ${service.title}: ${service.description}`}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
