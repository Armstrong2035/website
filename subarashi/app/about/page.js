"use client";
import Hero from "../components/about/Hero";
import NavBar from "../components/appBar/AppBar";
import OurMission from "../components/about/OurMission";
import OurVision from "../components/about/OurVision";
import { Divider } from "@mui/material";
import WhatWeDo from "../components/about/WhatWeDo";
import WhatMakesUsDifferent from "../components/about/WhatMakesUsDifferent";
import Footer from "../components/footer/Footer";
import Introduction from "../components/about/Introduction";

export default function AboutUs() {
  return (
    <div>
      <NavBar />

      <Hero />

      <Introduction />

      <OurMission />

      <WhatWeDo />

      <OurVision />

      <Divider />

      {/* <WhatMakesUsDifferent /> */}

      {/*}
      
      <OurTeam />
      <ContactUs /> */}

      <Footer />
    </div>
  );
}
