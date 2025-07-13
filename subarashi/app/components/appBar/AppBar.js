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
  ListItemIcon,
  Fade,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessIcon from "@mui/icons-material/Business";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupsIcon from "@mui/icons-material/Groups";
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
    { title: "Sales", route: "/Listings/sales", icon: <ApartmentIcon /> },
    { title: "Lease", route: "/Listings/lease", icon: <ApartmentIcon /> },
    { title: "Offplan Projects", route: "/offplan", icon: <BusinessIcon /> },
    {
      title: "Holiday Homes",
      route: "/holiday-homes",
      icon: <HolidayVillageIcon />,
    },
    { title: "Resources", route: "/resources", icon: <ExploreIcon /> },
    { title: "Team", route: "/about", icon: <GroupsIcon /> },
  ];

  const menuStyles = {
    "& .MuiPaper-root": {
      backgroundColor: "#005244",
      width: 280,
      borderRadius: "16px",
      marginTop: "8px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
      border: "1px solid rgba(242, 255, 194, 0.1)",
    },
    "& .MuiList-root": {
      padding: "8px",
    },
  };

  const menuItemStyles = {
    borderRadius: "8px",
    margin: "4px 0",
    padding: "12px 16px",
    gap: 2,
    transition: "all 0.2s ease",
    color: "#F2FFC2",
    "&:hover": {
      backgroundColor: "rgba(242, 255, 194, 0.1)",
      transform: "translateX(4px)",
    },
    "& .MuiListItemIcon-root": {
      minWidth: 36,
      color: "#F2FFC2",
    },
  };

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
        ...(isMobile && {
          backgroundColor: "#005244",
        }),
        ...(!isMobile && {
          "&:hover": {
            backgroundColor: "#005244",
            pt: 1,
            pb: 1,
          },
        }),
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
                justifyContent: "center",
                borderRadius: "50px",
              }}
            >
              <Image
                src={hover || isMobile ? logo : logoGreen}
                alt="Subarashi Real Estate"
                width={140}
                height={50}
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
                onClick={handleOpenNavMenu}
                sx={{
                  color: "#F2FFC2",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "rotate(180deg)",
                  },
                }}
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
                sx={menuStyles}
                TransitionComponent={Fade}
              >
                {navItems.map((item, index) => (
                  <Link
                    href={item.route}
                    passHref
                    style={{ textDecoration: "none" }}
                    key={index}
                  >
                    <MenuItem onClick={handleCloseNavMenu} sx={menuItemStyles}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <Typography
                        sx={{
                          ...typographyStyles.bodyMedium,
                          fontSize: "16px",
                          fontWeight: 500,
                        }}
                      >
                        {item.title}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
                <MenuItem sx={{ ...menuItemStyles, mt: 1 }}>
                  <ButtonModal
                    buttonText="Contact Us"
                    style="text"
                    buttonStyle={{
                      ...buttonStyle,
                      ml: 0,
                      width: "100%",
                      py: 1,
                      backgroundColor: "rgba(242, 255, 194, 0.1)",
                      "&:hover": {
                        backgroundColor: "rgba(242, 255, 194, 0.2)",
                      },
                    }}
                    buttonColor={buttonColor}
                    hover={hover}
                  />
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            /* Desktop menu */
            <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
              {navItems.map((item, index) => (
                <Link
                  href={item.route}
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
                buttonText="Contact Us"
                style="text"
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
