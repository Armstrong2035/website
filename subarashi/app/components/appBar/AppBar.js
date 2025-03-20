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

export default function NavBar({ color = "#F2FFC2", hoverColor = "#FFFFFF" }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorElNav, setAnchorElNav] = useState(null);

  const buttonStyle = {
    ml: 3,
    color: "#005244",
    borderColor: "#F2FFC2",
    borderRadius: "20px",
    backgroundColor: "#F2FFC2",
    "&:hover": {
      borderColor: "#FFFFFF",
      color: "#005244",
      backgroundColor: "#FFFFFF",
    },
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      component="header"
      sx={{
        position: "absolute",
        width: "100%",
        zIndex: 1000,
        background: "transparent",
        top: 0,
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
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link
                href="/holiday-homes"
                passHref
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    mx: 2,
                    color: color,
                    fontWeight: 500,
                    "&:hover": {
                      color: hoverColor,
                    },
                  }}
                >
                  Holiday Homes
                </Typography>
              </Link>

              <Link
                href="/underConstruction"
                passHref
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    mx: 2,
                    color: color,
                    fontWeight: 500,
                    "&:hover": {
                      color: hoverColor,
                    },
                  }}
                >
                  Resources
                </Typography>
              </Link>

              {/* <Button
                  variant="outlined"
                  sx={{
                    ml: 3,
                    color: "#F2FFC2",
                    borderColor: "#F2FFC2",
                    borderRadius: "20px",
                    "&:hover": {
                      borderColor: "#FFFFFF",
                      color: "#FFFFFF",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  Contact Us
                </Button> */}
              <ButtonModal
                buttonText={"Contact Us"}
                outlined={true}
                buttonStyle={buttonStyle}
              />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
