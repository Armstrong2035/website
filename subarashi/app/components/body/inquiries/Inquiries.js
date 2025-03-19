"use client";

import {
  Typography,
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import typographyStyles from "../../../styles";
import ButtonModal from "../../CTA/ButtonModal";

export default function Inquiries() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const buttonStyle = {
    ...typographyStyles.button,
    backgroundColor: "#005244",
    color: "#F2FFC2",
  };
  return (
    <Box
      sx={{
        backgroundColor: "#F2FFC2",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 5,
        pb: 5,
        pt: 5,
      }}
    >
      <Typography
        sx={{
          ...typographyStyles.displayMedium,
          color: "#005244",
          lineHeight: isMobile ? "60px" : "95px",
        }}
      >
        Any Inquiries? Please contact us
      </Typography>

      <ButtonModal
        buttonText={"Send a message"}
        buttonStyle={buttonStyle}
        outlined={false}
      />
      {/* <Button
        variant={"contained"}
        sx={{
          ...typographyStyles.button,
          backgroundColor: "#005244",
          color: "#F2FFC2",
        }}
      >
        Send a message
      </Button> */}
    </Box>
  );
}
