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
      <Paper elevation={0} sx={{ p: 4, backgroundColor: "#fff", borderRadius: 2, mb: 4 }}>
        <Typography sx={{ ...typographyStyles.displayMedium, lineHeight: "normal", mb: 2, color: "#1a1a1a", fontSize: { xs: "1.5rem", md: "2rem" } }}>
          {isBuyingCheaper ? "Buying" : "Renting"} is{" "}
          <span style={{ color: "#005244" }}>{Math.abs(savingsPercentage)}% cheaper</span> than{" "}
          {isBuyingCheaper ? "Renting" : "Buying"} on monthly basis
        </Typography>
        <Typography sx={{ ...typographyStyles.bodyMedium, color: "#666", mb: 3 }}>
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
              backgroundColor: activeBreakdown === "rent" ? "#005244" : "transparent",
              borderColor: "#4caf50",
              color: activeBreakdown === "rent" ? "white" : "#4caf50",
              "&:hover": {
                backgroundColor: activeBreakdown === "rent" ? "#004235" : "#f1f8e9",
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
              backgroundColor: activeBreakdown === "buy" ? "#005244" : "transparent",
              borderColor: "#4caf50",
              color: activeBreakdown === "buy" ? "white" : "#4caf50",
              "&:hover": {
                backgroundColor: activeBreakdown === "buy" ? "#004235" : "#f1f8e9",
              },
            }}
          >
            Buy Cost Breakdown
          </Button>
        </Stack>

        {activeBreakdown === "rent" ? (
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography sx={{ ...typographyStyles.bodyMedium }}>Monthly Rent</Typography>
              <Typography sx={{ ...typographyStyles.bodyMedium, fontWeight: 600 }}>
                AED {formatCurrency(results.rentMonthlyCost)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography sx={{ ...typographyStyles.bodyMedium }}>
                Total Rental Cost Over {results.stayDuration} years
              </Typography>
              <Typography sx={{ ...typographyStyles.bodyMedium, fontWeight: 600 }}>
                AED {formatCurrency(results.totalRentCost)}
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography sx={{ ...typographyStyles.bodyMedium }}>Monthly Mortgage</Typography>
              <Typography sx={{ ...typographyStyles.bodyMedium, fontWeight: 600 }}>
                AED {formatCurrency(results.monthlyMortgage)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography sx={{ ...typographyStyles.bodyMedium }}>Property Service Charges</Typography>
              <Typography sx={{ ...typographyStyles.bodyMedium, fontWeight: 600 }}>
                AED {formatCurrency(results.monthlyServiceCharge)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography sx={{ ...typographyStyles.bodyMedium }}>Property Insurance</Typography>
              <Typography sx={{ ...typographyStyles.bodyMedium, fontWeight: 600 }}>
                AED {formatCurrency(results.monthlyInsurance)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography sx={{ ...typographyStyles.bodyMedium }}>Total Monthly Cost</Typography>
              <Typography sx={{ ...typographyStyles.bodyMedium, fontWeight: 600 }}>
                AED {formatCurrency(results.monthlyBuyCost)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography sx={{ ...typographyStyles.bodyMedium }}>
                Total Buy Cost Over {results.stayDuration} years
              </Typography>
              <Typography sx={{ ...typographyStyles.bodyMedium, fontWeight: 600 }}>
                AED {formatCurrency(results.totalBuyCost)}
              </Typography>
            </Box>
          </Box>
        )}
      </Paper>
    </Box>
  )
}
