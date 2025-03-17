"use client";

import { use } from "react";
import ListingDetailView from "../../components/listingPage/ListingDetailView";
import { mockListings } from "../../../public/mockListings";
import NavBar from "../../components/appBar/AppBar";

export default function Page({ params }) {
  // Unwrap the params promise using React.use()
  const unwrappedParams = use(params);

  // Get the listing ID from the unwrapped params
  const listingId = unwrappedParams.id;

  // Find the matching listing from mock data
  const listing = mockListings.find((item) => item.id === listingId);

  return (
    <>
      <NavBar />
      <ListingDetailView listing={listing} />
    </>
  );
}
