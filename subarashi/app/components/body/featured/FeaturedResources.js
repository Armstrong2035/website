// app/components/body/featured/FeaturedResources.js
import { Box, Container, Divider } from "@mui/material";
import CalculatorCard from "./calculator/CalculatorCard";
import FeaturedAreaGuides from "./areaGuides/FeaturedAreaGuides";

export default function FeaturedResources({ guides }) {
  return (
    <Box
      sx={{
        pt: {
          xs: 7,
          md: 7,
        },
        pb: 7,
      }}
    >
      <CalculatorCard />
      <Divider sx={{ mt: 10, mb: 10 }} />
      <FeaturedAreaGuides guides={guides} />
    </Box>
  );
}
