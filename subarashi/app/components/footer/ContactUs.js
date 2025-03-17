import { Typography, Stack, Button } from "@mui/material";
import typographyStyles from "../../styles";

export default function ContactUs({ details }) {
  return (
    <Stack>
      <Typography
        sx={{ ...typographyStyles.sloganText, color: "white", mb: 3 }}
      >
        {details.landline}
      </Typography>
      <Button
        sx={{
          backgroundColor: "#F2FFC2",
          color: "#005244",
          borderRadius: 10,
          p: 2,
          mb: 5,
        }}
      >
        Speak with an agent
      </Button>
      <Typography sx={{ ...typographyStyles.tagLabel, color: "white" }}>
        Subarashi logo, and other various trademarks, logos, designs,and slogans
        are the registered and unregistered trademarks of Subarashi real estate
        LLC.
      </Typography>
    </Stack>
  );
}
