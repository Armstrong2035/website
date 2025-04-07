// app/components/body/featured/FeaturedResources.js
import { Box, Divider } from "@mui/material";
import CalculatorCard from "./calculator/CalculatorCard";
import FeaturedAreaGuides from "./areaGuides/FeaturedAreaGuides";

export default function FeaturedResources({ guides }) {
  return (
    <Box sx={{ pt: 7, pb: 7 }}>
      <CalculatorCard />
      <Divider sx={{ mt: 10, mb: 10 }} />
      <FeaturedAreaGuides guides={guides} />
    </Box>
  );
}
