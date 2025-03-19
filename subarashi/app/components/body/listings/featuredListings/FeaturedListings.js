"use client";
import { mockListings } from "../../../../../public/mockListings";
import {
  Container,
  Card,
  Grid2,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ListingCard from "./listingCard/ListingCard";
import Title from "./Title";

export default function FeaturedListings() {
  //   console.log(mockListings);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        mt: 5,
        pr: 1,
        pl: 1,
      }}
    >
      <Grid2
        container
        spacing={4}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ mr: 5, ml: 5 }}
      >
        {mockListings.map((listing, index) => (
          <Grid2 item key={index} size={{ lg: 6, sm: 12 }}>
            <ListingCard listing={listing} />
          </Grid2>
        ))}
      </Grid2>

      <Title />
    </Box>
  );
}
