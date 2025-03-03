import { Stack, Typography } from "@mui/material";
import typographyStyles from "../../styles";

export default function Address({ address }) {
  // console.log(address);
  return (
    <Stack sx={{ mt: 5 }}>
      <Typography sx={{ ...typographyStyles.infoText, color: "#E5E5FF" }}>
        {address.line1}
      </Typography>
      <Typography sx={{ ...typographyStyles.infoText, color: "#E5E5FF" }}>
        {address.line2}
      </Typography>
      <Typography sx={{ ...typographyStyles.infoText, color: "#E5E5FF" }}>
        {address.line3}
      </Typography>
    </Stack>
  );
}
