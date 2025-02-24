import Image from "next/image";
import HeroPage from "./components/body/HeroPage/HeroPage";
import { receiveListingsFromFirestore } from "../firebaseUtils/app";
import ListingsProvider from "./components/body/listings/ListingsProvider";
import FeaturedListings from "./components/body/listings/featuredListings/FeaturedListings";

export const revalidate = 3600;

export default async function Home() {
  const listings = await receiveListingsFromFirestore();
  const heroImage =
    "https://res.cloudinary.com/dulafqaoq/image/upload/f_auto,q_auto,w_auto,fl_progressive/v1739812368/Image_17_uijjge.png";

  // console.log(listings);

  return (
    <div
      style={{
        width: "100%",
        margin: 0,
        padding: 0,
      }}
    >
      <ListingsProvider listings={listings} />
      <HeroPage heroImage={heroImage} />
      <FeaturedListings />
    </div>
  );
}
