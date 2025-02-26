import { Typography, Box } from "@mui/material";

export default function Price({ listing }) {
  return (
    <Box>
      <Typography variant="p" sx={{ color: "black" }}>
        {listing.price.currency} {listing.price.amount.toLocaleString()}
        {listing.price.maxAmount &&
          ` - ${
            listing.price.currency
          } ${listing.price.maxAmount.toLocaleString()}`}
      </Typography>
    </Box>
  );
}
