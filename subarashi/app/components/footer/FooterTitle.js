import { Typography, Stack } from "@mui/material";
import typographyStyles from "../../styles";
import { useIsMobile } from "../../providers/MobileProvider";

export default function FooterTitle({ title }) {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useIsMobile();
  return (
    <Stack>
      <Typography
        sx={{
          ...typographyStyles.heroLarge,
          color: "#E5E5FF",
          fontSize: isMobile ? "40px" : "70px",
          lineHeight: isMobile ? "70px" : "104px",
        }}
      >
        Subarashi Real Estate
      </Typography>
    </Stack>
  );
}
