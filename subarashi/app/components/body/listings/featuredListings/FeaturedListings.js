import { mockListings } from "../../../../../public/mockListings";
import { Container, Card, Grid2, Box } from "@mui/material";
import ListingCard from "./listingCard/ListingCard";
import Title from "./Title";

export default function FeaturedListings() {
  //   console.log(mockListings);
  return (
    <Box
      sx={{
        mr: { xs: 2, sm: 5, md: 8, lg: 10 },
        ml: { xs: 2, sm: 5, md: 8, lg: 10 },
        mt: { xs: 5, sm: 7, md: 10 },
      }}
    >
      <Grid2 container spacing={4}>
        {mockListings.map((listing) => (
          <Grid2 item size={{ lg: 6 }}>
            <ListingCard listing={listing} />
          </Grid2>
        ))}
      </Grid2>

      <Title />
    </Box>
  );
}
