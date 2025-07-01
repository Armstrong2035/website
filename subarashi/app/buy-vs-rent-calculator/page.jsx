"use client"

import { Container, Grid, Paper, Box, Typography } from "@mui/material"
import { useState } from "react"
import CalculatorInputs from "../components/buyRentCalculator/CalculatorInputs"
import ResultsDisplay from "../components/buyRentCalculator/ResultsDisplay"
import NextStepSection from "../components/buyRentCalculator/NextStepSection"
import { calculateRentVsBuy } from "../utils/calculations.js"
import NavBar from "../components/appBar/AppBar"
import Footer from "../components/footer/new-footer"
import typographyStyles from "../styles"

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
  <NavBar buttonColor={"#F2FFC2"} />
      
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
          backgroundColor: "#005244",
          opacity: 0.7,
        }} />
        
        {/* Content */}
        <Container maxWidth="xl" sx={{ position: "relative", mt: 5, }}>
          <Typography sx={{ ...typographyStyles.displayLarge, mb: 2, lineHeight: "90px", textAlign: "center", color: "#F2FFC2",
              fontSize: {
                xs: "24px",
                sm: "32px",
                md: "48px",
              },
              lineHeight: {
                xs: "32px",
                sm: "40px",
                md: "56px",
              },
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)", }}>
            Buy vs Rent Calculator
          </Typography>
          <Typography sx={{ ...typographyStyles.featureText, color: "#F2FFC2", mb: 6,  textAlign: "center",  }}>
            If you're thinking about buying a property instead of continuing to rent, use our buy-to-rent calculator to
            help you determine which option is more beneficial for you.
          </Typography>

          <Paper elevation={3} sx={{ p: 4, borderRadius: 2, backgroundColor: "#005244" }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={{ p: 3, backgroundColor: "#edfceb", borderRadius: 2 }}>
                  <CalculatorInputs inputs={inputs} onInputChange={handleInputChange} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} sx={{ backgroundColor: "#005244" }} >
                <Box sx={{ mb: 0, backgroundColor: "#005244" }}>
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
