"use client";

import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import typographyStyles from "../styles";
import NavBar from "../components/appBar/AppBar";
import { useIsMobile } from "../providers/MobileProvider";

export default function ResourcesPage() {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useIsMobile();

  const cards = [
    {
      image:
        "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_auto,dpr_auto,c_scale/v1742980894/FLexible_payments_bteyox.png",
      alt: "Flexible Payments Visual",
      title: "Subaflex",
      description:
        "Easily calculate your payment options as a landlord or tenant to find a plan that works best for you.",
      button: "Calculate your rent with subaflex",
      buttonLink: "/subarashi-flex",
    },
    {
      image:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1751362463/Area_Guide_ncsyzs.jpg",
      alt: "City skyline with modern buildings and camels",
      title: "Area Guides",
      description:
        "Learn more about the different parts of Dubai our brokers cover.",
      button: "Explore the Area Guide",
      buttonLink: "/areaGuides",
    },
    {
      image:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1751361346/Renty_Buy_Calc_jtl91v.png",
      alt: "Buy vs Rent Calculator image",
      title: "Buy vs Rent Calculator",
      description:
        "Calculate the cost of buying vs renting to find out which option is better for you.",
      button: "Calculate Buy vs Rent",
      buttonLink: "/buy-vs-rent-calculator",
    },
  ];

  return (
    <Box>
      <NavBar
        color="#005244"
        hoverColor="#F2FFC2"
        hoverBackground={"#005244"}
        buttonColor={"#005244"}
      />
      <Container
        maxWidth="lg"
        sx={{
          pl: { xs: 2, md: 10 },
          pr: { xs: 2, md: 10 },
          mt: { xs: 8, md: 15 },
          mb: { xs: 4, md: 10 },
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            mb: 4,
            fontWeight: 500,
            color: "#333",
            fontSize: { xs: "1.6rem", md: "1.5rem" },
            textAlign: { xs: "center", md: "left" },
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
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    minHeight: { xs: 0, md: 280 },
                  }}
                >
                  {/* Left side - Image */}
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <CardMedia
                      component="img"
                      height={isMobile ? 180 : 280}
                      image={card.image}
                      alt={card.alt}
                      sx={{
                        objectFit: "cover",
                        width: "100%",
                        height: { xs: 180, md: "100%" },
                        maxHeight: { xs: 180, md: 400 },
                      }}
                    />
                  </Box>
                  {/* Right side - Text content */}
                  <Box
                    sx={{
                      flex: 1,
                      p: { xs: 2, md: 4 },
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
                          fontSize: { xs: "1.1rem", md: "2rem" },
                          textAlign: { xs: "center", md: "left" },
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
                          fontSize: { xs: "0.98rem", md: "1.1rem" },
                          textAlign: { xs: "center", md: "left" },
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
                          fontSize: { xs: "1rem", md: "1.1rem" },
                          p: 0,
                          alignSelf: { xs: "center", md: "flex-start" },
                          mt: { xs: 1, md: 0 },
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
  );
}
