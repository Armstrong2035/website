import { Typography, Box } from "@mui/material";
import typographyStyles from "../../../../../../styles";

export default function Price({ listing }) {
  return (
    <Box>
      <Typography sx={{ ...typographyStyles.priceTag, color: "#005244" }}>
        {listing.price.currency} {listing.price.amount.toLocaleString()}
        {listing.price.maxAmount &&
          ` - ${
            listing.price.currency
          } ${listing.price.maxAmount.toLocaleString()}`}
      </Typography>
    </Box>
  );
}
