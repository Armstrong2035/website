"use client"

import { Box, Typography, ButtonGroup, Button, Stack, Paper } from "@mui/material"
import ComparisonChart from "./ComparisonChart"

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

  const savingsPercentage = Math.round(
    ((results.rentMonthlyCost - results.buyMonthlyCost) / results.rentMonthlyCost) * 100,
  )
  const isBuyingCheaper = results.buyMonthlyCost < results.rentMonthlyCost

  return (
    <Box>
      {/* Main Result Header */}
      <Paper elevation={0} sx={{ p: 4, backgroundColor: "#fff", borderRadius: 2, mb: 4 }}>
        <Typography variant="h4" sx={{ 
          fontWeight: "bold", 
          mb: 2,
          color: "#1a1a1a",
          fontSize: { xs: "1.5rem", md: "2rem" }
        }}>
          {isBuyingCheaper ? "Buying" : "Renting"} is{" "}
          <span style={{ color: "#005244" }}>{Math.abs(savingsPercentage)}% cheaper</span> than{" "}
          {isBuyingCheaper ? "Renting" : "Buying"} on monthly basis
        </Typography>
        <Typography variant="body1" sx={{ color: "#666", mb: 3 }}>
          Buying uses {Math.abs(results.capitalDifference)}% {results.capitalDifference < 0 ? "less" : "more"} capital
          than renting if you stay in Dubai for {results.stayDuration} years.
        </Typography>

        {/* Monthly Cost Comparison */}
        <Box sx={{ height: "300px", mb: 4 }}>
          <ComparisonChart buyMonthlyCost={results.buyMonthlyCost} rentMonthlyCost={results.rentMonthlyCost} />
        </Box>

        {/* Cost Breakdown Tabs */}
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <Button
            variant={activeBreakdown === "rent" ? "contained" : "outlined"}
            onClick={() => onBreakdownChange("rent")}
            sx={{
              flex: 1,
              borderRadius: 2,
              py: 1.5,
              backgroundColor: activeBreakdown === "rent" ? "#005244" : "transparent",
              borderColor: "#4caf50",
              color: activeBreakdown === "rent" ? "white" : "#4caf50",
              "&:hover": {
                backgroundColor: activeBreakdown === "rent" ? "#004235" : "rgba(76, 175, 80, 0.08)",
              },
            }}
          >
            Rent Cost Breakdown
          </Button>
          <Button
            variant={activeBreakdown === "buy" ? "contained" : "outlined"}
            onClick={() => onBreakdownChange("buy")}
            sx={{
              flex: 1,
              borderRadius: 2,
              py: 1.5,
              backgroundColor: activeBreakdown === "buy" ? "#005244" : "transparent",
              borderColor: "#4caf50",
              color: activeBreakdown === "buy" ? "white" : "#4caf50",
              "&:hover": {
                backgroundColor: activeBreakdown === "buy" ? "#004235" : "rgba(76, 175, 80, 0.08)",
              },
            }}
          >
            Buy Cost Breakdown
          </Button>
        </Box>

        {/* Cost Details */}
        <Stack spacing={2}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body1" sx={{ color: "#666" }}>Monthly {activeBreakdown === "rent" ? "Rent" : "Buy Cost"}</Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1a1a1a" }}>
              AED {formatCurrency(activeBreakdown === "rent" ? results.monthlyRent : results.buyMonthlyCost)}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body1" sx={{ color: "#666" }}>
              Total {activeBreakdown === "rent" ? "Rental" : "Buy"} Cost Over {results.stayDuration} years
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1a1a1a" }}>
              AED {formatCurrency(activeBreakdown === "rent" ? results.totalRentCost : results.totalBuyCost)}
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </Box>
  )
}
