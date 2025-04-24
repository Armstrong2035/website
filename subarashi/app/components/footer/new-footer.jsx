"use client";

import { useState } from "react";
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
  Icon,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TrendingFlatOutlined, VillaSharp } from "@mui/icons-material";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const FooterContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  paddingTop: "350px",
  paddingBottom: theme.spacing(4),
  width: "100%",
  fontFamily: inter.style.fontFamily,
  "*": { fontFamily: inter.style.fontFamily },
}));

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
    height: "100%",
    background:
      "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 45%)",
  },
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  fontFamily: inter.style.fontFamily,
}));

const ProjectLine = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(1),
  fontFamily: inter.style.fontFamily,
}));

const LineIndicator = styled(Box)(({ theme }) => ({
  width: "20px",
  height: "1px",
  backgroundColor: theme.palette.text.primary,
  marginRight: theme.spacing(2),
}));

export const EmailInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.divider,
      borderRadius: 0,
      border: "0px solid",
      borderBottom: "2px solid",
      borderBottomColor: theme.palette.divider,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.text.primary,
    },
    "&.Mui-focused fieldset": {
      border: "none",
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },
  width: "100%",
}));

const SocialLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: "none",
  textTransform: "uppercase",
  fontSize: "0.75rem",
  fontFamily: inter.style.fontFamily,
  letterSpacing: "1px",
  marginRight: theme.spacing(3),
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Subscribing email:", email);
    setEmail("");
  };

  const offPlanProperties = [
    {
      name: "Sobha One Element",
      url: "https://sobhaoneelement.subarashirealestate.com",
    },
    {
      name: "Damac Riverside",
      url: "https://damacriverside.subarashirealestate.com",
    },
    {
      name: "Palm Jebel Ali Villas",
      url: "https://palmjebelali.subarashirealestate.com/",
    },
  ];

  return (
    <FooterContainer data-aos="fade-up">
      <BackgroundImage />
      <ContentContainer maxWidth="lg">
        <Grid2 container spacing={4}>
          <Grid2 items size={{ xs: 12, md: 4 }}>
            <Grid2
              container
              spacing={2}
              alignItems="center"
              justifyContent="start"
              sx={{ mb: 4 }}
            >
              <Grid2
                item
                xs={12}
                md={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box sx={{ width: "80px", height: "80px", mb: 2 }}>
                  <img
                    src="/images/green-footer-logo.svg"
                    alt="Logo"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
              </Grid2>
              <Grid2 item xs={12} md={8}>
                {offPlanProperties.map((property, index) => (
                  <Link
                    href={property.url}
                    key={index}
                    passHref
                    style={{ textDecoration: "none" }}
                  >
                    <ProjectLine>
                      <LineIndicator />
                      <Typography sx={{ color: "#005244" }}>
                        {property.name}
                      </Typography>
                    </ProjectLine>
                  </Link>
                ))}
                {/* <ProjectLine>
                  <LineIndicator />
                  <Typography variant="body2">Sobha One Element</Typography>
                </ProjectLine>
                <ProjectLine>
                  <LineIndicator />
                  <Typography variant="body2">Off-Plan Project One</Typography>
                </ProjectLine>
                <ProjectLine>
                  <LineIndicator />
                  <Typography variant="body2">Off-Plan Project One</Typography>
                </ProjectLine> */}
              </Grid2>
            </Grid2>
          </Grid2>

          <Grid2 item size={{ xs: 12, md: 4 }} />

          <Grid2 item size={{ xs: 12, md: 4 }}>
            <Typography variant="body1" sx={{ mb: 2, fontWeight: 400 }}>
              Never Miss A Piece Of The Action. Subscribe For New Listings,
              Sales Results, Podcast Releases, And Media Exclusives From
              Subarashi
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
                      <Icon edge="end" type="submit">
                        <TrendingFlatOutlined />
                      </Icon>
                    </InputAdornment>
                  ),
                }}
              />
            </form>
          </Grid2>
        </Grid2>

        <Divider sx={{ my: 6 }} />

        <Grid2
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid2 item xs={12} md={3}>
            <Typography variant="body2" color="textSecondary">
              SUBARASHI REAL ESTATE BROKERAGE L.L.C
            </Typography>
          </Grid2>

          <Grid2 item xs={12} md={6}>
            <Box
              sx={{ display: "flex", justifyContent: "end", flexWrap: "wrap" }}
            >
              {/* <SocialLink href="#" target="_blank" rel="noopener">
                Twitter
              </SocialLink> */}
              <SocialLink
                href="https://www.facebook.com/subarashirealestate"
                target="_blank"
                rel="noopener"
              >
                Facebook
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/company/subarashirealestate/"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/subarashirealestate"
                target="_blank"
                rel="noopener"
              >
                Instagram
              </SocialLink>
            </Box>
          </Grid2>

          <Grid2 item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "flex-end" },
              }}
            >
              <SocialLink href="#" sx={{ mr: 2 }}>
                Privacy
              </SocialLink>
              <SocialLink href="#" sx={{ mr: 2 }}>
                Terms & Conditions
              </SocialLink>
            </Box>
          </Grid2>
        </Grid2>
      </ContentContainer>
    </FooterContainer>
  );
};

export default Footer;
