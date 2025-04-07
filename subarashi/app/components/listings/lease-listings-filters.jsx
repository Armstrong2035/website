"use client"
import { useEffect, useState } from "react"
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  Typography,
  Container,
  Grid,
  Paper,
  OutlinedInput,
  Divider,
} from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import typographyStyles from "../../styles"
import { BorderBottom } from "@mui/icons-material"


const propertyTypes = ["Buy Apartments", "Buy Villas", "Buy Townhouses", "Buy Penthouses"]
const bedroomOptions = ["Any", 1, 2, 3, 4, 5]
const priceRangeOptions = [
  { min: 0, max: 500000, label: "Up to 500,000" },
  { min: 500000, max: 1000000, label: "500,000 - 1,000,000" },
  { min: 1000000, max: 2000000, label: "1,000,000 - 2,000,000" },
  { min: 2000000, max: 5000000, label: "2,000,000 - 5,000,000" },
  { min: 5000000, max: null, label: "5,000,000+" },
]
const locationOptions = [
  "Dhanmondi, Dhaka",
  "Gulshan, Dhaka",
  "Banani, Dhaka",
  "Uttara, Dhaka",
  "Bashundhara, Dhaka",
  "Dubai",
]

const selectStyles = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
border: "0px solid rgb(41, 33, 33)",
      borderBottom: "1px solid #000000",
    },
    "&:hover fieldset": {
      borderColor: "#005244",
      borderBottom: "2px solid rgb(41, 33, 33)"
    },
    "&.Mui-focused fieldset": {
      border: "0px solid #000000",
      borderColor: "#005244",
      borderBottom: "2px solid #000000"
    },
  },
  "& .MuiSelect-icon": {
    color: "#005244",
  },
}

export default function LeaseListingsFilters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    propertyType: "Buy Apartments",
    bedrooms: "Any",
    priceRange: { min: 0, max: null, currency: "AED" },
    location: "Dhanmondi, Dhaka",
  })

  // Initialize filters on component mount
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(filters)
    }
  }, [])

  const handleFilterChange = (field, value) => {
    const newFilters = { ...filters }

    if (field === "priceRange") {
      const [min, max] = value.split("-")
      newFilters.priceRange = {
        min: Number.parseInt(min),
        max: max === "null" ? null : Number.parseInt(max),
        currency: filters.priceRange.currency,
      }
    } else {
      newFilters[field] = value
    }

    setFilters(newFilters)

    console.log("Filter changed:", field, value)
    console.log("New filters:", newFilters)
    if (onFilterChange) {
      onFilterChange(newFilters)
    }
  }

  return (
    <Paper elevation={0} sx={{ py: 3, mt: 8,  borderRadius: 0 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: 1 }}>
              <Typography
                variant="caption"
                sx={{
                  color: "#005244",
                  fontWeight: 500,
                  ...typographyStyles.bodySmall,
                }}
              >
                I'm looking to...
              </Typography>
            </Box>
            <FormControl fullWidth variant="outlined" sx={selectStyles}>
              <Select
                value={filters.propertyType}
                onChange={(e) => handleFilterChange("propertyType", e.target.value)}
                input={<OutlinedInput />}
                IconComponent={KeyboardArrowDownIcon}
                sx={{
                  backgroundColor: "#fff",
                  "& .MuiSelect-select": {
                    ...typographyStyles.bodyMedium,
                    fontWeight: 500,
                    py: 1.5,
                  },
                }}
              >
                {propertyTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}/>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: 1 }}>
              <Typography
                variant="caption"
                sx={{
                  color: "#005244",
                  fontWeight: 500,
                  ...typographyStyles.bodySmall,
                }}
              >
                Bedroom
              </Typography>
            </Box>
            <FormControl fullWidth variant="outlined" sx={selectStyles}>
              <Select
                value={filters.bedrooms}
                onChange={(e) => handleFilterChange("bedrooms", e.target.value)}
                input={<OutlinedInput />}
                IconComponent={KeyboardArrowDownIcon}
                sx={{
                  backgroundColor: "#fff",
                  "& .MuiSelect-select": {
                    ...typographyStyles.bodyMedium,
                    fontWeight: 500,
                    py: 1.5,
                  },
                }}
              >
                {bedroomOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: 1 }}>
              <Typography
                variant="caption"
                sx={{
                  color: "#005244",
                  fontWeight: 500,
                  ...typographyStyles.bodySmall,
                }}
              >
                Price Range
              </Typography>
            </Box>
            <FormControl fullWidth variant="outlined" sx={selectStyles}>
              <Select
                value={`${filters.priceRange.min}-${filters.priceRange.max}`}
                onChange={(e) => handleFilterChange("priceRange", e.target.value)}
                input={<OutlinedInput />}
                IconComponent={KeyboardArrowDownIcon}
                displayEmpty
                renderValue={() => filters.priceRange.currency}
                sx={{
                  backgroundColor: "#fff",
                  "& .MuiSelect-select": {
                    ...typographyStyles.bodyMedium,
                    fontWeight: 500,
                    py: 1.5,
                  },
                }}
              >
                <MenuItem value="currency" disabled>
                  <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <Typography>Currency</Typography>
                    <Typography sx={{ fontWeight: "bold" }}>AED</Typography>
                  </Box>
                </MenuItem>
                <Divider />
                {priceRangeOptions.map((option) => (
                  <MenuItem key={`${option.min}-${option.max}`} value={`${option.min}-${option.max}`}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

{/*           <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: 1 }}>
              <Typography
                variant="caption"
                sx={{
                  color: "#005244",
                  fontWeight: 500,
                  ...typographyStyles.bodySmall,
                }}
              >
                Location
              </Typography>
            </Box>
            <FormControl fullWidth variant="outlined" sx={selectStyles}>
              <Select
                value={filters.location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
                input={<OutlinedInput />}
                IconComponent={KeyboardArrowDownIcon}
                sx={{
                  backgroundColor: "#fff",
                  "& .MuiSelect-select": {
                    ...typographyStyles.bodyMedium,
                    fontWeight: 500,
                    py: 1.5,
                  },
                }}
              >
                {locationOptions.map((location) => (
                  <MenuItem key={location} value={location}>
                    {location}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid> */}
        </Grid>
      </Container>
    </Paper>
  )
}

