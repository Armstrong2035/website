"use client"

import { Box, Typography } from "@mui/material"

export default function ComparisonChart({ buyMonthlyCost, rentMonthlyCost }) {
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

  const maxValue = Math.max(buyMonthlyCost, rentMonthlyCost)
  const chartHeight = 200

  return (
    <Box sx={{ height: "100%" }}>
      <Box sx={{ display: "flex", height: "100%", alignItems: "flex-end", gap: 4, pt: 4 }}>
        {/* Buy Bar */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: "100%",
              height: `${(buyMonthlyCost / maxValue) * chartHeight}px`,
              backgroundColor: "#f1f8e9",
              borderRadius: "8px 8px 0 0",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              pt: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#005244" }}>
              AED {formatCurrency(buyMonthlyCost)}
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ fontWeight: "medium", color: "#666" }}>
            Buy Monthly Cost
          </Typography>
        </Box>

        {/* Rent Bar */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: "100%",
              height: `${(rentMonthlyCost / maxValue) * chartHeight}px`,
              backgroundColor: "#005244",
              borderRadius: "8px 8px 0 0",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              pt: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
              AED {formatCurrency(rentMonthlyCost)}
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ fontWeight: "medium", color: "#666" }}>
            Rent Monthly Cost
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
