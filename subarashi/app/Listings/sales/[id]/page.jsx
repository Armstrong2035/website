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
  Stack,
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

import LoadingSpinner from "../../../components/loading/loading-spinner";
import AgentImage from "../../../../public/images/agent-img.png";
import typographyStyles from "../../../styles";
import ButtonModal from "../../../components/CTA/ButtonModal";
import ListingHero from "../../../components/listingPage/ListingHero";
import ListingAgent from "../../../components/listingPage/ListingAgent";
import Image from "next/image";
import { useListingsStore } from "../../../store/listingsStore";

const SideBarTypography = styled(Typography)(({ theme }) => ({
  ...typographyStyles.bodySmall,
}));

export default function ListingDetail() {
  const params = useParams();
  const { id } = params;
  const listings = useListingsStore((state) => state.salesListings);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  console.log(listings, "listings from store");

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
      const foundListing = listings.find((item) => item.id === id);
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
                  <Typography sx={{ ...typographyStyles.bodyMedium }}>
                    • {item}
                  </Typography>
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
                  <Typography sx={{ ...typographyStyles.bodyMedium }}>
                    • {item}
                  </Typography>
                </ListItem>
              ))}
            </List>
          );
          currentList = [];
        }

        // Section Header
        elements.push(
          <Typography
            key={`heading-${idx}`}
            sx={{
              ...typographyStyles.subheading,
              mb: 2,
              mt: 3,
              mb: 1,
              textAlign: "none",
            }}
          >
            {trimmedLine.replace(":", "")}
          </Typography>
        );
        inList = true;
      } else if (inList) {
        currentList.push(trimmedLine);
      } else {
        elements.push(
          <Typography
            key={`para-${idx}`}
            sx={{ ...typographyStyles.bodyMedium, mb: 2 }}
          >
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
              <Typography sx={{ ...typographyStyles.bodyMedium, mb: 2 }}>
                • {item}
              </Typography>
            </ListItem>
          ))}
        </List>
      );
    }

    return elements;
  };

  const buttonStyle = {
    ...typographyStyles.bodyMedium,
    fontSize: "16px",
    lineHeight: "25px",
    color: "#005244",
  };

  return (
    <>
      <NavBar
        color="#005244"
        hoverColor="#F2FFC2"
        hoverBackground={"#005244"}
        buttonColor={"#005244"}
      />

      <Box sx={{}}>
        <ListingHero listing={listing} isSales={true} />
      </Box>

      {/* Property Details Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4} alignItems={"flex-start"}>
          {/* Left Sidebar */}
          <Grid item xs={12} md={3} sx={{ textAlign: "left" }}>
            <Stack
              spacing={2}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
            >
              <Typography
                sx={{ ...typographyStyles.bodyMedium }}
              >{`Bed - ${listing?.bedrooms}`}</Typography>

              <Typography
                sx={{ ...typographyStyles.bodyMedium }}
              >{`Baths - ${listing?.bathrooms}`}</Typography>

              <Typography
                sx={{ ...typographyStyles.bodyMedium }}
              >{`SQ feet - ${listing?.area}ft`}</Typography>

              <ButtonModal
                buttonText={"Enquiry"}
                variantStyle={"text"}
                buttonStyle={buttonStyle}
                buttonColor={"#005244"}
              />

              <ListingAgent listing={listing} />
            </Stack>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={9} sx={{}}>
            {/* Property Description */}

            <Typography
              textAlign={"left"}
              sx={{
                ...typographyStyles.pageTitle,
                fontWeight: 300,
                color: "#005244",
                fontSize: "42px",
                // border: "1px solid blue",
                lineHeight: "25px",
              }}
            >
              Property Description
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Typography
                sx={{
                  ...typographyStyles.bodyMedium,
                  fontSize: "16px",
                  lineHeight: "150%",
                  p: 0,
                }}
              >
                {listing?.description && parseDescription(listing.description)}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
