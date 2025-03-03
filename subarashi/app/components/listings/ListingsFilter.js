import React from "react";
import {
  Box,
  Typography,
  Paper,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Slider,
  TextField,
  Button,
  Divider,
  Checkbox,
  FormGroup,
  InputAdornment,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";

export default function ListingsFilter() {
  // Filter states
  const [propertyType, setPropertyType] = React.useState("all");
  const [priceRange, setPriceRange] = React.useState([0, 1000000]);
  const [bedrooms, setBedrooms] = React.useState([0, 5]);
  const [bathrooms, setBathrooms] = React.useState([0, 5]);
  const [areaRange, setAreaRange] = React.useState([0, 5000]);
  const [purpose, setPurpose] = React.useState("all");
  const [features, setFeatures] = React.useState({
    parking: false,
    pool: false,
    balcony: false,
    gym: false,
    furnished: false,
    pets: false,
  });

  // Handle checkbox changes
  const handleFeatureChange = (event) => {
    setFeatures({
      ...features,
      [event.target.name]: event.target.checked,
    });
  };

  // Handle price range changes
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  // Format currency
  const formatCurrency = (value) => {
    return `AED ${value.toLocaleString()}`;
  };

  // Handle reset filters
  const handleReset = () => {
    setPropertyType("all");
    setPriceRange([0, 1000000]);
    setBedrooms([0, 5]);
    setBathrooms([0, 5]);
    setAreaRange([0, 5000]);
    setPurpose("all");
    setFeatures({
      parking: false,
      pool: false,
      balcony: false,
      gym: false,
      furnished: false,
      pets: false,
    });
  };

  return (
    <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        Filter Properties
      </Typography>

      {/* Search by location */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom>
          Search by Location
        </Typography>
        <TextField
          fullWidth
          placeholder="Search for area, community, city..."
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Property Type */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom>
          Property Type
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <FormControlLabel
              value="all"
              control={<Radio size="small" />}
              label="All Types"
            />
            <FormControlLabel
              value="apartment"
              control={<Radio size="small" />}
              label="Apartment"
            />
            <FormControlLabel
              value="villa"
              control={<Radio size="small" />}
              label="Villa"
            />
            <FormControlLabel
              value="townhouse"
              control={<Radio size="small" />}
              label="Townhouse"
            />
            <FormControlLabel
              value="penthouse"
              control={<Radio size="small" />}
              label="Penthouse"
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Price Range */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom>
          Price Range
        </Typography>
        <Box sx={{ px: 1 }}>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={1000000}
            step={10000}
            valueLabelFormat={formatCurrency}
            sx={{
              color: "#005244",
              "& .MuiSlider-thumb": {
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: "0px 0px 0px 8px rgba(0, 82, 68, 0.16)",
                },
              },
            }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <Typography variant="caption">
            {formatCurrency(priceRange[0])}
          </Typography>
          <Typography variant="caption">
            {formatCurrency(priceRange[1])}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Bedrooms */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom>
          Bedrooms
        </Typography>
        <FormControl component="fieldset" fullWidth>
          <RadioGroup
            row
            value={bedrooms[1].toString()}
            onChange={(e) => setBedrooms([0, parseInt(e.target.value)])}
          >
            <FormControlLabel
              value="1"
              control={<Radio size="small" />}
              label="1+"
            />
            <FormControlLabel
              value="2"
              control={<Radio size="small" />}
              label="2+"
            />
            <FormControlLabel
              value="3"
              control={<Radio size="small" />}
              label="3+"
            />
            <FormControlLabel
              value="4"
              control={<Radio size="small" />}
              label="4+"
            />
            <FormControlLabel
              value="5"
              control={<Radio size="small" />}
              label="5+"
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Bathrooms */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom>
          Bathrooms
        </Typography>
        <FormControl component="fieldset" fullWidth>
          <RadioGroup
            row
            value={bathrooms[1].toString()}
            onChange={(e) => setBathrooms([0, parseInt(e.target.value)])}
          >
            <FormControlLabel
              value="1"
              control={<Radio size="small" />}
              label="1+"
            />
            <FormControlLabel
              value="2"
              control={<Radio size="small" />}
              label="2+"
            />
            <FormControlLabel
              value="3"
              control={<Radio size="small" />}
              label="3+"
            />
            <FormControlLabel
              value="4"
              control={<Radio size="small" />}
              label="4+"
            />
            <FormControlLabel
              value="5"
              control={<Radio size="small" />}
              label="5+"
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Area Range */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom>
          Area (sqft)
        </Typography>
        <Box sx={{ px: 1 }}>
          <Slider
            value={areaRange}
            onChange={(e, newValue) => setAreaRange(newValue)}
            valueLabelDisplay="auto"
            min={0}
            max={5000}
            step={100}
            sx={{
              color: "#005244",
              "& .MuiSlider-thumb": {
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: "0px 0px 0px 8px rgba(0, 82, 68, 0.16)",
                },
              },
            }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <Typography variant="caption">{areaRange[0]} sqft</Typography>
          <Typography variant="caption">{areaRange[1]} sqft</Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Property Purpose */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom>
          Purpose
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          >
            <FormControlLabel
              value="all"
              control={<Radio size="small" />}
              label="All"
            />
            <FormControlLabel
              value="buy"
              control={<Radio size="small" />}
              label="For Sale"
            />
            <FormControlLabel
              value="rent"
              control={<Radio size="small" />}
              label="For Rent"
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Features */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom>
          Features
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={features.parking}
                onChange={handleFeatureChange}
                name="parking"
              />
            }
            label="Parking"
          />
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={features.pool}
                onChange={handleFeatureChange}
                name="pool"
              />
            }
            label="Swimming Pool"
          />
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={features.balcony}
                onChange={handleFeatureChange}
                name="balcony"
              />
            }
            label="Balcony"
          />
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={features.gym}
                onChange={handleFeatureChange}
                name="gym"
              />
            }
            label="Gym"
          />
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={features.furnished}
                onChange={handleFeatureChange}
                name="furnished"
              />
            }
            label="Furnished"
          />
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={features.pets}
                onChange={handleFeatureChange}
                name="pets"
              />
            }
            label="Pet Friendly"
          />
        </FormGroup>
      </Box>

      {/* Action buttons */}
      <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#005244",
            "&:hover": {
              backgroundColor: "#003d33",
            },
          }}
        >
          Apply Filters
        </Button>

        <Button
          variant="outlined"
          fullWidth
          onClick={handleReset}
          sx={{
            borderColor: "#005244",
            color: "#005244",
            "&:hover": {
              borderColor: "#003d33",
              backgroundColor: "rgba(0, 82, 68, 0.04)",
            },
          }}
        >
          Reset
        </Button>
      </Box>
    </Paper>
  );
}
