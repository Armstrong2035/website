"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  styled,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import NavBar from "../../../components/appBar/AppBar";
import Footer from "../../../components/footer/new-footer";
import { useLeastListingStore } from "../../../store/leaseListingStore";
import LoadingSpinner from "../../../components/loading/loading-spinner";
import AgentImage from "../../../../public/images/agent-img.png";
import typographyStyles from "../../../styles";
import ButtonModal from "../../../components/CTA/ButtonModal";

const SideBarTypography = styled(Typography)(({ theme }) => ({
  ...typographyStyles.bodySmall,
}));

export default function ListingDetail() {
  const params = useParams();
  const { id } = params;
  const { listings } = useLeastListingStore();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (listings && listings.length > 0) {
      const foundListing = listings.find((item) => item.id === id);
      if (foundListing) {
        setListing(foundListing);
      }
    } else {
      fetchListing();
    }
    setLoading(false);
  }, [id, listings]);

  const fetchListing = async () => {
    try {
      const res = await fetch("/api/listings/lease-listings");
      const data = await res.json();
      const foundListing = data.listings.find((item) => item.id === id);
      if (foundListing) {
        setListing(foundListing);
      }
    } catch (error) {
      console.error("Failed to fetch listing:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNextImage = () => {
    if (!listing || !listing.media) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === listing.media.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    if (!listing || !listing.media) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? listing.media.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  /*   if (!listing) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        Listing not found
      </Box>
    )
  } */

    const parseDescription = (description) => {
      const lines = description.split("\n");
      const elements = [];
    
      let currentList = [];
      let inList = false;
    
      lines.forEach((line, idx) => {
        const trimmedLine = line.trim();
    
        if (!trimmedLine) {
          // When there's an empty line
          if (inList && currentList.length > 0) {
            elements.push(
              <List key={`list-${idx}`}>
                {currentList.map((item, i) => (
                  <ListItem key={i} sx={{ pl: 0 }}>
                    <Typography variant="body1">• {item}</Typography>
                  </ListItem>
                ))}
              </List>
            );
            currentList = [];
            inList = false;
          }
          return;
        }
    
        if (trimmedLine.endsWith(":")) {
          // Flush current list if any
          if (inList && currentList.length > 0) {
            elements.push(
              <List key={`list-${idx}`}>
                {currentList.map((item, i) => (
                  <ListItem key={i} sx={{ pl: 0 }}>
                    <Typography variant="body1">• {item}</Typography>
                  </ListItem>
                ))}
              </List>
            );
            currentList = [];
          }
    
          // Section Header
          elements.push(
            <Typography key={`heading-${idx}`} variant="h6" sx={{ mt: 3, mb: 1 }}>
              {trimmedLine.replace(":", "")}
            </Typography>
          );
          inList = true;
        } else if (inList) {
          currentList.push(trimmedLine);
        } else {
          elements.push(
            <Typography key={`para-${idx}`} variant="body1" sx={{ mb: 2 }}>
              {trimmedLine}
            </Typography>
          );
        }
      });
    
      // Final list flush
      if (inList && currentList.length > 0) {
        elements.push(
          <List key={`list-final`}>
            {currentList.map((item, i) => (
              <ListItem key={i} sx={{ pl: 0 }}>
                <Typography variant="body1">• {item}</Typography>
              </ListItem>
            ))}
          </List>
        );
      }
    
      return elements;
    };


  return (
    <>
      <NavBar
        color="#005244"
        hoverColor="#F2FFC2"
        hoverBackground={"#005244"}
        buttonColor={"#005244"}
      />

      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "50vh", md: "100vh" },
        }}
      >
        {listing?.media?.length > 0 && (
          <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
            <Box
              component="img"
              src={listing.media[currentImageIndex]}
              alt={listing.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
              }}
            />

            {/* Image Navigation Arrows */}
            <IconButton
              onClick={handlePrevImage}
              sx={{
                position: "absolute",
                left: 20,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(255,255,255,0.7)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>

            <IconButton
              onClick={handleNextImage}
              sx={{
                position: "absolute",
                right: 20,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(255,255,255,0.7)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
              }}
            >
              <ChevronRightIcon />
            </IconButton>

            {/* Property Info Overlay */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                color: "white",
                p: "10px",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    ...typographyStyles.bannerText,
                    fontSize: "55px",
                    fontWeight: 300,
                    width: "100%",
                  }}
                >
                  {listing.location.building}, {listing.location.locality},{" "}
                  {listing.location.city}
                </Typography>
              </Box>

              {/*               <Typography sx={{ ...typographyStyles.bannerText, fontSize: "55px", fontWeight: 300, }} >
                Price: AED {(listing.area * 1000).toLocaleString()}
              </Typography> */}
            </Box>
          </Box>
        )}
      </Box>

      {/* Thumbnail Gallery */}
      {/*     <Box
          sx={{

            bottom: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            p: 1,
    
          }}
        >
          {listing?.media &&
            listing.media.map((image, index) => (
              <Box
                key={index}
                onClick={() => handleThumbnailClick(index)}
                sx={{
                  width: 200,
                  height: 150,
                  mx: 0.5,
                  border: index === currentImageIndex ? "3px solid #005244" : "none",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            ))}
        </Box> */}

      {/* Property Details Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Left Sidebar */}
          <Grid item xs={12} md={3}>
            <Paper elevation={0} sx={{ p: 2 }}>
              <List disablePadding sx={{ ...typographyStyles.bodySmall }}>
                <ListItem disableGutters>
                  <SideBarTypography>
                    {`Bed - ${listing?.bedrooms}`}
                  </SideBarTypography>
                </ListItem>

                <ListItem disableGutters>
                  <SideBarTypography>
                    {`Baths - ${listing?.bathrooms}`}
                  </SideBarTypography>
                </ListItem>

                <ListItem disableGutters>
                  <SideBarTypography>
                    {`SQ feet - ${listing?.area}ft`}
                  </SideBarTypography>
                </ListItem>
              </List>

              <Divider sx={{ my: 3 }} />

              <List disablePadding>
                <ButtonModal buttonText={"Enquiry"} variantStyle={"outlined"} />
              </List>

              {/* Agent Information */}
             <Box sx={{ textAlign: "left", mb: 2, mt: 12 }}>
                <Box
                  component="img"
                  src={listing?.agent?.image}
                  alt={listing?.agent?.name}
                  sx={{
                    width: 216,
                    height: 260,
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Degular, Arial, sans-serif",
                    fontWeight: 400,
                    color: "#005244",
                    fontSize: "24px",
                  }}
                >
                  {listing?.agent?.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 2,
                    textTransform: "uppercase",
                    fontFamily: "Degular, Arial, sans-serif",
                    fontWeight: 300,
                    color: "#005244",
                    fontSize: "16px",
                  }}
                >
                  Investment Consultant
                </Typography>

                <Divider sx={{ mb: 2 }} />
                <Button
                  variant="text"
                  component="a"
                  href={`mailto:${listing?.agent?.email}?subject=Inquiry about your listing&body=Hi ${listing?.agent?.name}`}
                  sx={{
                    width: "100%",
                    height: "50px",
                    fontFamily: "Degular, Arial, sans-serif",
                    fontWeight: 300,
                    color: "#005244",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="body2"
                    component={"h6"}
                    sx={{ textTransform: "uppercase" }}
                  >
                    Contact
                  </Typography>

                  <ArrowForwardIcon />
                </Button>
              </Box> 
            </Paper>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={9}>
            {/* Property Description */}
            <Accordion
              defaultExpanded
              sx={{
                mb: 3,
                boxShadow: "none",
                borderBottom: "1px solid #8E8E93",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                aria-controls="property-description-content"
                id="property-description-header"
              >
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                    fontFamily: "Degular, Arial, sans-serif",
                    fontWeight: 300,
                    color: "#005244",
                    fontSize: "42px",
                  }}
                >
                  Property Description
                </Typography>

                <AddIcon />
              </Box>
              <Box sx={{ mt: 2 }} >
                <Typography sx={{
                  fontFamily: "Degular, Arial, sans-serif",
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: "150%",
                  p: 0,
                }}>{listing?.description && parseDescription(listing.description)}</Typography>
              </Box>
            </Accordion>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
