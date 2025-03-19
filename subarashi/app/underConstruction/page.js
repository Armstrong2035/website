import { Box, Typography, Icon, Stack } from "@mui/material";
import typographyStyles from "../styles";
import NavBar from "../components/appBar/AppBar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

export default function Page() {
  const bgImage =
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1742368674/Underconstructionpage_BG_2_xqnhqw.png";

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <NavBar color={"#005244"} hoverColor="black" />
      <Box sx={{ ml: 20 }}>
        <Typography
          component="div"
          sx={{
            ...typographyStyles.heroTitle,
            color: "#005244",
            fontWeight: 600,
            fontSize: "98px",
            textAlign: "center", // Optional, if you want center alignment
            lineHeight: 1.2, // Adjust line height as needed
            textAlign: "left",
          }}
        >
          This Page is
          <br />
          Under
          <br />
          Construction
        </Typography>

        <Link href={"/"} passHref style={{ textDecoration: "none" }}>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Typography
              sx={{
                ...typographyStyles.sectionTitle,
                color: "#000000",
                fontSize: "24px",
              }}
            >
              Go to Home Page
            </Typography>
            <Icon
              sx={{ color: "#000000", fontSize: "24px", lineHeight: "30px" }}
            >
              <ArrowForwardIcon />
            </Icon>
          </Stack>
        </Link>
      </Box>
    </Box>
  );
}
