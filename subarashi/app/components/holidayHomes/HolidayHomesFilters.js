"use client";

import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputAdornment,
  Paper,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import typographyStyles from "../../styles";

export default function HolidayHomesFilter() {
  // State for filter controls
  const [location, setLocation] = useState("Dubai Marina");
  const [guests, setGuests] = useState(2);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [propertyType, setPropertyType] = useState("Any");

  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        borderRadius: 2,
        mt: 4,
        backgroundColor: "#FFFFFF",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          ...typographyStyles.cardHeader,
          fontWeight: 500,
          mb: 3,
          color: "#005244",
        }}
      >
        Find Your Perfect Holiday Home
      </Typography>

      <Grid container spacing={3}>
        {/* Location */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="body2"
            sx={{ ...typographyStyles.bodyMedium, mb: 1, ml: 1 }}
          >
            Location
          </Typography>
          <TextField
            fullWidth
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where do you want to stay?"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon sx={{ color: "#005244" }} />
                </InputAdornment>
              ),
            }}
            size="small"
          />
        </Grid>

        {/* Check-in */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            variant="body2"
            sx={{ ...typographyStyles.bodyMedium, mb: 1, ml: 1 }}
          >
            Check In
          </Typography>
          <TextField
            fullWidth
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarMonthIcon sx={{ color: "#005244" }} />
                </InputAdornment>
              ),
            }}
            size="small"
          />
        </Grid>

        {/* Check-out */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography
            variant="body2"
            sx={{ ...typographyStyles.bodyMedium, mb: 1, ml: 1 }}
          >
            Check Out
          </Typography>
          <TextField
            fullWidth
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarMonthIcon sx={{ color: "#005244" }} />
                </InputAdornment>
              ),
            }}
            size="small"
          />
        </Grid>

        {/* Guests */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography
            variant="body2"
            sx={{ ...typographyStyles.bodyMedium, mb: 1, ml: 1 }}
          >
            Guests
          </Typography>
          <TextField
            fullWidth
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PeopleAltIcon sx={{ color: "#005244" }} />
                </InputAdornment>
              ),
              inputProps: { min: 1, max: 20 },
            }}
            size="small"
          />
        </Grid>

        {/* Search Button */}
        <Grid
          item
          size={{ xs: 12, sm: 6, md: 2 }}
          sx={{ display: "flex", alignItems: "flex-end" }}
        >
          <Button
            variant="contained"
            fullWidth
            sx={{
              py: 1,
              backgroundColor: "#005244",
              color: "#F2FFC2",
              "&:hover": {
                backgroundColor: "#003d33",
              },
              height: 40,
            }}
            startIcon={<SearchIcon />}
          >
            SEARCH
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
