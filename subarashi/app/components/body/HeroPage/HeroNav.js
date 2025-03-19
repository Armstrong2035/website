import {
  Box,
  Stack,
  Typography,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import typographyStyles from "../../../styles";
import { useState } from "react";

export default function HeroNav() {
  const navItems = [
    { title: "Listings", href: "/listings" },
    { title: "Holiday Homes", href: "/holiday-homes" },
    { title: "About us", href: "/about" },
  ];
  const item = "Area guides";
  const isMobile = useMediaQuery("(max-width:768px)");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // For desktop view
  if (!isMobile) {
    return (
      <Stack
        justifyContent={"space-between"}
        direction={"row"}
        sx={{
          // border: "1px solid red",
          mt: { xs: 2, sm: 3, md: 5 },
          mr: { xs: 2, sm: 5, md: 10 },
          ml: { xs: 2, sm: 5, md: 10 },
        }}
      >
        <Stack
          direction={"row"}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={`${item.href}`}
              style={{ textDecoration: "none" }}
            >
              <Stack direction={"row"}>
                <Typography
                  sx={{
                    ...typographyStyles.subheading,
                    color: "#F2FFC2",
                    fontSize: { xs: "18px", sm: "20px", md: "24px" },
                    lineHeight: { xs: "30px", sm: "35px", md: "40px" },
                  }}
                >
                  {item.title}
                </Typography>
              </Stack>
            </Link>
          ))}
        </Stack>
        <Link href={"/underConstruction"} style={{ textDecoration: "none" }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={{ xs: 1, sm: 1, md: 1 }}
          >
            <Typography
              sx={{
                ...typographyStyles.subheading,
                color: "#F2FFC2",
                fontSize: { xs: "18px", sm: "20px", md: "24px" },
                lineHeight: { xs: "30px", sm: "35px", md: "40px" },
              }}
            >
              {item}
            </Typography>
            <ArrowForwardIcon
              sx={{
                color: "#F2FFC2",
                fontSize: { xs: "18px", sm: "20px", md: "24px" },
                lineHeight: { xs: "30px", sm: "35px", md: "40px" },
              }}
            />
          </Stack>
        </Link>
      </Stack>
    );
  }

  // For mobile view
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        mt: 2,
        mx: 2,
        pb: 1,
      }}
    >
      <IconButton
        id="mobile-menu-button"
        aria-controls={open ? "mobile-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "#F2FFC2" }}
      >
        <MenuIcon />
      </IconButton>

      <Link href={"/none"} style={{ textDecoration: "none" }}>
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <Typography
            sx={{
              ...typographyStyles.subheading,
              color: "#F2FFC2",
              fontSize: "18px",
              lineHeight: "30px",
            }}
          >
            {item}
          </Typography>
          <ArrowForwardIcon sx={{ color: "#F2FFC2" }} />
        </Stack>
      </Link>

      <Menu
        id="mobile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "mobile-menu-button",
        }}
        PaperProps={{
          sx: {
            backgroundColor: "#005244",
            color: "#F2FFC2",
          },
        }}
      >
        {navItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={handleClose}
            component={Link}
            href={`${item}`}
            sx={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                ...typographyStyles.subheading,
                color: "#F2FFC2",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              {item}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  );
}
