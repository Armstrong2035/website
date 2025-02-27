import React, { useState } from "react";
import {
  Box,
  Typography,
  Slider,
  TextField,
  Paper,
  Button,
  InputAdornment,
} from "@mui/material";

export default function ListingMortgage({ listing }) {
  // Default values for calculator
  const defaultHomePrice = listing.price?.amount || 1000000;

  // State for calculator inputs
  const [homePrice, setHomePrice] = useState(defaultHomePrice);
  const [downPayment, setDownPayment] = useState(3.5);
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanTerms, setLoanTerms] = useState(30);

  // Format currency values
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      maximumFractionDigits: 0,
    }).format(value);
  };

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
        Mortgage Calculator
      </Typography>

      <Box sx={{ my: 3 }}>
        <Typography variant="body2" gutterBottom>
          Home Price*
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          value={formatCurrency(homePrice)}
          onChange={(e) => {
            // Remove non-numeric characters and convert to number
            const value = Number(e.target.value.replace(/[^0-9]/g, ""));
            if (!isNaN(value)) {
              setHomePrice(value);
            }
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          size="small"
        />
      </Box>

      <Box sx={{ my: 3 }}>
        <Typography variant="body2" gutterBottom>
          Down Payment* ({downPayment}%)
        </Typography>
        <Slider
          value={downPayment}
          onChange={(e, newValue) => setDownPayment(newValue)}
          min={0}
          max={50}
          step={0.5}
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

      <Box sx={{ my: 3 }}>
        <Typography variant="body2" gutterBottom>
          Interest Rate* ({interestRate}%)
        </Typography>
        <Slider
          value={interestRate}
          onChange={(e, newValue) => setInterestRate(newValue)}
          min={1}
          max={10}
          step={0.1}
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

      <Box sx={{ my: 3 }}>
        <Typography variant="body2" gutterBottom>
          Loan Terms (Years)
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          type="number"
          value={loanTerms}
          onChange={(e) => setLoanTerms(Number(e.target.value))}
          size="small"
        />
      </Box>

      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 2,
          py: 1.5,
          backgroundColor: "#FF5722",
          "&:hover": {
            backgroundColor: "#E64A19",
          },
        }}
      >
        CALCULATE
      </Button>
    </Paper>
  );
}
