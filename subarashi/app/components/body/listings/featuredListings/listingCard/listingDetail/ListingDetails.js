import { Typography, Grid, Box, useMediaQuery, useTheme } from "@mui/material";
import DetailBody from "./DetailBody";
import typographyStyles from "../../../../../../styles";

export default function ListingDetails({ listing }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      sx={{
        flexGrow: 1,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          backgroundColor: "#005244",
          p: { xs: 2, sm: 2.5, md: 3 },
          order: { xs: 2, sm: 1 }, // On mobile, this appears second
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "10px", sm: "15px", md: "20px" },
            height: "100%",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              ...typographyStyles.sectionTitle,
              color: "#FFFFFF",
              fontSize: { xs: "18px", sm: "22px", md: "28px" },
              lineHeight: { xs: "24px", sm: "28px", md: "30px" },
            }}
          >
            {listing.title}
          </Typography>

          <Typography
            sx={{
              ...typographyStyles.bodyLarge,
              color: "#F2FFC2",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              lineHeight: { xs: "20px", sm: "24px", md: "30px" },
            }}
          >
            {`${listing.location.area}, ${listing.location.city}`}
          </Typography>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          backgroundColor: "#FFFFFF",
          p: { xs: 2, sm: 2, md: 2 },
          order: { xs: 1, sm: 2 }, // On mobile, this appears first
        }}
      >
        <DetailBody listing={listing} />
      </Grid>
    </Grid>
  );
}
