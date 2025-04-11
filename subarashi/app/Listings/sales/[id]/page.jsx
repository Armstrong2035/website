"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  styled,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import BedIcon from "@mui/icons-material/Bed"
import BathtubIcon from "@mui/icons-material/Bathtub"
import SquareFootIcon from "@mui/icons-material/SquareFoot"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import NavBar from "../../../components/appBar/AppBar"
import Footer from "../../../components/footer/new-footer"
import { useListingStore } from "../../../store/listingsStore"
import LoadingSpinner from "../../../components/loading/loading-spinner"
import AgentImage from "../../../../public/images/agent-img.png"
import typographyStyles from "../../../styles"
import ButtonModal from "../../../components/CTA/ButtonModal"


const SideBarTypography = styled(Typography)(({ theme }) => ({


  ...typographyStyles.bodySmall,


}));

export default function ListingDetail() {
  const params = useParams()
  const { id } = params
  const { listings } = useListingStore()
  const [listing, setListing] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (listings && listings.length > 0) {
      const foundListing = listings.find((item) => item.id === id)
      if (foundListing) {
        setListing(foundListing)
      }
    } else {

      fetchListing()
    }
    setLoading(false)
  }, [id, listings])

  const fetchListing = async () => {
    try {
      const res = await fetch("/api/listings/sales-listings")
      const data = await res.json()
      const foundListing = data.listings.find((item) => item.id === id)
      if (foundListing) {
        setListing(foundListing)
      }
    } catch (error) {
      console.error("Failed to fetch listing:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleNextImage = () => {
    if (!listing || !listing.media) return
    setCurrentImageIndex((prevIndex) => (prevIndex === listing.media.length - 1 ? 0 : prevIndex + 1))
  }

  const handlePrevImage = () => {
    if (!listing || !listing.media) return
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? listing.media.length - 1 : prevIndex - 1))
  }

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index)
  }

  if (loading) {
    return (
      <LoadingSpinner />
    )
  }

