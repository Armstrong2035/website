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
  hoverColor = "#FFFFFF",
  hoverBackground,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorElNav, setAnchorElNav] = useState(null);

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
    { title: "Sales", route: "/Listings" },
    { title: "Lease", route: "/Listings" },
    { title: "Holiday Homes", route: "/holiday-homes" },
    { title: "Resources", route: "/under-construction" },
    { title: "Team", route: "/about" },
  ];

  return (
    <Box
      component="header"
      sx={{
        position: "absolute",
        width: "100%",
        zIndex: 1000,
        background: "transparent",
        top: 0,
        "&:hover": {
          backgroundColor: hoverBackground,
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
                src={hoverColor === "#FFFFFF" ? logo : logoGreen}
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
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    href="/about"
                    passHref
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography textAlign="center">About us</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    href="/Listings"
                    passHref
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography textAlign="center">Listings</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    href="/holiday-homes"
                    passHref
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography textAlign="center">Holiday Homes</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    href="/underConstruction"
                    passHref
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography textAlign="center">Resources</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} style={{}}>
                  <Link
                    href="/contact"
                    passHref
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography textAlign="center">Contact Us</Typography>
                  </Link>
                </MenuItem>
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
                      color: color,
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
              />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
