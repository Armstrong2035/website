import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Paper,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ListingContactForm({ listing }) {
  return (
    <Paper
      elevation={2}
      sx={{
        mb: 4,
        p: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        CONTACT AGENT
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Avatar
          sx={{
            width: 64,
            height: 64,
            mr: 2,
            bgcolor: "#005244",
          }}
        >
          RK
        </Avatar>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Kamaal Shah
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Investment Advisor
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <EmailIcon fontSize="small" color="action" />
          <Typography variant="body2">
            Email: kamaal@subarashirealestate.com
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <PhoneIcon fontSize="small" color="action" />
          <Typography variant="body2">Phone: 045725375</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LocationOnIcon fontSize="small" color="action" />
          <Typography variant="body2">Location: Dubai, UAE</Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", mt: 3 }}>
        INQUIRY
      </Typography>

      <Box component="form" sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Your Name*"
          variant="outlined"
          margin="normal"
          placeholder="Your full name"
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          fullWidth
          label="Your Email*"
          variant="outlined"
          margin="normal"
          placeholder="Enter mail address"
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          fullWidth
          label="Your Phone*"
          variant="outlined"
          margin="normal"
          placeholder="Your phone number"
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          fullWidth
          label="Message*"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          placeholder={`Hello, I am interested in [${listing.title}]`}
          InputLabelProps={{ shrink: true }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            py: 1.5,
            backgroundColor: "#005244",
            "&:hover": {
              backgroundColor: "#003d33",
            },
          }}
        >
          Schedule Tour
        </Button>
      </Box>
    </Paper>
  );
}
