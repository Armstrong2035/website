// app/areaGuides/page.js
import { getAllAreaGuides } from "../lib/notion";
import { Box, Typography, Container, Grid } from "@mui/material";
import NavBar from "../components/appBar/AppBar";
import Footer from "../components/footer/Footer";
import AreaGuideHeader from "../components/areaGuides/AreaGuideHeaders";
import AreaGuideGrid from "../components/areaGuides/AreaGuideGrid";

// Generate static page with revalidation
export const revalidate = 3600; // Revalidate every hour

export default async function AreaGuides() {
  const guides = await getAllAreaGuides();

  return (
    <Box>
      <NavBar
        color="#005244"
        hoverColor="#005244"
        hoverBackground={"#FFFFFF"}
      />

      <Container maxWidth="lg" sx={{ py: 8, mt: 10 }}>
        <AreaGuideHeader />
        <AreaGuideGrid guides={guides} />
      </Container>

      <Footer />
    </Box>
  );
}
