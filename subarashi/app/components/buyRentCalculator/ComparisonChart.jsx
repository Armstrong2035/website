import { Box, Typography, Paper } from "@mui/material"

export default function ComparisonChart({ buyMonthlyCost, rentMonthlyCost }) {
  const CHART_HEIGHT = 300

  // Calculate y-axis values based on the maximum value
  const maxValue = Math.max(buyMonthlyCost, rentMonthlyCost)
  const yAxisValues = Array.from({ length: 8 }, (_, i) => 
    Math.round((maxValue * (7 - i) / 7) / 1000 * 10) / 10
  )

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

  return (
    <Box sx={{ mb: 4 }}>
      {/* Y-axis labels */}
      <Box sx={{ position: "relative", height: 350 }}>
        {/* Y-axis */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 50,
          }}
        >
          {yAxisValues.map((value, index) => (
            <Typography key={index} variant="caption" sx={{ color: "#666" }}>
              {value}K
            </Typography>
          ))}
        </Box>

        {/* Chart area */}
        <Box
          sx={{
            ml: 6,
            height: 350,
            display: "flex",
            alignItems: "flex-end",
            gap: 2,
            border: "1px solid #e0e0e0",
            borderLeft: "none",
            borderBottom: "none",
            position: "relative",
          }}
        >
          {/* Grid lines */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((line) => (
            <Box
              key={line}
              sx={{
                position: "absolute",
                top: `${(line / 7) * 100}%`,
                left: 0,
                right: 0,
                height: "1px",
                backgroundColor: "#f0f0f0",
                zIndex: 0,
              }}
            />
          ))}

          {/* Buy bar */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center",  }}>
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                height: `${(buyMonthlyCost / maxValue) * CHART_HEIGHT}px`,
                backgroundColor: "#a5a5a5",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
            >
              <Typography variant="body2" sx={{ color: "black", fontWeight: "bold", position: "absolute", top: "40%", transform: "translateY(-50%)" }}>
                Buy Monthly Cost
              </Typography>
              <Typography variant="h6" sx={{ color: "black", fontWeight: "bold", position: "absolute", top: "50%", transform: "translateY(-50%)" }}>
                AED {formatCurrency(buyMonthlyCost)}
              </Typography>
            </Paper>
          </Box>

          {/* Rent bar */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                height: `${(rentMonthlyCost / maxValue) * CHART_HEIGHT}px`,
                backgroundColor: "#005244",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
            >
              <Typography variant="body2" sx={{ color: "black", fontWeight: "bold", position: "absolute", top: "40%", transform: "translateY(-50%)" }}>
                Rent Monthly Cost
              </Typography>
              <Typography variant="h6" sx={{ color: "black", fontWeight: "bold", position: "absolute", top: "50%", transform: "translateY(-50%)" }}>
                AED {formatCurrency(rentMonthlyCost)}
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
