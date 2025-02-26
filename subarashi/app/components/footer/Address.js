import { Stack, Typography } from "@mui/material";

export default function Address({ address }) {
  console.log(address);
  return (
    <Stack sx={{ mt: 5 }}>
      <Typography>{address.line1}</Typography>
      <Typography>{address.line2}</Typography>
      <Typography>{address.line3}</Typography>
    </Stack>
  );
}
