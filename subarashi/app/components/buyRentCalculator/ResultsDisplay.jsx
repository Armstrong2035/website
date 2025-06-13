"use client"

import { Box, Typography, Button, Stack, Paper } from "@mui/material"
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

        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <Button
            variant={activeBreakdown === "rent" ? "contained" : "outlined"}
            onClick={() => onBreakdownChange("rent")}
            sx={{
              ...typographyStyles.button,
              flex: 1,
              backgroundColor: activeBreakdown === "rent" ? "#e0f7dc" : "transparent",
              borderColor: "#4caf50",
              color: activeBreakdown === "rent" ? "#005244" : "#fff",
              "&:hover": {
                backgroundColor: activeBreakdown === "rent" ? "#004235" : "#f1f8e9",
                color: activeBreakdown === "rent" ? "#fff" : "#4caf50",
              },
            }}
          >
            Rent Cost Breakdown
          </Button>
          <Button
            variant={activeBreakdown === "buy" ? "contained" : "outlined"}
            onClick={() => onBreakdownChange("buy")}
            sx={{
              ...typographyStyles.button,
              flex: 1,
              backgroundColor: activeBreakdown === "buy" ? "#e0f7dc" : "transparent",
              borderColor: "#4caf50",
              color: activeBreakdown === "buy" ? "#005244" : "#fff",
              "&:hover": {
                backgroundColor: activeBreakdown === "buy" ? "#004235" : "#f1f8e9",
                color: activeBreakdown === "buy" ? "#fff" : "#4caf50",
              },
            }}
          >
            Buy Cost Breakdown
          </Button>
        </Stack>

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
