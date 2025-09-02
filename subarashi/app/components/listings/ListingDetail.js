"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";

import NavBar from "../appBar/AppBar";
import Footer from "../footer/new-footer";

import LoadingSpinner from "../loading/loading-spinner";

import typographyStyles from "../../styles";
import ButtonModal from "../CTA/ButtonModal";
import ListingHero from "../listingPage/ListingHeaderModal";
import ListingAgent from "../listingPage/ListingAgent";

import { useListingsStore } from "../../store/listingsStore";

export default function ListingDetail({ type }) {
  const params = useParams();
  const { id } = params;
  const salesListings = useListingsStore((state) => state.salesListings);
  const leaseListings = useListingsStore((state) => state.leaseListings);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  const listings = type === "lease" ? leaseListings : salesListings;

  const parseDescription = (description) => {
    if (!description) return ""; // Return empty string for null or undefined input

    // Replace <br> tags with a newline character (\n)
    const cleanedText = description.replace(/<br\s*\/?>/gi, "\n");

    // Create a new div element to parse HTML
    const doc = new DOMParser().parseFromString(cleanedText, "text/html");
    const strippedText = doc.body.textContent || "";

    return strippedText;
  };

  useEffect(() => {
    const fetchListing = () => {
      const foundListing = listings.find((item) => item.id === id);
      if (foundListing) {
        setListing(foundListing);
      }
      setLoading(false);
    };

    if (listings.length > 0) {
      fetchListing();
    } else {
      // In a real app, you might re-fetch the listings from an API here
      setLoading(false);
    }
  }, [id, listings]);

  if (loading || !listing) {
    return <LoadingSpinner />;
  }

  const buttonStyle = {
    ...typographyStyles.bodyMedium,
    fontSize: "16px",
    lineHeight: "25px",
    color: "#005244",
  };

  const formattedDescription = parseDescription(
    listing.description.generic[0].text
  );

  return (
    <>
      <NavBar
        color="#005244"
        hoverColor="#F2FFC2"
        hoverBackground={"#005244"}
        buttonColor={"#005244"}
      />

      <Box>
        <ListingHero listing={listing} isSales={true} />
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4} alignItems={"flex-start"}>
          <Grid item xs={12} md={3} sx={{ textAlign: "left" }}>
            <Stack
              spacing={2}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
            >
              <Typography sx={{ ...typographyStyles.bodyMedium }}>
                {`Bed - ${listing?.specific.bedrooms}`}
              </Typography>
              <Typography sx={{ ...typographyStyles.bodyMedium }}>
                {`Baths - ${listing?.specific.bathrooms}`}
              </Typography>
              <Typography sx={{ ...typographyStyles.bodyMedium }}>
                {`SQ feet - ${listing?.specific.areas.habitable}ft`}
              </Typography>
              <ButtonModal
                buttonText={"Enquiry"}
                variantStyle={"text"}
                buttonStyle={buttonStyle}
                buttonColor={"#005244"}
              />
              <ListingAgent listing={listing} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              textAlign={"left"}
              sx={{
                ...typographyStyles.pageTitle,
                fontWeight: 300,
                color: "#005244",
                fontSize: "42px",
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
                  whiteSpace: "pre-wrap", // THIS IS KEY FOR NEWLINES
                }}
              >
                {formattedDescription}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
