import { Box, Container, Divider, Grid2 } from "@mui/material";
import FooterTitle from "./FooterTitle";
import Address from "./Address";
import ContactUs from "./ContactUs";
import Socials from "./Socials";

export default function Footer() {
  const footerItems = {
    title: ["Timeless", "Future", "Awaits", "Subarashi"],
    address: {
      line1: "Office 410, AB Business Center",
      line2: "Al Barsha, Sheikh Zayed Road",
      line3: "Dubai, United Arab Emirates",
    },
    contactDetails: {
      email: "admin@subarashirealestate.com",
      mobile: "0528715369",
      landline: "045725375",
    },
    officeHours: "9:00 am - 6:00pm Gulf Standard Time",
    socials: {
      instagram: {
        url: "",
        icon: "",
      },
      tiktok: {
        url: "",
        icon: "",
      },
      facebook: {
        url: "",
        icon: "",
      },
      twitter: {
        url: "",
        icon: "",
      },
      linkedin: {
        url: "",
        icon: "",
      },
      youtube: {
        url: "",
        icon: "",
      },
      snapchat: {
        url: "",
        icon: "",
      },
      pinterest: {
        url: "",
        icon: "",
      },

      whatsapp: {
        url: "",
        icon: "",
      },
      threads: {
        url: "",
        icon: "",
      },
    },
  };

  return (
    <Box sx={{ backgroundColor: "#005244", pl: 10, pr: 10, pb: 10, pt: 10 }}>
      <FooterTitle title={footerItems.title} />
      <Divider
        variant="middle"
        sx={{ backgroundColor: "#E5E5FF", mt: 5, mb: 5 }}
      />

      <Grid2 container>
        <Grid2 item size={{ lg: 8 }}>
          <Address address={footerItems.address} />
        </Grid2>

        <Grid2 item size={{ lg: 4 }}>
          <ContactUs details={footerItems.contactDetails} />
          {/* <Socials socials={footerItems.socials} /> */}
        </Grid2>
      </Grid2>

      {/* 
      <SocialMedia /> */}
    </Box>
  );
}
