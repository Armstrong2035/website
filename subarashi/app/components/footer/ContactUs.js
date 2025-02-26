import { Typography, Stack, Button } from "@mui/material";

export default function ContactUs({ details }) {
  return (
    <Stack spacing={3}>
      <Typography>{details.landline}</Typography>
      <Button
        sx={{
          backgroundColor: "#F2FFC2",
          color: "#005244",
          borderRadius: 10,
          p: 2,
        }}
      >
        Speak with an agent
      </Button>
      <Typography>Or call {details.mobile}</Typography>
      <Typography>Or Send an email to {details.email}</Typography>
    </Stack>
  );
}
