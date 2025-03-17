// src/config/filterConfig.js

export const filterConfig = {
  propertyTypes: [
    { value: "Buy Apartment", label: "Buy Apartment" },
    { value: "Rent Apartment", label: "Rent Apartment" },
    { value: "Buy Villa", label: "Buy Villa" },
    { value: "Rent Villa", label: "Rent Villa" },
  ],

  priceRanges: [
    {
      value: "AED 0 - AED 150,000",
      label: "AED 0 - AED 150,000",
      min: 0,
      max: 150000,
    },
    {
      value: "AED 150,000 - AED 300,000",
      label: "AED 150,000 - AED 300,000",
      min: 150000,
      max: 300000,
    },
    {
      value: "AED 300,000 - AED 500,000",
      label: "AED 300,000 - AED 500,000",
      min: 300000,
      max: 500000,
    },
    {
      value: "AED 500,000+",
      label: "AED 500,000+",
      min: 500000,
      max: Number.MAX_SAFE_INTEGER,
    },
  ],

  bedroomOptions: [
    { value: "Any", label: "Any", minBedrooms: 0 },
    { value: "1+", label: "1+", minBedrooms: 1 },
    { value: "2+", label: "2+", minBedrooms: 2 },
    { value: "3+", label: "3+", minBedrooms: 3 },
    { value: "4+", label: "4+", minBedrooms: 4 },
  ],

  // Popular locations that could be used for autocomplete
  popularLocations: [
    "Dubai Marina",
    "Palm Jumeirah",
    "Madinat Jumeirah Living",
    "Downtown Dubai",
    "Business Bay",
    "Jumeirah Beach Residence (JBR)",
    "Arabian Ranches",
    "Dubai Hills Estate",
    "DIFC",
    "Tilal Al Ghaf",
  ],

  // Default filter values
  defaults: {
    propertyType: "Rent Apartment",
    location: "Dubai",
    priceRange: "AED 0 - AED 150,000",
    bedrooms: "Any",
  },
};
