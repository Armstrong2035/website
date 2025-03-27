"use client";
import { useState } from "react";
import {
  TextField,
  Box,
  Button,
  Typography,
  Stack,
  Container,
  Divider,
  InputAdornment,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import NavBar from "../components/appBar/AppBar";
import Image from "next/image";
import Hero from "../components/subarashiFlex/Hero";
import typographyStyles from "../styles";

export default function Calculator() {
  const [totalRent, setTotalRent] = useState("");
  const [cheques, setCheques] = useState("");
  const [result, setResult] = useState({
    withFlex: 0,
    withoutFlex: 0,
  });

  // Format numbers with commas for display
  const formatNumberWithCommas = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleRentChange = (e) => {
    // Allow empty string (for backspace) or convert to number
    const value = e.target.value;
    setTotalRent(value === "" ? "" : Number(value));
  };

  const handleChequesChange = (e) => {
    // Allow empty string (for backspace) or convert to number
    const value = e.target.value;
    setCheques(value === "" ? "" : Number(value));
  };

  const handleSubmit = async () => {
    if (!totalRent || !cheques) {
      alert("Please enter valid rent and cheques");
      return;
    }

    const monthlyRent = totalRent / 12;
    const withFlex = monthlyRent * 1.2;
    const withoutFlex = totalRent / cheques;

    await setResult({ withFlex, withoutFlex });
  };

  return (
    <Box>
      <NavBar />

      <Hero />

      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
        }}
      >
        <Grid item xs={12} sm={6} md={5}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              variant="outlined"
              label="How much is the total rent?"
              type="number"
              value={totalRent}
              onChange={handleRentChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">AED</InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="How many cheques does the landlord want?"
              type="number"
              value={cheques}
              onChange={handleChequesChange}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              fullWidth
              size="large"
              sx={{ backgroundColor: "#196956" }}
            >
              Calculate
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={6} md={5}>
          <Box
            sx={{
              p: 3,
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Payment Comparison
            </Typography>

            <Box direction={"column"}>
              <Typography
                sx={{
                  ...typographyStyles.bodyMedium,
                  fontSize: "20px",
                  lineHeight: "120%",
                }}
                gutterBottom
              >
                With Flex You pay
              </Typography>
              <Typography
                sx={{
                  ...typographyStyles.bodyLarge,
                  fontSize: "25px",
                  color: "#196956",
                  fontWeight: 700,
                }}
              >
                AED {formatNumberWithCommas(result.withFlex.toFixed(2))} upfront
              </Typography>
            </Box>

            <Divider sx={{ mt: 4, mb: 4 }} />

            <Stack>
              <Typography
                sx={{
                  ...typographyStyles.bodyMedium,
                  fontSize: "20px",
                  lineHeight: "120%",
                }}
              >
                Without Flex you pay
              </Typography>
              <Typography
                sx={{
                  ...typographyStyles.bodyLarge,
                  fontSize: "30px",
                  lineHeight: "50px",
                  color: "#196956",
                  fontWeight: 700,
                }}
              >
                AED {formatNumberWithCommas(result.withoutFlex.toFixed(2))}{" "}
                upfront
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
