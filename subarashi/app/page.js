import Image from "next/image";
import HeroPage from "./components/body/HeroPage/HeroPage";

export default function Home() {
  const heroImage =
    "https://res.cloudinary.com/dulafqaoq/image/upload/f_auto,q_auto,w_auto,fl_progressive/v1739812368/Image_17_uijjge.png";

  return (
    <div
      style={{
        width: "100%",
        margin: 0,
        padding: 0,
      }}
    >
      <HeroPage heroImage={heroImage} />
    </div>
  );
}
