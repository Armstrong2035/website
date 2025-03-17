import {
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputAdornment,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { filterStyles } from "../../styles/filterStyles";
import { filterConfig } from "../../config/filterConfig";
// This component is further broken down into individual filter components
const SearchFilters = ({
  propertyType,
  setPropertyType,
  location,
  setLocation,
  bedrooms,
  setBedrooms,
  applyFilters,
}) => {
  return (
    <Grid container spacing={2} alignItems="flex-end">
      <PropertyTypeFilter
        value={propertyType}
        onChange={setPropertyType}
        options={filterConfig.propertyTypes}
      />

      <LocationFilter value={location} onChange={setLocation} />

      <BedroomFilter
        value={bedrooms}
        onChange={setBedrooms}
        options={filterConfig.bedroomOptions}
      />

      <SearchButton onClick={applyFilters} />
    </Grid>
  );
};

// Property Type Filter Component
const PropertyTypeFilter = ({ value, onChange, options }) => (
  <Grid item xs={12} sm={4} md={4}>
    <Typography variant="body2" sx={filterStyles.inputLabelStyles}>
      I'm looking to...
    </Typography>
    <FormControl fullWidth variant="outlined" size="small">
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        sx={filterStyles.selectStyles}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Grid>
);

// Location Filter Component
const LocationFilter = ({ value, onChange }) => (
  <Grid item xs={12} sm={4} md={4}>
    <Typography variant="body2" sx={filterStyles.inputLabelStyles}>
      Location
    </Typography>
    <TextField
      value={value}
      onChange={(e) => onChange(e.target.value)}
      variant="outlined"
      fullWidth
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LocationOnIcon sx={{ color: "white" }} />
          </InputAdornment>
        ),
        sx: filterStyles.inputFieldStyles,
      }}
      sx={{ input: { color: "white" } }}
    />
  </Grid>
);

// Bedroom Filter Component
const BedroomFilter = ({ value, onChange, options }) => (
  <Grid item xs={12} sm={4} md={2}>
    <Typography variant="body2" sx={filterStyles.inputLabelStyles}>
      Bedroom
    </Typography>
    <FormControl fullWidth variant="outlined" size="small">
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        sx={filterStyles.selectStyles}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Grid>
);

// Search Button Component
const SearchButton = ({ onClick }) => (
  <Grid item xs={12} sm={12} md={2}>
    <Button
      variant="contained"
      fullWidth
      onClick={onClick}
      sx={filterStyles.searchButton}
    >
      SEARCH
    </Button>
  </Grid>
);

export default SearchFilters;
