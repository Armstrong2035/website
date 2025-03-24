"use client";

import { Description, InstallMobile } from "@mui/icons-material";
import {
  Button,
  Typography,
  Box,
  Stack,
  Grid2,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import typographyStyles from "../../../../styles";
import Link from "next/link";

export default function Title() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const titleItems = {
    title: "Featured Listings",
    description:
      "Discover stunning home designed for comfort and luxury. With modern finishes, spacious interiors, and  prime locations. Don’t miss your chance to own your dream home—schedule a viewing today!",
    cta: "View all listings",
  };

  return (
    <Grid2
      container
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ pr: 10, pl: 10, mt: 7, mb: 7 }}
      spacing={7}
    >
      <Grid2 item size={{ lg: 6 }}>
        <Typography
          sx={{
            ...typographyStyles.displayLarge,
            mb: 2,
            color: "#005244",
            lineHeight: isMobile ? "70px" : "140px",
            mb: isMobile ? 5 : 1,
          }}
        >
          {titleItems.title}
        </Typography>
        <Typography sx={{ ...typographyStyles.featureText, color: "#005244" }}>
          {titleItems.description}
        </Typography>
      </Grid2>

      <Grid2
        item
        size={{ lg: 6 }}
        justifySelf={"flex-end"}
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <Link href={"/Listings"}>
          <Button
            variant={"text"}
            endIcon={<ArrowForwardIcon />}
            sx={{
              ...typographyStyles.pageTitle,
              color: "#005244",
              lineHeight: isMobile ? "40px" : "140px",
              alignText: "left",
            }}
          >
            View all listings
          </Button>
        </Link>
      </Grid2>
    </Grid2>
  );
}
