"use client";

import { Container, Typography, Grid, Box, Divider } from "@mui/material";
import ProjectCard from "../components/offplan/ProjectCard";
import WhyInvestSection from "../components/offplan/WhyInvestSection";
import NavBar from "../components/appBar/AppBar";
import Footer from "../components/footer/new-footer";
import typographyStyles from "../styles";
import { useState } from "react";
import Link from "next/link";

export default function OffPlanProjectsPage() {

   const [hoveredCardId, setHoveredCardId] = useState(null);

const offplanProjects = [
  {
    title: "Damac Riverside",
    imageUrl: "https://res.cloudinary.com/dulafqaoq/image/upload/v1745581249/MARRIOTT_JVC_-_PRESENTATION-Medium_NEW_2-86_vhbgnv.jpg",
    link: "https://damacriverside.subarashirealestate.com/"
  },
  {
    title: "Sobha One",
    imageUrl: "https://res.cloudinary.com/dulafqaoq/image/upload/v1739812347/Image_5_w01wms.png",
    link: "https://sobhaoneelement.subarashirealestate.com/"
  },
  {
    title: "JW Marriott Five",
    imageUrl: "https://res.cloudinary.com/dulafqaoq/image/upload/v1745581232/MARRIOTT-JVC---PRESENTATION-Medium-_NEW_-2-203_rhxp3w.jpg",
    link: "https://jw-marriot-five.vercel.app/"
  },
  {
    title: "Terra Heights",
    imageUrl: "https://res.cloudinary.com/dulafqaoq/image/upload/v1744009068/TERRA_HEIGHTS_XL_BROCHURE-28_y4s08g.jpg",
    link: "https://terra-heights.vercel.app/"
  },
  {
    title: "Palm Jebel Ali",
    imageUrl: "https://res.cloudinary.com/dulafqaoq/image/upload/v1741763288/Palm_Jebel_Ali_Villas-6_xsuw71.png",
    link: "https://palmjebelali.subarashirealestate.com/"
  },
  {
    title: "Vela Dorchester",
    imageUrl: "https://res.cloudinary.com/dulafqaoq/image/upload/v1741937901/Vela_Dorchester_Collection.pdf-9_yql1ft.png",
    link: "https://veladorchester.subarashirealestate.com/"
  },
]

  const handleMouseEnter = (id) => {
    setHoveredCardId(id);
  };

  const handleMouseLeave = () => {
    setHoveredCardId(null);
  };


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

        <Box data-aos="fade-up" sx={{ mb: 6, maxWidth: "70%" }}>
          <Typography
            variant="body1"
            sx={{ mb: 2, ...typographyStyles.bodyMedium }}
          >
            Discover Dubai&apos;s Most Promising Off-Plan Investment
            Opportunities At Subarashi, we bring you exclusive access to
            Dubai&apos;s finest off-plan properties — from stunning waterfront
            residences to luxurious urban communities. Whether you&apos;re a
            seasoned investor or a first-time buyer, our curated selection of
            projects gives you a head start on securing tomorrow&apos;s most
            desirable addresses at today&apos;s prices.
          </Typography>
        </Box>

        <Box
          component="div"
          spacing={3}
          sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}
        >
       { offplanProjects.map((project, index) => (
        <Link href={project.link} style={{ textDecoration: "none" }} key={index}>

          
          <Box item xs={12} md={6} key={index}      sx={{
                    transition: "filter 0.3s ease, transform 0.3s ease",
                    filter:
                      hoveredCardId && hoveredCardId !== index
                        ? "blur(3px)"
                        : "none",
                    transform:
                      hoveredCardId === index ? "scale(1.02)" : "scale(1)",
                    zIndex: hoveredCardId === index ? 3 : 2,
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}>
            <ProjectCard imageUrl={project.imageUrl} title={project.title} link={project.link} />
          </Box>
        </Link>
        ))}


        </Box>

        <Divider sx={{ my: 6, borderBottomWidth: 2, borderColor: "#005244" }} />

        <WhyInvestSection />
      </Container>

      <Footer />
    </>
  );
}
