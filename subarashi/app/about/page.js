import Hero from "../components/about/Hero";
import NavBar from "../components/appBar/AppBar";
import OurMission from "../components/about/OurMission";
import OurVision from "../components/about/OurVision";
import { Divider } from "@mui/material";
import WhatWeDo from "../components/about/WhatWeDo";
import WhatMakesUsDifferent from "../components/about/WhatMakesUsDifferent";
import Footer from "../components/footer/Footer";
import Introduction from "../components/about/Introduction";

export const revalidate = 3600;

export default function AboutUs() {
  const logoIcon =
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1742301025/GreenMarkpng_1_gon5vd.png";

  const subaPattern =
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1742302391/SubaPattern_4_b7njil.png";

  const ourMissionImage =
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1742301027/BGBGdubai_ayydch.jpg";

  const ourVisionImage =
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1742301027/grant-lemons-jTCLppdwSEc-unsplash_krbhk7.jpg";
  return (
    <div>
      <NavBar />

      <Hero />

      <Introduction logoIcon={logoIcon} backgroundImage={subaPattern} />

      <OurMission image={ourMissionImage} />

      <WhatWeDo />

      <OurVision image={ourVisionImage} />

      <Divider />

      {/* <WhatMakesUsDifferent /> */}

      {/*}
      
      <OurTeam />
      <ContactUs /> */}

      <Footer />
    </div>
  );
}
