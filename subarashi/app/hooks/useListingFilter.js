import { useState, useEffect } from "react";
import { filterConfig } from "../config/filterConfig";

export const useListingsFilter = (initialListings) => {
  // Search form states initialized from config
  const [propertyType, setPropertyType] = useState(
    filterConfig.defaults.propertyType
  );
  const [location, setLocation] = useState(filterConfig.defaults.location);
  const [bedrooms, setBedrooms] = useState(filterConfig.defaults.bedrooms);

  // Store both the original listings and the filtered ones
  const [allListings, setAllListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize with all listings
  useEffect(() => {
    if (initialListings && initialListings.length > 0) {
      setAllListings(initialListings);
      setFilteredListings(initialListings);
      setIsLoading(false);
    }
  }, [initialListings]);

  // Helper function to parse bedroom filter
  const parseBedroomFilter = (bedroomFilter) => {
    const selectedOption = filterConfig.bedroomOptions.find(
      (item) => item.value === bedroomFilter
    );
    if (selectedOption) {
      return selectedOption.minBedrooms;
    }

    // Fallback parsing logic if not found in config
    if (bedroomFilter === "Any") return 0;
    return parseInt(bedroomFilter.replace("+", ""));
  };

  // Parse property type to get action and type
  const parsePropertyType = (propertyTypeStr) => {
    const [action, type] = propertyTypeStr.split(" ");

    // Map to purpose and propertyType values in your data structure
    const purposeMap = {
      Buy: "For Sale",
      Rent: "For Rent",
    };

    return {
      purpose: purposeMap[action],
      propertyType: type,
    };
  };

  // Apply all filters
  const applyFilters = () => {
    setIsLoading(true);

    const { purpose, propertyType: type } = parsePropertyType(propertyType);
    const minBedrooms = parseBedroomFilter(bedrooms);

    const filtered = allListings.filter((listing) => {
      // Check property type and purpose (buy/rent) match
      const isMatchingType =
        listing.propertyType === type && listing.purpose === purpose;

      // Location filter: Check in building, area, community, district, or city
      const locationObj = listing.location;
      let isMatchingLocation = false;

      if (location === "") {
        isMatchingLocation = true;
      } else if (typeof locationObj === "string") {
        isMatchingLocation = locationObj
          .toLowerCase()
          .includes(location.toLowerCase());
      } else {
        // Check in all location fields
        const locationValues = Object.values(locationObj).filter(Boolean);
        isMatchingLocation = locationValues.some((value) =>
          value.toLowerCase().includes(location.toLowerCase())
        );
      }

      // Bedroom filter
      const bedroomCount = listing.specs?.bedrooms || 0;
      const isMatchingBedrooms = bedroomCount >= minBedrooms;

      return isMatchingType && isMatchingLocation && isMatchingBedrooms;
    });

    setFilteredListings(filtered);
    setIsLoading(false);
  };

  // Apply filters when any filter changes
  useEffect(() => {
    const timer = setTimeout(() => {
      applyFilters();
    }, 300); // Small debounce for better performance

    return () => clearTimeout(timer);
  }, [propertyType, location, bedrooms]);

  return {
    propertyType,
    setPropertyType,
    location,
    setLocation,
    bedrooms,
    setBedrooms,
    filteredListings,
    isLoading,
    applyFilters,
  };
};
