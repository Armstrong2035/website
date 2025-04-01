"use client"

import { useState } from "react"
import {
  Box,
  Container,
  Typography,
  TextField,
  IconButton,
  Grid2,
  Divider,
  Link as MuiLink,
  InputAdornment,
  styled,
} from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"


const FooterContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  paddingTop: "200px",
  paddingBottom: theme.spacing(4),
  width: "100%",
}))

const BackgroundImage = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `url('/images/footer-background.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: -1,
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "70%",
    background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%)",
  },
}))

const ContentContainer = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 1,

}))

const ProjectLine = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(1),
}))

const LineIndicator = styled(Box)(({ theme }) => ({
  width: "20px",
  height: "2px",
  backgroundColor: theme.palette.text.primary,
  marginRight: theme.spacing(2),
}))

const EmailInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.divider,
      borderRadius: 0,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.text.primary,
    },
  },
  width: "100%",
}))

const SocialLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: "none",
  textTransform: "uppercase",
  fontSize: "0.75rem",
  letterSpacing: "1px",
  marginRight: theme.spacing(3),
  "&:hover": {
    color: theme.palette.primary.main,
  },
}))

const Footer = () => {
  const [email, setEmail] = useState("")

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
   
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <FooterContainer>
      <BackgroundImage />
      <ContentContainer maxWidth="lg">
        <Grid2 container spacing={4}>
          <Grid2 item xs={12} md={4}>
            <Box sx={{ width: "80px", height: "80px", mb: 2 }}>
              <svg viewBox="0 0 100 100" width="100%" height="100%">
                <path
                  d="M50,20 C70,20 85,35 85,55 C85,75 70,90 50,90 C30,90 15,75 15,55 C15,35 30,20 50,20 Z"
                  fill="none"
                  stroke="#333"
                  strokeWidth="3"
                />
                <path d="M35,40 L65,70 M65,40 L35,70" stroke="#333" strokeWidth="3" />
              </svg>
            </Box>
            <ProjectLine>
              <LineIndicator />
              <Typography variant="body2">Off-Plan Project One</Typography>
            </ProjectLine>
            <ProjectLine>
              <LineIndicator />
              <Typography variant="body2">Off-Plan Project One</Typography>
            </ProjectLine>
            <ProjectLine>
              <LineIndicator />
              <Typography variant="body2">Off-Plan Project One</Typography>
            </ProjectLine>
          </Grid2>

          <Grid2 item xs={12} md={4} />

          <Grid2 item xs={12} md={4}>
            <Typography variant="body1" sx={{ mb: 2, fontWeight: 500 }}>
              Never Miss A Piece Of The Action. Subscribe For New Listings, Sales Results, Podcast Releases, And Media
              Exclusives From Subarashi
            </Typography>

            <form onSubmit={handleSubmit}>
              <EmailInput
                placeholder="EMAIL ADDRESS"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end" type="submit">
                        <ArrowForwardIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </form>
          </Grid2>
        </Grid2>

        <Divider sx={{ my: 6 }} />

        <Grid2 container spacing={2} alignItems="center">
          <Grid2 item xs={12} md={3}>
            <Typography variant="body2" color="textSecondary">
              © SUBARASHI 2024
            </Typography>
          </Grid2>

          <Grid2 item xs={12} md={6}>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <SocialLink href="#" target="_blank" rel="noopener">
                Twitter
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener">
                Facebook
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener">
                LinkedIn
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener">
                Instagram
              </SocialLink>
            </Box>
          </Grid2>

          <Grid2 item xs={12} md={3}>
            <Box sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}>
              <SocialLink href="#" sx={{ mr: 2 }}>
                Privacy
              </SocialLink>
              <SocialLink href="#" sx={{ mr: 2 }}>
                Terms & Conditions
              </SocialLink>
              <SocialLink href="#" sx={{ mr: 0 }}>
                Design by Atollon
              </SocialLink>
            </Box>
          </Grid2>
        </Grid2>
      </ContentContainer>
    </FooterContainer>
  )
}

export default Footer

