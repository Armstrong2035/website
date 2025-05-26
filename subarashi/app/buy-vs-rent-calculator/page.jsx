"use client"

import { Container, Grid, Paper, Box, Typography } from "@mui/material"
import { useState } from "react"
import CalculatorInputs from "./components/CalculatorInputs"
import ResultsDisplay from "./components/ResultsDisplay"
import NextStepSection from "./components/NextStepSection"
import { calculateRentVsBuy } from "../utils/calculations.js"
import NavBar from "../components/appBar/AppBar"
import Footer from "../components/footer/new-footer"

export default function RentVsBuyCalculator() {
  const [inputs, setInputs] = useState({
    annualRent: 129000,
    propertyPrice: 1000000,
    residencyStatus: "UAE Resident",
    deposit: 200000,
    mortgagePeriod: 25,
    interestRate: 4.8,
    homePriceGrowthRate: 0,
    rentGrowthRate: 0,
    stayDuration: 5,
  })

  const [activeBreakdown, setActiveBreakdown] = useState("rent")

  const results = calculateRentVsBuy(inputs)

  const handleInputChange = (field, value) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <Box>
      <NavBar
        color="#005244"
        hoverColor="#F2FFC2"
        hoverBackground={"#005244"}
        buttonColor={"#005244"}
      />
      
      {/* Calculator Section */}
      <Box sx={{
        position: "relative",
        background: "url('/images/footer-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: 8,
      }}>
        {/* Overlay */}
        <Box sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }} />
        
        {/* Content */}
        <Container maxWidth="xl" sx={{ position: "relative" }}>
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2, color: "#1a1a1a" }}>
            Buy vs Rent Calculator
          </Typography>
          <Typography variant="h6" sx={{ color: "#666", maxWidth: "800px", mb: 6 }}>
            If you're thinking about buying a property instead of continuing to rent, use our buy-to-rent calculator to
            help you determine which option is more beneficial for you.
          </Typography>

          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={{ p: 3, backgroundColor: "#f8f9fa", borderRadius: 2 }}>
                  <CalculatorInputs inputs={inputs} onInputChange={handleInputChange} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 4 }}>
                  <ResultsDisplay
                    results={results}
                    activeBreakdown={activeBreakdown}
                    onBreakdownChange={setActiveBreakdown}
                  />
                </Box>
                <NextStepSection />
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      
      <Footer />
    </Box>
  )
}
