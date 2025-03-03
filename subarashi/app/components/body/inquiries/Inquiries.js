import { Typography, Box, Button } from "@mui/material";
import typographyStyles from "../../../styles";

export default function Inquiries() {
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

      <Button
        variant={"contained"}
        sx={{
          ...typographyStyles.button,
          backgroundColor: "#005244",
          color: "#F2FFC2",
        }}
      >
        Send a message
      </Button>
    </Box>
  );
}
