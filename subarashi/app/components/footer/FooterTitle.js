import { Typography, Stack } from "@mui/material";
import typographyStyles from "../../styles";

export default function FooterTitle({ title }) {
  return (
    <Stack>
      <Typography sx={{ ...typographyStyles.heroLarge, color: "#E5E5FF" }}>
        Subarashi Real Estate
      </Typography>
    </Stack>
  );
}
