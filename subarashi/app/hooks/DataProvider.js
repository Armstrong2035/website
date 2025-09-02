"use client";
import { useEffect, useState } from "react";
import { useListingsStore } from "../store/listingsStore";

export default function DataProvider({ children }) {
  const setSalesListings = useListingsStore((state) => state.setSalesListings);
  const setLeaseListings = useListingsStore((state) => state.setLeaseListings);

  const [loading, setLoading] = useState(false);

  const fetchListings = async () => {
    if (loading) return; // Prevent multiple fetches

    setLoading(true);
    let rentalData = [];
    let salesData = [];

    try {
      const response = await fetch(
        "https://crm.mindall.co/api/api/integrations/website/77451f8d-430e-457e-892d-02fdfd30ab1e/properties.json"
      );

      if (response.ok) {
        const listings = await response.json();

        //console.log(listings);

        rentalData = filterProperties("rent", listings.data);
        salesData = filterProperties("sale", listings.data);

        saveListingsToZustand(
          rentalData,
          salesData,
          setLeaseListings,
          setSalesListings
        );

        // console.log(
        //   `Loaded ${rentalData.length} rentals and ${salesData.length} sales`
        // );
      }
    } catch (error) {
      console.error("Error fetching listings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return <>{children}</>;
}

const filterProperties = (dealType, listings) => {
  const data = listings.filter(
    (listing) => listing.general.dealType === dealType
  );

  return data;
};

const saveListingsToZustand = (leases, sales, leaseHandler, salesHandler) => {
  leaseHandler(leases);
  salesHandler(sales);
};
