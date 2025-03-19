import { Typography, Stack, Button } from "@mui/material";
import typographyStyles from "../../styles";
import ButtonModal from "../CTA/ButtonModal";

export default function ContactUs({ details }) {
  const buttonStyle = {
    backgroundColor: "#F2FFC2",
    color: "#005244",
    borderRadius: 10,
    p: 2,
    mb: 5,
    textAlign: "left",
  };
  return (
    <Stack spacing={3}>
      <Typography
        sx={{
          ...typographyStyles.sloganText,
          color: "white",
          mb: 3,
          fontSize: 50,
        }}
      >
        {details.landline}
      </Typography>

      <ButtonModal
        buttonText={"Speak with an agent"}
        buttonStyle={buttonStyle}
      />
      {/* <Button
        sx={{
          backgroundColor: "#F2FFC2",
          color: "#005244",
          borderRadius: 10,
          p: 2,
          mb: 5,
          textAlign: "left",
        }}
      >
        Speak with an agent
      </Button> */}
      <Typography sx={{ ...typographyStyles.tagLabel, color: "white" }}>
        Subarashi logo, and other various trademarks, logos, designs,and slogans
        are the registered and unregistered trademarks of Subarashi real estate
        LLC.
      </Typography>
    </Stack>
  );
}
