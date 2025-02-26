import { Description } from "@mui/icons-material";
import { Button, Typography, Box, Stack, Grid2 } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Title() {
  const titleItems = {
    title: "Featured Listings",
    description:
      "Discover stunning home designed for comfort and luxury. With modern finishes, spacious interiors, and  prime locations. Don’t miss your chance to own your dream home—schedule a viewing today!",
    cta: "View all listings",
  };

  return (
    <Grid2
      container
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ pr: 10, pl: 10, mt: 7, mb: 7 }}
    >
      <Grid2 item size={{ lg: 6 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          {titleItems.title}
        </Typography>
        <Typography variant="p">{titleItems.description}</Typography>
      </Grid2>

      <Grid2
        item
        size={{ lg: 6 }}
        justifySelf={"flex-end"}
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant={"text"}
          endIcon={<ArrowForwardIcon />}
          sx={{ color: "#005244" }}
        >
          View all listings
        </Button>
      </Grid2>
    </Grid2>
  );
}
