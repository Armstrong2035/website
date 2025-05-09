"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logos/logo.png";
import logoGreen from "../../../public/logos/logoGreen.png";
import ButtonModal from "../CTA/ButtonModal";
import typographyStyles from "../../styles";

export default function NavBar({
  color = "#F2FFC2",
  hoverColor = "#F2FFC2",
  hoverBackground,
  buttonColor,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorElNav, setAnchorElNav] = useState(null);

  const [hover, setHover] = useState(false);

  const buttonStyle = {
    ...typographyStyles.bodyMedium,
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "107.7%",
    ml: 3,
    color: "#F2FFC2",
    borderColor: "#F2FFC2",
    borderRadius: "20px",
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navItems = [
    // { title: "Sales", route: "/Listings/sales" },
    { title: "Lease", route: "/Listings/lease" },
    { title: "Holiday Homes", route: "/holiday-homes" },
    { title: "Area Guides", route: "/areaGuides" },
    { title: "Team", route: "/about" },
    { title: "Offplan Projects", route: "/offplan" },
  ];

  return (
    <Box
      component="header"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        position: "absolute",
        width: "100%",
        zIndex: 1000,
        background: "transparent",
        top: 0,
        pt: 1,
        pb: 1,

        "&:hover": {
          backgroundColor: "#005244",
          pt: 1,
          pb: 1,
        },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Link href="/" passHref>
            <Box
              sx={{
                position: "relative",
                width: 150,
                height: 60,
                display: "flex",
                alignItems: "center",
                borderRadius: "50px",
              }}
            >
              <Image
                src={hover ? logo : logoGreen}
                alt="Subarashi Real Estate"
                fill
                style={{
                  objectFit: "contain",
                }}
                priority
              />
            </Box>
          </Link>

          {/* Mobile menu */}
          {isMobile ? (
            <Box sx={{ display: "flex" }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {navItems.map((item, index) => (
                  <Link
                    href={`${item.route}`}
                    passHref
                    style={{ textDecoration: "none" }}
                    key={index}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{item.title}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
          ) : (
            /* Desktop menu */
            <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
              {navItems.map((item, index) => (
                <Link
                  href={`${item.route}`}
                  passHref
                  style={{ textDecoration: "none" }}
                  key={index}
                >
                  <Typography
                    sx={{
                      ...typographyStyles.bodyMedium,
                      fontSize: "16px",
                      color: hover ? hoverColor : color,
                      fontWeight: 500,
                      lineHeight: "107.7%",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Link>
              ))}

              <ButtonModal
                buttonText={"Contact Us"}
                style={"text"}
                buttonStyle={buttonStyle}
                buttonColor={buttonColor}
                hover={hover}
              />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
