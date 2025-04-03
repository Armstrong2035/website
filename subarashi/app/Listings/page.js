"use client";

import { Container, Box } from "@mui/material";
import { mockListings } from "../../public/mockListings";
import ListingsGrid from "../components/listings/ListingsGrid";
import Footer from "../components/footer/Footer";
import HeroImage from "../components/body/HeroPage/HeroImage";
import NavBar from "../components/appBar/AppBar";
import SearchFilters from "../components/listings/SearchFilters";
import { useListingsFilter } from "../hooks/useListingFilter";
import { filterStyles } from "../styles/filterStyles";
import FooterTitle from "../components/footer/FooterTitle";

export default function page() {
  const heroImage =
    "https://res.cloudinary.com/dulafqaoq/image/upload/f_auto,q_auto,w_auto,fl_progressive/v1739812368/Image_17_uijjge.png";

  // Use the custom hook for filter logic
  const filterProps = useListingsFilter(mockListings);

  return (
    <>
      <PageHeader heroImage={heroImage} />

      <SearchFiltersContainer>
        <SearchFilters
          propertyType={filterProps.propertyType}
          setPropertyType={filterProps.setPropertyType}
          location={filterProps.location}
          setLocation={filterProps.setLocation}
          bedrooms={filterProps.bedrooms}
          setBedrooms={filterProps.setBedrooms}
          applyFilters={filterProps.applyFilters}
        />
      </SearchFiltersContainer>

      <ListingsContainer>
        <ListingsGrid
          listings={filterProps.filteredListings}
          isLoading={filterProps.isLoading}
        />
      </ListingsContainer>

      <FooterTitle />
    </>
  );
}

// Page Header Component
const PageHeader = ({ heroImage }) => (
  <Box sx={filterStyles.heroContainer}>
    <NavBar />
    <Box sx={filterStyles.heroInnerContainer}>
      <HeroImage heroImage={heroImage} />
    </Box>
  </Box>
);

// Search Filters Container Component
const SearchFiltersContainer = ({ children }) => (
  <Box sx={filterStyles.filterContainer}>
    <Container maxWidth="lg" sx={filterStyles.filterInnerContainer}>
      {children}
    </Container>
  </Box>
);

// Listings Container Component
const ListingsContainer = ({ children }) => (
  <Container maxWidth="lg" sx={filterStyles.listingsContainer}>
    {children}
  </Container>
);
