import { Typography, Box, Button } from "@mui/material";
import typographyStyles from "../../../styles";
import ButtonModal from "../../CTA/ButtonModal";

export default function Inquiries() {
  const buttonStyle = {
    ...typographyStyles.button,
    backgroundColor: "#005244",
    color: "#F2FFC2",
  };
  return (
    <Box
      sx={{
        backgroundColor: "#F2FFC2",
        height: "40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography sx={{ ...typographyStyles.displayMedium, color: "#005244" }}>
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
