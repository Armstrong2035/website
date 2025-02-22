import { Box, Stack, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
          <Stack key={index} direction={"row"}>
            <Typography sx={style1}>{item}</Typography>
            <ArrowOutwardIcon sx={{ color: "#F2FFC2" }} />
          </Stack>
        ))}
      </Stack>
      <Stack direction={"row"}>
        <Typography sx={style2}>{item}</Typography>
        <ArrowForwardIcon sx={{ color: "#F2FFC2" }} />
      </Stack>
    </Stack>
  );
}
