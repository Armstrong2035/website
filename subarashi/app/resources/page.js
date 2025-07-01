"use client"

import { Container, Typography, Grid, Card, CardMedia, Button, Box, useTheme, useMediaQuery } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import Link from "next/link"
import typographyStyles from "../styles"
import NavBar from "../components/appBar/AppBar"

export default function ResourcesPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const cards = [
    {
      image: "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_auto,dpr_auto,c_scale/v1742980894/FLexible_payments_bteyox.png",
      alt: "Flexible Payments Visual",
      title: "Subaflex",
      description:
        "Easily calculate your payment options as a landlord or tenant to find a plan that works best for you.",
      button: "Check out the Calculator",
      buttonLink: "/subarashi-flex",
    },
    {
      image: "https://res.cloudinary.com/dulafqaoq/image/upload/v1751362463/Area_Guide_ncsyzs.jpg",
      alt: "City skyline with modern buildings and camels",
      title: "Area Guide",
      description:
        "Easily calculate your payment options as a landlord or tenant to find a plan that works best for you.",
      button: "Check out the Area Guides",
      buttonLink: "/areaGuides",
    },
    {
      image: "https://res.cloudinary.com/dulafqaoq/image/upload/v1751361346/Renty_Buy_Calc_jtl91v.png",
      alt: "Buy vs Rent Calculator image",
      title: "Buy vs Rent Calculator",
      description:
        "Calculate the cost of buying vs renting to find out which option is better for you.",
      button: "Check out the Calculator",
      buttonLink: "/buy-vs-rent-calculator",
    },
  ]

  return (
    <Box>

    <NavBar
        color="#005244"
        hoverColor="#F2FFC2"
        hoverBackground={"#005244"}
        buttonColor={"#005244"}
      />
    <Container maxWidth="lg" sx={{ pl: 10, pr: 10, mt: 15, mb: 10 }}>

      <Typography
        variant="h3"
        component="h2"
        sx={{
          mb: 4,
          fontWeight: 500,
          color: "#333",
          fontSize: { xs: "2rem", md: "2.5rem" },
        }}
      >
        Resources
      </Typography>

      <Grid container spacing={4} direction="column">
        {cards.map((card, idx) => (
          <Grid item xs={12} key={idx}>
            <Card
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Box sx={{ display: "flex", minHeight: 280 }}>
                {/* Left side - Image */}
                <Box sx={{ flex: 1 }}>
                  <CardMedia
                    component="img"
                    height="280"
                    image={card.image}
                    alt={card.alt}
                    sx={{
                      objectFit: "cover",
                      height: "100%",
                    }}
                  />
                </Box>
                {/* Right side - Text content */}
                <Box
                  sx={{
                    flex: 1,
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignSelf: "end",
                    height: "100%",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h4"
                      component="h4"
                      sx={{
                        ...typographyStyles.cardHeader,
                        mb: 2,
                        color: "#333",
                        fontSize: { xs: "1.5rem", md: "2rem" },
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        ...typographyStyles.bodyLarge,
                        mb: 3,
                        color: "#666",
                        lineHeight: 1.6,
                        fontSize: "1.1rem",
                      }}
                    >
                      {card.description}
                    </Typography>
                  </Box>
                  <Link href={card.buttonLink} passHref legacyBehavior>
                    <Button
                      variant="text"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        ...typographyStyles.button,
                        color: "#333",
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: "1.1rem",
                        p: 0,
                        alignSelf: "flex-start",
                        "&:hover": {
                          backgroundColor: "transparent",
                          "& .MuiSvgIcon-root": {
                            transform: "translateX(4px)",
                          },
                        },
                        "& .MuiSvgIcon-root": {
                          transition: "transform 0.2s ease",
                        },
                      }}
                    >
                      {card.button}
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  )
}
