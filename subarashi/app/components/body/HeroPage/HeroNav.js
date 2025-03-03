import { Box, Stack, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import typographyStyles from "../../../styles";
typographyStyles;
export default function HeroNav({ style1, style2 }) {
  const navItems = ["Rentals", "Sales", "Holiday Homes", "Property Management"];
  const item = "Resources";

  return (
    <Stack
      justifyContent={"space-between"}
      direction={"row"}
      sx={{ mt: 5, mr: 10, ml: 10 }}
    >
      <Stack direction={"row"} spacing={4}>
        {navItems.map((item, index) => (
          <Link key={index} href={`${item}`} style={{ textDecoration: "none" }}>
            <Stack direction={"row"}>
              <Typography
                sx={{ ...typographyStyles.subheading, color: "#F2FFC2" }}
              >
                {item}
              </Typography>
              {/* <ArrowOutwardIcon sx={{ color: "#F2FFC2" }} /> */}
            </Stack>
          </Link>
        ))}
      </Stack>
      <Link href={"/none"} style={{ textDecoration: "none" }}>
        <Stack direction={"row"} sx={{}} alignItems={"center"} spacing={3}>
          <Typography sx={{ ...typographyStyles.subheading, color: "#F2FFC2" }}>
            {item}
          </Typography>
          <ArrowForwardIcon sx={{ color: "#F2FFC2" }} />
        </Stack>
      </Link>
    </Stack>
  );
}
