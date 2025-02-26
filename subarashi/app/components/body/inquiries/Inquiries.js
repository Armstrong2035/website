import { Typography, Box, Button } from "@mui/material";

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
      <Typography variant={"h4"}>Any Inquiries? Please contact us</Typography>

      <Button variant={"contained"} sx={{ backgroundColor: "#005244" }}>
        Send a message
      </Button>
    </Box>
  );
}
