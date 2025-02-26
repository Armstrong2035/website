import { Typography, Stack } from "@mui/material";

export default function FooterTitle({ title }) {
  return (
    <Stack direction={"row"} justifyContent={"space-evenly"} sx={{}}>
      {title.map((item) => (
        <Typography variant={"h3"}>{item}</Typography>
      ))}
    </Stack>
  );
}
