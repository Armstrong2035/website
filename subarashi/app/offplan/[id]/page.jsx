import { Container, Typography, Grid, Box, Divider } from "@mui/material"
import ProjectCard from "../../components/offplan/ProjectCard"
import WhyInvestSection from "../../components/offplan/WhyInvestSection" 
import NavBar from "../../components/appBar/AppBar"
import Footer from "../../components/footer/new-footer"
import typographyStyles from "../../styles"

export default function OffPlanProjectsPage() {
  return (
    <>
          <NavBar
        color="#005244"
        hoverColor="#F2FFC2"
        hoverBackground={"#005244"}
        buttonColor={"#005244"}
      />
    <Container maxWidth="lg" sx={{ pt: 24, pb: 10 }}>


      <Typography
        variant="h1"
        component="h1"
        data-aos="fade-up"
        sx={{
          
          
          mb: 4,
          textAlign: "left",
          ...typographyStyles.bannerText,
          fontSize: { xs: "73px", md: "73px" },
          fontWeight: 300,
        }}
      >
        Off Plan Projects in Dubai
      </Typography>

      <Box data-aos="fade-up" sx={{ mb: 6, maxWidth: "70%",}}>
   
        <Typography variant="body1" sx={{ mb: 2, ...typographyStyles.bodyMedium }}>
        Discover Dubai&apos;s Most Promising Off-Plan Investment Opportunities
          At Subarashi, we bring you exclusive access to Dubai&apos;s finest off-plan properties — from stunning
          waterfront residences to luxurious urban communities. Whether you&apos;re a seasoned investor or a first-time
          buyer, our curated selection of projects gives you a head start on securing tomorrow&apos;s most desirable
          addresses at today&apos;s prices.
        </Typography>
      </Box>

      <Box component="div" spacing={3} sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        <Box item xs={12} md={6}>
          <ProjectCard imageUrl="/images/offplan-img.png" title="Al Barai" />
        </Box>
        <Box item xs={12} md={6}>
          <ProjectCard imageUrl="/images/offplan-img.png" title="Al Barai" />
        </Box>
      </Box>

      <Divider sx={{ my: 6, borderBottomWidth: 2, borderColor: "#005244" }} />

      <WhyInvestSection />

    </Container>

    <Footer />

    </>
  )
}
