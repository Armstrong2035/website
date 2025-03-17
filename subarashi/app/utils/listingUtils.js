/**
 * Utility functions for property listings
 */

// Parse price value from listing price object
export const parsePriceValue = (priceObj) => {
  if (!priceObj) return 0;
  return priceObj.amount || 0;
};

// Format price with currency and commas
export const formatPrice = (priceObj, defaultCurrency = "AED") => {
  if (!priceObj) return "";

  const { amount, currency, frequency } = priceObj;
  const formatter = new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: currency || defaultCurrency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const formattedPrice = formatter.format(amount);
  if (frequency) {
    return `${formattedPrice}/${frequency}`;
  }
  return formattedPrice;
};

// Parse bedroom filter strings like "2+" or "Any"
export const parseBedroomFilter = (bedroomString) => {
  if (bedroomString === "Any") return 0;
  return parseInt(bedroomString.replace("+", ""));
};

// Parse property type and purpose from combined string
export const parsePropertyType = (propertyTypeStr) => {
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

// Format location for display
export const formatLocation = (locationObj) => {
  if (!locationObj) return "";

  if (typeof locationObj === "string") return locationObj;

  const { building, area, community, city } = locationObj;
  const parts = [];

  if (community) parts.push(community);
  if (area && area !== community) parts.push(area);
  if (city) parts.push(city);

  return parts.join(", ");
};

// Sort listings by various criteria
export const sortListings = (listings, sortBy = "price-low-high") => {
  const listingsCopy = [...listings];

  switch (sortBy) {
    case "price-low-high":
      return listingsCopy.sort(
        (a, b) => parsePriceValue(a.price) - parsePriceValue(b.price)
      );
    case "price-high-low":
      return listingsCopy.sort(
        (a, b) => parsePriceValue(b.price) - parsePriceValue(a.price)
      );
    case "bedrooms-high-low":
      return listingsCopy.sort(
        (a, b) => (b.specs?.bedrooms || 0) - (a.specs?.bedrooms || 0)
      );
    case "area-high-low":
      return listingsCopy.sort((a, b) => {
        const areaA = a.specs?.size?.value || 0;
        const areaB = b.specs?.size?.value || 0;
        return areaB - areaA;
      });
    default:
      return listingsCopy;
  }
};

// Generate a summary of the filter criteria for display
export const generateFilterSummary = (filters) => {
  const { propertyType, location, priceRange, bedrooms } = filters;
  const { purpose, propertyType: type } = parsePropertyType(propertyType);

  let summary = `${purpose}`;

  if (type) {
    summary += ` • ${type}s`;
  }

  if (location && location !== "Dubai") {
    summary += ` • ${location}`;
  }

  if (bedrooms && bedrooms !== "Any") {
    summary += ` • ${bedrooms} Bedrooms`;
  }

  return summary;
};
