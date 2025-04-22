"use client";
import {
  Box,
  Grid2,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Container,
} from "@mui/material";
import { mockListings } from "../mockData";
import NavBar from "../../components/appBar/AppBar";
import typographyStyles from "../../styles";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/loading/loading-spinner";
import Footer from "../../components/footer/new-footer";
import SalesListingsFilters from "../../components/listings/sales-listings-filters";
import { useRouter } from "next/navigation";
import { useListingStore } from "../../store/listingsStore";
import SalesListingsGrid from "../../components/listings/sales-listings-grid";


export default function SalesListings() {
  const [allListings, setAllListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [hoveredCardId, setHoveredCardId] = useState(null);
  const router = useRouter();
  const { setListings } = useListingStore();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch("/api/listings/sales-listings");
        const data = await res.json();
        setAllListings(data.listings);
        setFilteredListings(data.listings);
        setListings(data.listings);
        console.log("Sales listings", data.listings);
      } catch (error) {
        console.error("Failed to fetch listings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  const handleMouseEnter = (id) => {
    setHoveredCardId(id);
  };

  const handleMouseLeave = () => {
    setHoveredCardId(null);
  };

  // const handleListingClick = (id) => {
  //   router.push(`/Listings/sales/${id}`);
  // };

  //console.log(listings);
  const applyFilters = (filterParams) => {
    console.log("Applying filters:", filterParams);
    console.log("All listings count:", allListings.length);

    let filtered = [...allListings];

    // Filter by property type
    /*     if (filterParams.propertyType && filterParams.propertyType.includes("Apartments")) {
      filtered = filtered.filter((listing) => listing.propertyType === "Apartment")
    } else if (filterParams.propertyType && filterParams.propertyType.includes("Villas")) {
      filtered = filtered.filter((listing) => listing.propertyType === "Villa")
    } */

    // Filter by bedrooms
    if (filterParams.bedrooms && filterParams.bedrooms !== "Any") {
      console.log("Filtering by bedrooms:", filterParams.bedrooms);
      if (filterParams.bedrooms > 5) {
        filtered = filtered.filter((listing) => listing.bedrooms >= 5);
      } else {
        filtered = filtered.filter((listing) => {
          return listing.bedrooms === filterParams.bedrooms;
        });
      }
    }

    // Filter by price range

    /*     if (filterParams.priceRange && (filterParams.priceRange.min > 0 || filterParams.priceRange.max !== null)) {
      filtered = filtered.filter((listing) => {
      
        const price = listing.price || 0

        if (filterParams.priceRange.max === null) {
          return price >= filterParams.priceRange.min
        }
        return price >= filterParams.priceRange.min && price <= filterParams.priceRange.max
      })
    } */

    // Filter by location
    /*    if (filterParams.location) {
      filtered = filtered.filter((listing) => {
        const listingLocation = `${listing.location.city}, ${listing.location.building}`
        return listingLocation.includes(filterParams.location.split(",")[0])
      })
    }
 */
    setFilteredListings(filtered);
  };

  return (
    <>
      <NavBar
        color="#005244"
        hoverColor="#F2FFC2"
        hoverBackground={"#005244"}
        buttonColor={"#005244"}
      />

      <SalesListingsFilters onFilterChange={applyFilters} />

      <SalesListingsGrid listings={filteredListings} loading={loading} />

      <Footer />
    </>
  );
}
