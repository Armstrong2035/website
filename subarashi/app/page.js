import Image from "next/image";
import HeroPage from "./components/body/HeroPage/HeroPage";
import { receiveListingsFromFirestore } from "../firebaseUtils/app";
import ListingsProvider from "./components/body/listings/ListingsProvider";
import FeaturedListings from "./components/body/listings/featuredListings/FeaturedListings";
import Inquiries from "./components/body/inquiries/Inquiries";
import Footer from "./components/footer/Footer";
import NavBar from "./components/appBar/AppBar";
import { mockListings } from "../public/mockListings";

export const revalidate = 3600;

export default async function Home() {
  // Try to fetch listings with fallback to mockListings
  let listings = [];
  try {
    listings = await receiveListingsFromFirestore();
  } catch (error) {
    console.error("Error in Home component:", error);
    // Fallback to mock data
    listings = mockListings;
  }

  const heroImage =
    "https://res.cloudinary.com/dulafqaoq/image/upload/f_auto,q_90,w_auto,fl_progressive/v1741334666/Untitled_design_16_c7gjno.png";

  return (
    <div
      style={{
        width: "100%",
        margin: 0,
        padding: 0,
      }}
    >
      <ListingsProvider listings={listings} />
      <NavBar />
      <HeroPage heroImage={heroImage} />
      <FeaturedListings />
      <Inquiries />
      <Footer />
    </div>
  );
}
