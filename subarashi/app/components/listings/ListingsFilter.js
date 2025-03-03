import React, { useState } from "react";
import {
  Box,
  Select,
  MenuItem,
  TextField,
  Button,
  InputLabel,
  FormControl,
  Stack,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TuneIcon from "@mui/icons-material/Tune";

export default function ListingsFilter() {
  const [propertyType, setPropertyType] = useState("Buy Apartments");
  const [location, setLocation] = useState("Dhanmondi, Dhaka");
  const [priceRange, setPriceRange] = useState("$10,000 - $200,000");
  const [bedroom, setBedroom] = useState("Any");
  const [bath, setBath] = useState("2+");

  return (
    <Box
      sx={{
        backgroundColor: "#005244",
        width: "100%",
        py: 2,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack
        direction="row"
        spacing={0}
        sx={{
          width: "100%",
          maxWidth: "1400px",
          alignItems: "center",
        }}
      >
        {/* I'm looking to... */}
        <Box
          sx={{
            flex: 1,
            p: 2,
            borderRight: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "#aaa", display: "block", mb: 0.5 }}
          >
            I'm looking to...
          </Typography>
          <FormControl fullWidth variant="standard" sx={{ border: "none" }}>
            <Select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              sx={{
                color: "white",
                "& .MuiSelect-select": {
                  border: "none",
                  p: 0,
                },
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
                "&::before, &::after": {
                  display: "none",
                },
              }}
              IconComponent={KeyboardArrowDownIcon}
              disableUnderline
            >
              <MenuItem value="Buy Apartments">Buy Apartments</MenuItem>
              <MenuItem value="Rent Apartments">Rent Apartments</MenuItem>
              <MenuItem value="Buy Villas">Buy Villas</MenuItem>
              <MenuItem value="Rent Villas">Rent Villas</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Location */}
        <Box
          sx={{
            flex: 1.5,
            p: 2,
            borderRight: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "#aaa", display: "block", mb: 0.5 }}
          >
            Location
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              variant="standard"
              fullWidth
              sx={{
                input: { color: "white", p: 0 },
                "&::before, &::after": {
                  display: "none",
                },
              }}
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" sx={{ color: "white" }}>
                      <LocationOnIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        {/* Price Range */}
        <Box
          sx={{
            flex: 1,
            p: 2,
            borderRight: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "#aaa", display: "block", mb: 0.5 }}
          >
            Price Range
          </Typography>
          <FormControl fullWidth variant="standard">
            <Select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              sx={{
                color: "white",
                "& .MuiSelect-select": {
                  border: "none",
                  p: 0,
                },
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
                "&::before, &::after": {
                  display: "none",
                },
              }}
              IconComponent={KeyboardArrowDownIcon}
              disableUnderline
            >
              <MenuItem value="$10,000 - $200,000">$10,000 - $200,000</MenuItem>
              <MenuItem value="$200,000 - $500,000">
                $200,000 - $500,000
              </MenuItem>
              <MenuItem value="$500,000 - $1,000,000">
                $500,000 - $1,000,000
              </MenuItem>
              <MenuItem value="$1,000,000+">$1,000,000+</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Bedroom */}
        <Box
          sx={{
            flex: 1,
            p: 2,
            borderRight: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "#aaa", display: "block", mb: 0.5 }}
          >
            Bedroom
          </Typography>
          <FormControl fullWidth variant="standard">
            <Select
              value={bedroom}
              onChange={(e) => setBedroom(e.target.value)}
              sx={{
                color: "white",
                "& .MuiSelect-select": {
                  border: "none",
                  p: 0,
                },
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
                "&::before, &::after": {
                  display: "none",
                },
              }}
              IconComponent={KeyboardArrowDownIcon}
              disableUnderline
            >
              <MenuItem value="Any">Any</MenuItem>
              <MenuItem value="1+">1+</MenuItem>
              <MenuItem value="2+">2+</MenuItem>
              <MenuItem value="3+">3+</MenuItem>
              <MenuItem value="4+">4+</MenuItem>
              <MenuItem value="5+">5+</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Bath */}
        <Box
          sx={{
            flex: 1,
            p: 2,
            borderRight: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "#aaa", display: "block", mb: 0.5 }}
          >
            Bath
          </Typography>
          <FormControl fullWidth variant="standard">
            <Select
              value={bath}
              onChange={(e) => setBath(e.target.value)}
              sx={{
                color: "white",
                "& .MuiSelect-select": {
                  border: "none",
                  p: 0,
                },
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
                "&::before, &::after": {
                  display: "none",
                },
              }}
              IconComponent={KeyboardArrowDownIcon}
              disableUnderline
            >
              <MenuItem value="Any">Any</MenuItem>
              <MenuItem value="1+">1+</MenuItem>
              <MenuItem value="2+">2+</MenuItem>
              <MenuItem value="3+">3+</MenuItem>
              <MenuItem value="4+">4+</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Advanced Search Button */}
        <Box
          sx={{
            flex: 1,
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              border: "1px solid white",
              color: "white",
              borderRadius: 0,
              py: 1.5,
              px: 3,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid white",
              },
            }}
            endIcon={<TuneIcon />}
          >
            ADVANCE SEARCH
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
