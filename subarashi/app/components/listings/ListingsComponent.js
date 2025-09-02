"use client";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Container,
  Grid,
} from "@mui/material";

import NavBar from "../appBar/AppBar";
import typographyStyles from "../../styles";
import { useEffect, useState } from "react";
import LoadingSpinner from "../loading/loading-spinner";
import Footer from "../footer/new-footer";
import LeaseListingsFilters from "./lease-listings-filters";
import Link from "next/link";
import { useListingsStore } from "../../store/listingsStore";
import { useRouter } from "next/navigation";

export default function PropertyListings({ type }) {
  const [allListings, setAllListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const router = useRouter();
  //const setSalesListings = useListingsStore((state) => state.setSalesListings);
  const salesListings = useListingsStore((state) => state.salesListings);
  const leaseListings = useListingsStore((state) => state.leaseListings);

  let listings = type === "rent" ? leaseListings : salesListings;
  const dealType = type === "rent" ? "lease" : "sales";

  //  console.log(listings);

  useEffect(() => {
    if (listings && listings.length > 0) {
      setAllListings(listings);
      setFilteredListings(listings);
    }
  }, [listings]);

  //  console.log(salesListings);

  // useEffect(() => {
  //   const fetchListings = async () => {
  //     try {
  //       const res = await fetch("/api/listings/sales-listings");
  //       const data = await res.json();
  //       setAllListings(data.listings);
  //       setFilteredListings(data.listings);
  //       setSalesListings(data.listings);
  //     } catch (error) {
  //       console.error("Failed to fetch listings:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchListings();
  // }, []);

  const handleMouseEnter = (id) => {
    setHoveredCardId(id);
  };

  const handleMouseLeave = () => {
    setHoveredCardId(null);
  };

  // ...existing code...
  const applyFilters = (filterParams) => {
    let filtered = [...allListings];

    // Filter by bedrooms
    if (filterParams.bedrooms && filterParams.bedrooms !== "Any") {
      if (filterParams.bedrooms > 5) {
        filtered = filtered.filter(
          (listing) => (listing.specific?.bedrooms ?? 0) >= 5
        );
      } else {
        filtered = filtered.filter(
          (listing) =>
            (listing.specific?.bedrooms ?? 0) === filterParams.bedrooms
        );
      }
    }

    // Filter by price range
    if (
      filterParams.priceRange &&
      (filterParams.priceRange.min > 0 || filterParams.priceRange.max !== null)
    ) {
      filtered = filtered.filter((listing) => {
        const price = listing.pricing?.price?.amount || 0;
        if (filterParams.priceRange.max === null) {
          return price >= filterParams.priceRange.min;
        }
        return (
          price >= filterParams.priceRange.min &&
          price <= filterParams.priceRange.max
        );
      });
    }

    // Filter by location
    if (filterParams.location) {
      filtered = filtered.filter((listing) => {
        const listingLocation = `${listing.location?.city || ""}, ${
          listing.location?.building || ""
        }`;
        return listingLocation
          .toLowerCase()
          .includes(filterParams.location.split(",")[0].toLowerCase());
      });
    }

    setFilteredListings(filtered);
  };
  // ...existing code...

  return (
    <>
      <NavBar
        color="#005244"
        hoverColor="#F2FFC2"
        hoverBackground={"#005244"}
        buttonColor={"#005244"}
      />
      <LeaseListingsFilters onFilterChange={applyFilters} />

      <Container maxWidth="lg" sx={{ py: 4, mt: 6 }}>
        {loading ? (
          <LoadingSpinner />
        ) : filteredListings?.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography variant="h5" sx={{ color: "#005244", mb: 2 }}>
              No properties found
            </Typography>
            <Typography variant="body1">
              Try adjusting your filters to see more results.
            </Typography>
          </Box>
        ) : (
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: "center",
            }}
          >
            {filteredListings.map((listing, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{
                  transition: "filter 0.2s ease, transform 0.1s ease",
                  filter:
                    hoveredCardId && hoveredCardId !== index
                      ? "blur(3px)"
                      : "none",
                  transform:
                    hoveredCardId === index ? "scale(1.02)" : "scale(1)",
                  zIndex: hoveredCardId === index ? 2 : 1,
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={`/Listings/${dealType}/${listing.id}`}
                  style={{ textDecoration: "none" }}
                  key={listing.id}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: "none",
                      border: "1px solid transparent",
                    }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <CardMedia
                        component="img"
                        image={
                          listing.media?.pictures?.[0]?.file?.url ||
                          "/placeholder.jpg"
                        }
                        alt={listing.location.bayut.buildingName}
                        sx={{
                          objectFit: "cover",
                          borderRadius: 0,
                          width: "100%", // force fit parent width
                          height: 225, // lock height
                        }}
                      />
                    </Box>
                    <CardContent sx={{ p: 1, pt: 2 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          ...typographyStyles.bodyLarge,
                          color: "#333",
                          fontWeight: 500,
                          whiteSpace: "normal", // allow wrapping
                          wordBreak: "break-word", // break long chunks if needed
                        }}
                        component="div"
                        gutterBottom
                      >
                        {`${listing.location.bayut.buildingName || ""}, 
      ${listing.location.bayut.community || ""}, 
      ${listing.location.bayut.subCommunity || ""}`}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mt: 1,
                          "& > div": {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mr: 2,
                            pr: 2,
                            borderRight: "2px solid #005244",
                            minHeight: "40px",
                          },
                        }}
                      >
                        <Box>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontWeight: 400 }}
                          >
                            {listing.specific?.areas.weighted}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            sqft
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontWeight: 400 }}
                          >
                            {listing.specific?.bedrooms ?? "-"}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            beds
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontWeight: 400 }}
                          >
                            {listing.specific?.bathrooms ?? "-"}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            baths
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      <Footer />
    </>
  );
}
