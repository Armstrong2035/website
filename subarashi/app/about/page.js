import Hero from "../components/about/Hero";
import NavBar from "../components/appBar/AppBar";
import OurMission from "../components/about/OurMission";
import OurVision from "../components/about/OurVision";
import { Divider } from "@mui/material";
import WhatWeDo from "../components/about/WhatWeDo";
import WhatMakesUsDifferent from "../components/about/WhatMakesUsDifferent";
import Footer from "../components/footer/new-footer";
import Introduction from "../components/about/Introduction";
import TeamSection from "../components/about/OurTeam/TeamSection";

export const revalidate = 2592000;

export default function AboutUs() {
  const logoIcon =
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1742301025/GreenMarkpng_1_gon5vd.png";

  const subaPattern =
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1742302391/SubaPattern_4_b7njil.png";

  const ourMissionImage =
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1742301027/BGBGdubai_ayydch.jpg";

  const ourVisionImage =
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1742301027/grant-lemons-jTCLppdwSEc-unsplash_krbhk7.jpg";

  const ourTeam = [
    {
      Name: "Aje",
      Title: "Chief Executive Officer",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742373850/Aje_peoac1.png",
    },

    {
      Name: "Jauad",
      Title: "Investment Consultant",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742374964/Luri_gwnrvk.png",
    },

    {
      Name: "Kamaal",
      Title: "Investment Consultant",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742374962/Kamaal-Profile-Photo-Subarashi_fe3gde.png",
    },

    {
      Name: "Ola",
      Title: "Investment Consultant",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1747631297/Banks_uhjrtb.png",
    },

    {
      Name: "Mohammed",
      Title: "Investment Consultant",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1747632523/Mohammed_azlf2l.png",
    },

    {
      Name: "Sofia",
      Title: "Administrative Manager",
      ImageUrl:
        "hhttps://res.cloudinary.com/dulafqaoq/image/upload/v1742374958/Sofia-Profile-Photo-Subarashi_n1d8su.png",
    },

    {
      Name: "Armstrong",
      Title: "IT manager / Software Engineer",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742374963/Armstrong-Profile-Photo-Subarashi-1_aq86vi.png",
    },

    {
      Name: "Yina",
      Title: "Accounts Assistant",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742374953/Yina-Profile-Photo-Subarashi-1_es5fmt.png",
    },

    {
      Name: "Roselily",
      Title: "Receptionist",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742374956/Rose-Profile-Photo-Subarashi-1_j6qh94.png",
    },
    {
      Name: "Erica",
      Title: "Holiday Homes Operations Specialist",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742374956/Erica-Profile-Photo-Subarashi_vs25qr.png",
    },

    {
      Name: "Gideon",
      Title: "Guest Relations Officer",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742374960/Gideon-Profile-Photo-Subarashi-1_uhkwdq.png",
    },
  ];

  return (
    <div>
      <NavBar buttonColor={"#F2FFC2"} />

      <Hero />

      <Introduction logoIcon={logoIcon} backgroundImage={subaPattern} />

      <OurMission image={ourMissionImage} />

      <WhatWeDo />

      <OurVision image={ourVisionImage} />

      <Divider />

      <TeamSection ourTeam={ourTeam} />

      {/* <WhatMakesUsDifferent /> */}

      {/*}
      
      <OurTeam />
      <ContactUs /> */}

      <Footer />
    </div>
  );
}
