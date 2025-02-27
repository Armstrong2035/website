import { Box, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";

export default function CTA({ listing }) {
  return (
    <Box>
      <Link
        href={`/listings/${listing.id}`}
        passHref
        style={{ textDecoration: "none" }}
      >
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
      </Link>
    </Box>
  );
}
