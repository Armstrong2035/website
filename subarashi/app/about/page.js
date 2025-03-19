import Hero from "../components/about/Hero";
import NavBar from "../components/appBar/AppBar";
import OurMission from "../components/about/OurMission";
import OurVision from "../components/about/OurVision";
import { Divider } from "@mui/material";
import WhatWeDo from "../components/about/WhatWeDo";
import WhatMakesUsDifferent from "../components/about/WhatMakesUsDifferent";
import Footer from "../components/footer/Footer";
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
      Name: "Heidi",
      Title: "Off Plan Investment Advisor",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742374963/Heidi-Profile-Photo-Subarashi-1_wc3ccg.png",
    },
    {
      Name: "Taher",
      Title: "Investment Consultant",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742374964/Taher_qjpy1n.png",
    },

    {
      Name: "Oliver",
      Title: "Investment Consultant",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742374962/Oliver-Profile-Photo-Subarashi-1_czgx1x.png",
    },
    {
      Name: "Yahia",
      Title: "Investment Adviser Off-plan",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742374955/Yahia-Profile-Photo-Subarashi-1_a4pky4.png",
    },

    {
      Name: "Zamin",
      Title: "Off Plan Investment Advisor",
      ImageUrl:
        "hhttps://res.cloudinary.com/dulafqaoq/image/upload/v1742374957/Zamin-Profile-Photo-Subarashi-1_fbvkjb.png",
    },

    {
      Name: "Farah",
      Title: "Investment Adviser Off-plan",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742374956/Farah-Profile-Photo-Subarashi-1_mulx0f.png",
    },

    {
      Name: "Hamza",
      Title: "Sales Agent / Off-Plan",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742374957/Hamza-Profile-Photo-Subarashi_tukdpw.png",
    },

    {
      Name: "Sofia",
      Title: "Administrative Coordinator",
      ImageUrl:
        "hhttps://res.cloudinary.com/dulafqaoq/image/upload/v1742374958/Sofia-Profile-Photo-Subarashi_n1d8su.png",
    },
    {
      Name: "Estrella",
      Title: "Administrative Coordinator",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742374958/Istar-Profile-Photo-Subarashi-1_r2agka.png",
    },
    {
      Name: "Armstrong",
      Title: "Marketing Technologist Manager",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742374963/Armstrong-Profile-Photo-Subarashi-1_aq86vi.png",
    },
    {
      Name: "Dafne",
      Title: "Recruiter",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742374962/Dafne-Profile-Photo-Subarashi_teot1x.png",
    },
    {
      Name: "Yina",
      Title: "Accounts Assistant",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742374953/Yina-Profile-Photo-Subarashi-1_es5fmt.png",
    },
    {
      Name: "Marvin",
      Title: "Accountant",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742374954/Marvin-Profile-Photo-Subarashi-1_mlx8pw.png",
    },
    {
      Name: "Bicher",
      Title: "Compliance Officer",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742374954/Bicher-Profile-Photo-Subarashi-1_z7dsv2.png",
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
      Name: "Shahd",
      Title: "Telesales",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742374957/Shad-Profile-Photo-Subarashi-1_aozzr1.png",
    },

    {
      Name: "Leo",
      Title: "Marketing",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742375800/Profile-Photo-Subarashi_xrqxwf.png",
    },

    {
      Name: "Aasma",
      Title: "Videographer & Photographer",
      ImageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/v1742375575/Aasma-Profile-Photo-Subarashi-1_t4hrsa.png",
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
      <NavBar />

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
