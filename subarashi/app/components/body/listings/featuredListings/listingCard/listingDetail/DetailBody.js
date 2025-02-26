import {
  Typography,
  Grid,
  Chip,
  IconButton,
  Box,
  Grid2,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CTA from "./CTA";
import Price from "./Price";
import Specs from "./Specs";

export default function DetailBody({ listing }) {
  return (
    <Stack spacing={7}>
      <Specs listing={listing} />
      <Stack
        direction={"row"}
        justifySelf={"flex-end"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Price listing={listing} />

        <CTA />
      </Stack>
    </Stack>
  );
}
