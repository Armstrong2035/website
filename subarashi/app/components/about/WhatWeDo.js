import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Stack,
  Divider,
} from "@mui/material";
import typographyStyles from "../../styles";

export default function WhatWeDo() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const services = [
    { title: "PROPERTY SALES" },
    { icon: "🔑", title: "LEASING & RENTALS" },
    { title: "HOLIDAY HOMES" },
    { title: "PROPERTY MANAGEMENT" },
    { title: "INVESTMENT ADVISORY" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#005244",
        pl: isMobile ? 2 : 20,
        pt: 10,
        pb: 10,
        pr: 20,

        width: "100%",
      }}
    >
      <Typography
        sx={{
          ...typographyStyles.subheading2,
          fontSize: isMobile ? "50px" : "70px",
          color: "#F2FFC2",
          fontWeight: 500,
          mb: 5,
        }}
      >
        What We Do
      </Typography>

      <Stack
        spacing={1}
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ width: "80%" }}
      >
        {services.map((service, index) => (
          <Box key={index} sx={{ width: "100%" }}>
            <Typography
              sx={{
                ...typographyStyles.subheading2,
                textAlign: "left",
                fontSize: isMobile ? "30px" : "70px",

                color: "#F2FFC2",
                fontWeight: 10,
              }}
            >
              {service.title}
            </Typography>

            {/* Full Width Divider */}
            <Divider
              sx={{
                backgroundColor: "#F2FFC2", // Set divider color
                width: "100%", // Full width of the viewport
                marginBottom: 3, // Spacing below the divider
              }}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
