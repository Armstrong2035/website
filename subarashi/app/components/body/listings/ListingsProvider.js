// "use client";

// import { useEffect } from "react";
// import { useListingsStore } from "../../../zustand/listingsStore";

// export default function ListingsProvider({ listings }) {
//   const setListings = useListingsStore((state) => state.setListings);

//   useEffect(() => {
//     if (listings) {
//       setListings(listings);
//     }
//   }, [listings, setListings]);

//   return null;
// }
