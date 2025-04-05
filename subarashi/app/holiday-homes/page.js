import { Box, Container, Typography } from "@mui/material";
import NavBar from "../components/appBar/AppBar";
import Footer from "../components/footer/new-footer";
import HeroImage from "../components/body/HeroPage/HeroImage";
import AirbnbWidgetGrid from "../components/holidayHomes/AirbnbWidgetGrid";

// Use static site generation with revalidation
export const revalidate = 3600; // Revalidate every hour

export default function HolidayHomes() {
  // Sample hero image URL
  const heroImage =
    "https://res.cloudinary.com/dulafqaoq/image/upload/f_auto,q_auto,w_auto,fl_progressive/v1739812368/Image_17_uijjge.png";

  // Airbnb listings with image URLs
  const airbnbListings = [
    {
      id: "1373619381848705243",
      embedCode: `<div class="airbnb-embed-frame" data-id="1373619381848705243" data-view="home" data-hide-price="false" style="width: 100%; height: 300px;"><a href="https://www.airbnb.com/rooms/1373619381848705243?guests=1&adults=1&s=66&source=embed_widget">View On Airbnb</a><a href="https://www.airbnb.com/rooms/1373619381848705243?guests=1&adults=1&s=66&source=embed_widget" rel="nofollow">Rental unit in Dubai · ★New · 1 bedroom · 1 bed · 1.5 baths</a><script async="" src="https://www.airbnb.ae/embeddable/airbnb_jssdk"></script></div>`,
      imageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/f_auto,q_auto/IMG_4452_hjg96x",
    },
    {
      id: "1375076479909252479",
      embedCode: `<div class="airbnb-embed-frame" data-id="1375076479909252479" data-view="home" data-hide-price="true" style="width: 450px; height: 300px; margin: auto;"><a href="https://www.airbnb.com/rooms/1375076479909252479?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget">View On Airbnb</a><a href="https://www.airbnb.com/rooms/1375076479909252479?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget" rel="nofollow">Rental unit in Dubai · ★New · 1 bedroom · 1 bed · 1.5 baths</a><script async="" src="https://www.airbnb.ae/embeddable/airbnb_jssdk"></script></div>`,
      imageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/f_auto,q_auto/IMG_4364_x8jrut",
    },
    {
      id: "1348487863803978744",
      embedCode: `<div class="airbnb-embed-frame" data-id="1348487863803978744" data-view="home" data-hide-price="true" style="width: 450px; height: 300px; margin: auto;"><a href="https://www.airbnb.com/rooms/1348487863803978744?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget">View On Airbnb</a><a href="https://www.airbnb.com/rooms/1348487863803978744?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget" rel="nofollow">Rental unit in Dubai · ★New · 1 bedroom · 1 bed · 1.5 baths</a><script async="" src="https://www.airbnb.ae/embeddable/airbnb_jssdk"></script></div>`,
      imageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/f_auto,q_auto/IMG_4400_jm6op3",
    },
    {
      id: "1373619381848705243",
      embedCode: `<div class="airbnb-embed-frame" data-id="1373619381848705243" data-view="home" data-hide-price="true" style="width: 450px; height: 300px; margin: auto;"><a href="https://www.airbnb.com/rooms/1373619381848705243?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget">View On Airbnb</a><a href="https://www.airbnb.com/rooms/1373619381848705243?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget" rel="nofollow">Rental unit in Dubai · ★New · 1 bedroom · 1 bed · 1.5 baths</a><script async="" src="https://www.airbnb.ae/embeddable/airbnb_jssdk"></script></div>`,
      imageUrl:
        "https://res.cloudinary.com/dulafqaoq/image/upload/f_auto,q_auto/IMG_4364_x8jrut",
    },
  ];

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <NavBar />
        <Box sx={{ height: "70vh", width: "100%", backgroundColor: "#005244" }}>
          <HeroImage heroImage={heroImage} />
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#005244",
          color: "white",
          py: 4,
          mb: 4,
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "36px", sm: "48px", md: "56px" },
              fontWeight: 300,
              mb: 2,
              color: "#F2FFC2",
              fontFamily: "Degular, Arial, sans-serif",
            }}
          >
            Luxury Holiday Homes
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "16px", sm: "18px" },
              maxWidth: "800px",
              margin: "0 auto",
              color: "white",
              fontFamily: "Degular, Arial, sans-serif",
            }}
          >
            Experience the finest short-term accommodations in Dubai
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 8, overflow: "hidden" }}>
        <AirbnbWidgetGrid listings={airbnbListings} />
      </Container>

      <Footer />
    </>
  );
}
