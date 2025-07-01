"use client"

import { Box, Typography, Button, Stack, Paper, Tabs, Tab } from "@mui/material"
import ComparisonChart from "./ComparisonChart"
import typographyStyles from "../../styles"

export default function ResultsDisplay({ results, activeBreakdown, onBreakdownChange }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-AE", {
      style: "currency",
      currency: "AED",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(value)
      .replace("AED", "")
      .trim()
  }

  console.log("results", results)
  const savingsPercentage = Math.round(
    ((results.rentMonthlyCost - results.buyMonthlyCost) / results.rentMonthlyCost) * 100,
  )
  const isBuyingCheaper = results.buyMonthlyCost < results.rentMonthlyCost

  return (
    <Box>
      {/* Main Result Header */}
      <Paper elevation={0} sx={{ p: 4, backgroundColor: "#fff", borderRadius: 2, mb: 0, backgroundColor: "#005244" }}>
        <Typography sx={{ ...typographyStyles.displayMedium, lineHeight: "normal", mb: 2, color: "#ffffff", fontSize: { xs: "1.5rem", md: "2rem" } }}>
          {isBuyingCheaper ? "Buying" : "Renting"} is{" "}
          <span style={{ color: "#fff", fontWeight: "bold" }}>{Math.abs(savingsPercentage)}% cheaper</span> than{" "}
          {isBuyingCheaper ? "Renting" : "Buying"} on monthly basis
        </Typography>
        <Typography sx={{ ...typographyStyles.bodyMedium, color: "#fff", mb: 3 }}>
          Buying uses {Math.abs(results.capitalDifference)}% {results.capitalDifference < 0 ? "less" : "more"} capital
          than renting if you stay in Dubai for {results.stayDuration} years.
        </Typography>

        {/* Monthly Cost Comparison */}
        <Box sx={{ height: "300px", mb: 8 }}>
          <ComparisonChart buyMonthlyCost={results.buyMonthlyCost} rentMonthlyCost={results.rentMonthlyCost} />
        </Box>

        {/* Cost Breakdown */}
        <Typography sx={{ ...typographyStyles.cardTitle, fontWeight: 600, color: "#005244", mb: 2 }}>
          Cost Breakdown
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Tabs
            value={activeBreakdown === "rent" ? 0 : 1}
            onChange={(_, newValue) => onBreakdownChange(newValue === 0 ? "rent" : "buy")}
            textColor="inherit"
            TabIndicatorProps={{ style: { background: "#4caf50" } }}
            sx={{
              backgroundColor: "#005244",
              borderRadius: 2,
              minHeight: 48,
              '& .MuiTab-root': {
                flex: 1,
                color: '#fff',
                fontWeight: 600,
                fontSize: { xs: '1rem', md: '1.1rem' },
                textTransform: 'none',
                borderRadius: 2,
                transition: 'background 0.2s',
                '&.Mui-selected': {
                  color: '#005244',
                  backgroundColor: '#e0f7dc',
                },
              },
            }}
            variant="fullWidth"
          >
            <Tab label="Rent Cost Breakdown" />
            <Tab label="Buy Cost Breakdown" />
          </Tabs>
        </Box>

        {activeBreakdown === "rent" ? (
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography sx={{ ...typographyStyles.bodyMedium, color: "#fff" }}>Monthly Rent</Typography>
              <Typography sx={{ ...typographyStyles.bodyMedium, fontWeight: 600, color: "#ffff" }}>
                AED {formatCurrency(results.rentMonthlyCost)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography sx={{ ...typographyStyles.bodyMedium, color: "#fff" }}>
                Total Rental Cost Over {results.stayDuration} years
              </Typography>
              <Typography sx={{ ...typographyStyles.bodyMedium, fontWeight: 600, color: "#fff" }}>
                AED {formatCurrency(results.totalRentCost)}
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography sx={{ ...typographyStyles.bodyMedium, color: "#fff" }}>Buy Monthly Cost</Typography>
              <Typography sx={{ ...typographyStyles.bodyMedium, fontWeight: 600, color: "#fff" }}>
                AED {formatCurrency(results.monthlyMortgage)}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography sx={{ ...typographyStyles.bodyMedium, color: "#fff" }}>
                Total Buy Cost Over {results.stayDuration} years
              </Typography>
              <Typography sx={{ ...typographyStyles.bodyMedium, fontWeight: 600, color: "#fff" }}>
                AED {formatCurrency(results.totalBuyCost)}
              </Typography>
            </Box>
          </Box>
        )}
      </Paper>
    </Box>
  )
}
