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
    <Stack spacing={4}>
      <Specs listing={listing} />
      <Stack alignItems={"center"} alignSelf={"flex-start"} spacing={3}>
        <Price listing={listing} />
        <CTA listing={listing} />
      </Stack>
    </Stack>
  );
}
