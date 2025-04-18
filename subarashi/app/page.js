import Image from "next/image";
import HeroPage from "./components/body/HeroPage/HeroPage";
import { receiveListingsFromFirestore } from "../firebaseUtils/app";
import ListingsProvider from "./components/body/listings/ListingsProvider";
import FeaturedListings from "./components/body/listings/featuredListings/FeaturedListings";
import Inquiries from "./components/body/inquiries/Inquiries";

import NavBar from "./components/appBar/AppBar";
import { mockListings } from "../public/mockListings";
import FeaturedResources from "./components/body/featured/FeaturedResources";
import Footer from "./components/footer/new-footer";
import { getAllAreaGuides } from "./lib/notion";

export const revalidate = 3600;

export default async function Home() {
  // Try to fetch listings with fallback to mockListings
  // let listings = [];
  // try {
  //   listings = await receiveListingsFromFirestore();
  // } catch (error) {
  //   console.error("Error in Home component:", error);
  //   // Fallback to mock data
  //   listings = mockListings;
  // }

  const guides = await getAllAreaGuides();

  const heroImage =
    "https://res.cloudinary.com/dulafqaoq/video/upload/q_auto:good,vc_auto,w_auto,c_limit,f_auto/v1742972834/Hero-Page_Video_w5dimj.mp4";

  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <NavBar buttonColor={"#F2FFC2"} />
      <HeroPage heroImage={heroImage} />
      <FeaturedResources guides={guides} />
      {/* <FeaturedListings /> */}
      <Inquiries />
      <Footer />
    </div>
  );
}
