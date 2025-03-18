import { Typography, Stack, useMediaQuery, useTheme } from "@mui/material";
import typographyStyles from "../../styles";

export default function FooterTitle({ title }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack>
      <Typography
        sx={{
          ...typographyStyles.heroLarge,
          color: "#E5E5FF",
          fontSize: isMobile ? "70px" : "130px",
          lineHeight: isMobile ? "70px" : "104px",
        }}
      >
        Subarashi Real Estate
      </Typography>
    </Stack>
  );
}
