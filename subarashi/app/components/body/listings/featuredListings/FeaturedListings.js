"use client";
import { mockListings } from "../../../../../public/mockListings";
import { Container, Card, Grid, Box } from "@mui/material";
import ListingCard from "./listingCard/ListingCard";
import Title from "./Title";
import { useIsMobile } from "../../../../providers/MobileProvider";

export default function FeaturedListings() {
  //   console.log(mockListings);
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useIsMobile();
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
      <Grid
        container
        spacing={4}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ mr: 5, ml: 5 }}
      >
        {mockListings.map((listing, index) => (
          <Grid item key={index} lg={6} sm={12}>
            <ListingCard listing={listing} />
          </Grid>
        ))}
      </Grid>

      <Title />
    </Box>
  );
}