/*   if (!listing) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        Listing not found
      </Box>
    )
  } */

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <Box sx={{ position: "relative", width: "100%", height: { xs: "50vh", md: "100vh" } }}>
        {listing?.media?.length > 0 && (
          <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
            <Box
              component="img"
              src={listing.media[currentImageIndex]}
              alt={listing.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
              }}
            />

            {/* Image Navigation Arrows */}
            <IconButton
              onClick={handlePrevImage}
              sx={{
                position: "absolute",
                left: 20,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(255,255,255,0.7)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>

            <IconButton
              onClick={handleNextImage}
              sx={{
                position: "absolute",
                right: 20,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(255,255,255,0.7)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
              }}
            >
              <ChevronRightIcon />
            </IconButton>

            {/* Property Info Overlay */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                color: "white",
                p: "10px",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

              <Typography sx={{ ...typographyStyles.bannerText, fontSize: "55px", fontWeight: 300, width: "100%" }} >
                {listing.location.building}, {listing.location.locality}, {listing.location.city}
              </Typography>
              </Box>

{/*               <Typography sx={{ ...typographyStyles.bannerText, fontSize: "55px", fontWeight: 300, }} >
                Price: AED {(listing.area * 1000).toLocaleString()}
              </Typography> */}
            </Box>
          </Box>
        )}

  
      </Box>

        {/* Thumbnail Gallery */}
  {/*     <Box
          sx={{

            bottom: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            p: 1,
    
          }}
        >
          {listing?.media &&
            listing.media.map((image, index) => (
              <Box
                key={index}
                onClick={() => handleThumbnailClick(index)}
                sx={{
                  width: 200,
                  height: 150,
                  mx: 0.5,
                  border: index === currentImageIndex ? "3px solid #005244" : "none",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            ))}
        </Box> */}

      {/* Property Details Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Left Sidebar */}
          <Grid item xs={12} md={3}>
            <Paper elevation={0} sx={{ p: 2,  }}>
              <List disablePadding sx={{ ...typographyStyles.bodySmall }}>
                <ListItem disableGutters
                >
                  
                  <SideBarTypography>
                    {`Bed - ${listing?.bedrooms}`}
                  </SideBarTypography>
   
                </ListItem>

                <ListItem disableGutters>
                  <SideBarTypography>
                  {`Baths - ${listing?.bathrooms}`}
                  </SideBarTypography>
                </ListItem>

                <ListItem disableGutters>  
                  <SideBarTypography>
                    {`SQ feet - ${listing?.area}ft`}
                  </SideBarTypography>
                </ListItem>
              </List>

              <Divider sx={{ my: 3 }} />

              <List disablePadding>
            

  
                  
                  <ButtonModal buttonText={"Enquiry"} variantStyle={"outlined"} />
    
                

              </List>        


              {/* Agent Information */}
  {/*             <Box sx={{ textAlign: "left", mb: 2 }}>
                <Box
                  component="img"
                  src="/images/agent-img.png"         alt={listing.agent.name}
                  sx={{
                    width: 216,
                    height: 260,
                    mb: 2,
                  }}
                />
                <Typography variant="h6" 
                 sx={{ 
                  fontFamily: "Degular, Arial, sans-serif",
                  fontWeight: 400,
                  color: "#005244",
                  fontSize: "24px",
                  }}>
                  {listing.agent.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, textTransform: "uppercase",
                  fontFamily: "Degular, Arial, sans-serif",
                  fontWeight: 300,
                  color: "#005244",
                  fontSize: "16px",
                 }}>
                  Investment Consultant
                </Typography>

                <Divider sx={{ mb: 2 }} />
                <Button variant="text"
                component="div"
                sx={{
                  width: "100%",
                  height: "50px",
                  fontFamily: "Degular, Arial, sans-serif",
                  fontWeight: 300,
                  color: "#005244",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  }}>
                 <Typography variant="body2" component={"h6"}
                  sx={{ textTransform: "uppercase",}}>  
                  Contact
                  </Typography>

                 <ArrowForwardIcon />


                </Button>
              </Box> */}
            </Paper>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={9}>
            {/* Property Description */}
            <Accordion defaultExpanded sx={{ mb: 3,
            boxShadow: "none",
            borderBottom: "1px solid #8E8E93",
             }}>
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="property-description-content"
                id="property-description-header"
              >
                <Typography variant="h5" component="h2"
                 sx={{
                  fontFamily: "Degular, Arial, sans-serif",
                  fontWeight: 300,
                  color: "#005244",
                  fontSize: "42px",
                  }}
                  >
                  Property Description
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{
                  fontFamily: "Degular, Arial, sans-serif",
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: "150%",
                }}>{listing?.description}</Typography>
              </AccordionDetails>
            </Accordion>

            {/* Key Features */}
         {/*    <Accordion defaultExpanded sx={{ mb: 3,
            boxShadow: "none",
            borderTop: "0px solid #8E8E93",
            borderBottom: "1px solid #8E8E93"
             }}>
              <AccordionSummary expandIcon={<AddIcon />} aria-controls="key-features-content" id="key-features-header">
                <Typography variant="h5" component="h2" color="primary" sx={{ fontFamily: "Degular, Arial, sans-serif",
                  fontWeight: 300,
                  color: "#005244",
                  fontSize: "42px"
                  }}>
                  Key Features
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Elegant Bedroom Retreat"
                      secondary="A spacious haven with a built-in wardrobe featuring LED lighting for a touch of sophistication and practicality."
                      primaryTypographyProps={{ fontWeight: "bold" }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Gourmet Kitchen"
                      secondary="Marble finishes, an integrated fridge, and top-of-the-line Miele appliances, including an electric induction stove, oven, range hood, and dishwasher."
                      primaryTypographyProps={{ fontWeight: "bold" }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Spa-Inspired Bathroom"
                      secondary="Carrara marble detailing, heated floors, heated towel rails, and a rain shower head for a truly indulgent experience."
                      primaryTypographyProps={{ fontWeight: "bold" }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Sophisticated Interiors"
                      secondary="Stunning herringbone flooring throughout, enhancing the apartment's timeless charm, with ample storage to suit your needs."
                      primaryTypographyProps={{ fontWeight: "bold" }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Modern Conveniences"
                      secondary="Fully equipped with a washer, dryer, two TVs, ducted air-conditioning, and electric blinds for effortless living."
                      primaryTypographyProps={{ fontWeight: "bold" }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Resort-Style Amenities"
                      secondary="Access to premium facilities, including an outdoor pool, spa, sauna, fully equipped gym and onsite concierge service."
                      primaryTypographyProps={{ fontWeight: "bold" }}
                    />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion> */}

            {/* Location */}
{/*             <Accordion defaultExpanded sx={{ mb: 3,
             boxShadow: "none",
             borderTop: "0px solid #8E8E93",
             borderBottom: "1px solid #8E8E93"}}>
              <AccordionSummary expandIcon={<AddIcon />} aria-controls="location-content" id="location-header">
                <Typography variant="h5" component="h2"  sx={{
                  fontFamily: "Degular, Arial, sans-serif",
                  fontWeight: 300,
                  color: "#005244",
                  fontSize: "42px",
                }}>
                  Location
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  sx={{
                    width: "100%",
                    height: 300,
                    bgcolor: "#f5f5f5",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body1" color="text.secondary">
                    {listing.location.building}, {listing.location.locality}, {listing.location.city}
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion> */}

 {/* Luxury Amenities */}
   {/*          <Accordion defaultExpanded sx={{
              mb: 3,
             boxShadow: "none",
             borderTop: "0px solid #8E8E93",
             borderBottom: "1px solid #8E8E93"
             }}>
              <AccordionSummary expandIcon={<AddIcon />} aria-controls="amenities-content" id="amenities-header">
                <Typography variant="h5" component="h2" 
                sx={{ 
                    fontFamily: "Degular, Arial, sans-serif",
                    fontWeight: 300,
                    color: "#005244",
                    fontSize: "42px",
                 }}>
                  Luxury Amenities
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List component="ul"
                  sx={{
                    pl: 2,
                    listStyleType: "disc",
                  }}>
                  <ListItem component="li" sx={{ display: "list-item", color: "#005244"}} >
                    <ListItemText
                      primary="24/7 Security"
                      sx={{
                        fontFamily: "Degular, Arial, sans-serif",
                  fontWeight: 300,
                  color: "#005244",
                  fontSize: "16px",
                     }}
                    />
                  </ListItem>
                  <ListItem component="li" sx={{ display: "list-item", color: "#005244"}} >
                    <ListItemText
                      primary="Swimming Pool."
                     sx={{
                        fontFamily: "Degular, Arial, sans-serif",
                  fontWeight: 300,
                  color: "#005244",
                  fontSize: "16px",
                     }}
                    />
                  </ListItem>
                  <ListItem component="li" sx={{ display: "list-item", color: "#005244"}} >
                    <ListItemText
                      primary="Fully Equipped Gym."
                     sx={{
                        fontFamily: "Degular, Arial, sans-serif",
                  fontWeight: 300,
                  color: "#005244",
                  fontSize: "16px",
                     }}
                    />
                  </ListItem>
                  <ListItem component="li" sx={{ display: "list-item", color: "#005244"}} >
                    <ListItemText
                      primary="Children's Play Area."
                     sx={{
                        fontFamily: "Degular, Arial, sans-serif",
                  fontWeight: 300,
                  color: "#005244",
                  fontSize: "16px",
                     }}
                    />
                  </ListItem>
                  <ListItem component="li" sx={{ display: "list-item", color: "#005244"}} >
                    <ListItemText
                      primary="Landscaped Gardens."
                     sx={{
                        fontFamily: "Degular, Arial, sans-serif",
                  fontWeight: 300,
                  color: "#005244",
                  fontSize: "16px",
                     }}
                    />
                  </ListItem>
                  <ListItem component="li" sx={{ display: "list-item", color: "#005244"}} >
                    <ListItemText
                      primary="Covered Parking."
                     sx={{
                        fontFamily: "Degular, Arial, sans-serif",
                  fontWeight: 300,
                  color: "#005244",
                  fontSize: "16px",
                     }}
                    />
                  </ListItem>
                  <ListItem component="li" sx={{ display: "list-item", color: "#005244"}} >
                    <ListItemText
                      primary="Proximity to Schools and Shopping."
                     sx={{
                        fontFamily: "Degular, Arial, sans-serif",
                  fontWeight: 300,
                  color: "#005244",
                  fontSize: "16px",
                     }}
                    />
                  </ListItem>
                </List>
  
              </AccordionDetails>
            </Accordion> */}
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  )
}
