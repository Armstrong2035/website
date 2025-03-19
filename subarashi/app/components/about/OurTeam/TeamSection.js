import { TeamMemberCard } from "./TeamMemberCard";
import { Box, Typography, Grid } from "@mui/material";
import typographyStyles from "../../../styles";

export default function TeamSection({ ourTeam }) {
  return (
    <Box sx={{ p: { xs: 2, sm: 4, md: 6 } }}>
      <Typography
        sx={{
          ...typographyStyles.subheading2,
          color: "#005244",
          textAlign: "center",
          mb: { xs: 4, md: 6 },
        }}
      >
        Our Team
      </Typography>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {ourTeam.map((member, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <TeamMemberCard member={member} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
