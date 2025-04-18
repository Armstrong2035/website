// app/areaGuides/page.js
import { getAllAreaGuides } from "../lib/notion";
import { Box, Typography, Container, Grid } from "@mui/material";
import NavBar from "../components/appBar/AppBar";
import Footer from "../components/footer/new-footer";
import AreaGuideHeader from "../components/areaGuides/AreaGuideHeaders";
import AreaGuideGrid from "../components/areaGuides/AreaGuideGrid";

// Generate static page with revalidation
export const revalidate = 3600; // Revalidate every hour

export default async function AreaGuides() {
  const guides = await getAllAreaGuides();

  console.log(guides);

  return (
    <Box>
      <NavBar
        color="#005244"
        hoverColor="#F2FFC2"
        hoverBackground={"#005244"}
        buttonColor={"#005244"}
      />

      <Container sx={{ pl: 10, pr: 10, mt: 10, mb: 10 }}>
        <AreaGuideHeader />
        <AreaGuideGrid guides={guides} />
      </Container>

      <Footer />
    </Box>
  );
}
