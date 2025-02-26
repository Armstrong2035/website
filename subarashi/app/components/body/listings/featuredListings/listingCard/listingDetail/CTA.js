import { Box, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function CTA() {
  return (
    <Box>
      <Button
        variant={"outlined"}
        endIcon={<ArrowOutwardIcon />}
        sx={{
          borderColor: "#005244",
          color: "#005244",
          borderRadius: "10px",
        }}
      >
        Full details
      </Button>
    </Box>
  );
}
