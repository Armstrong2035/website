"use client"

import { Box, Typography, Slider, ButtonGroup, Button, Stack } from "@mui/material"
import typographyStyles from "../../styles"

export default function CalculatorInputs({ inputs, onInputChange }) {
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

  const formatPercentage = (value) => `${value}%`

  const sliderCommonProps = {
    sx: {
      color: "#4caf50",
      height: 3,
      "& .MuiSlider-thumb": {
        height: 16,
        width: 16,
        backgroundColor: "#005244",
        "&:hover, &.Mui-focusVisible": {
          boxShadow: "0px 0px 0px 8px rgba(76, 175, 80, 0.16)",
        },
      },
      "& .MuiSlider-rail": {
        opacity: 0.32,
      },
    },
  }

  return (
    <Stack spacing={3}>
      {/* Annual Rent */}
      <Box>
        <Typography sx={{ ...typographyStyles.cardTitle, fontWeight: 600, color: "#005244", mb: 1 }}>
          Annual Rent
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography sx={{ ...typographyStyles.displayMedium, fontSize: { xs: "1.5rem", md: "2rem"}, lineHeight: "normal", textAlign: "left" }}>
            {formatCurrency(inputs.annualRent)}
          </Typography>
          <Typography sx={{ ...typographyStyles.bodyMedium, color: "#666", alignSelf: "end" }}>
            AED
          </Typography>
        </Box>
        <Slider
          value={inputs.annualRent}
          onChange={(e, value) => onInputChange("annualRent", value)}
          min={10000}
          max={500000}
          step={5000}
          {...sliderCommonProps}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "left" }}>10,000</Typography>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "right" }}>500,000</Typography>
        </Box>
      </Box>

      {/* Property Price */}
      <Box>
        <Typography sx={{ ...typographyStyles.cardTitle, fontWeight: 600, color: "#005244", mb: 1 }}>
          Property Price
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography sx={{ ...typographyStyles.displayMedium, fontSize: { xs: "1.5rem", md: "2rem"}, lineHeight: "normal", textAlign: "left" }}>
            {formatCurrency(inputs.propertyPrice)}
          </Typography>
          <Typography sx={{ ...typographyStyles.bodyMedium, color: "#666", alignSelf: "end" }}>
            AED
          </Typography>
        </Box>
        <Slider
          value={inputs.propertyPrice}
          onChange={(e, value) => onInputChange("propertyPrice", value)}
          min={200000}
          max={50000000}
          step={50000}
          {...sliderCommonProps}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "left" }}>200,000</Typography>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "right" }}>50,000,000</Typography>
        </Box>
      </Box>

      {/* Residency Status */}
      <Box>
        <Typography sx={{ ...typographyStyles.cardTitle, fontWeight: 600, color: "#005244", mb: 1 }}>
          Residency Status
        </Typography>
        <Typography sx={{ ...typographyStyles.bodySmall, color: "#666", mb: 2 }}>
          It can impact down payment requirements when getting a mortgage.
        </Typography>
        <ButtonGroup fullWidth variant="outlined">
          {["UAE National", "UAE Resident", "Non Resident"].map((status) => (
            <Button
              key={status}
              variant={inputs.residencyStatus === status ? "contained" : "outlined"}
              onClick={() => onInputChange("residencyStatus", status)}
              sx={{
                ...typographyStyles.button,
                backgroundColor: inputs.residencyStatus === status ? "#005244" : "transparent",
                borderColor: "#4caf50",
                color: inputs.residencyStatus === status ? "white" : "#4caf50",
                "&:hover": {
                  backgroundColor: inputs.residencyStatus === status ? "#004235" : "#f1f8e9",
                },
              }}
            >
              {status}
            </Button>
          ))}
        </ButtonGroup>
      </Box>

      {/* Deposit */}
      <Box>
        <Typography sx={{ ...typographyStyles.cardTitle, fontWeight: 600, color: "#005244", mb: 1 }}>
          Deposit
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography sx={{ ...typographyStyles.displayMedium, fontSize: { xs: "1.5rem", md: "2rem"}, lineHeight: "normal", textAlign: "left" }}>
            {formatCurrency(inputs.deposit)}
          </Typography>
          <Typography sx={{ ...typographyStyles.bodyMedium, color: "#666", alignSelf: "end" }}>
            {Math.round((inputs.deposit / inputs.propertyPrice) * 100)} %
          </Typography>
        </Box>
        <Slider
          value={inputs.deposit}
          onChange={(e, value) => onInputChange("deposit", value)}
          min={inputs.propertyPrice * 0.05}
          max={inputs.propertyPrice * 0.8}
          step={10000}
          {...sliderCommonProps}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "left" }}>{formatCurrency(inputs.propertyPrice * 0.05)}</Typography>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "right" }}>{formatCurrency(inputs.propertyPrice * 0.8)}</Typography>
        </Box>
      </Box>

      {/* Mortgage Period */}
      <Box>
        <Typography sx={{ ...typographyStyles.cardTitle, fontWeight: 600, color: "#005244", mb: 1 }}>
          Mortgage Period
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography sx={{ ...typographyStyles.displayMedium, fontSize: { xs: "1.5rem", md: "2rem"}, lineHeight: "normal", textAlign: "left" }}>
            {inputs.mortgagePeriod}
          </Typography>
          <Typography sx={{ ...typographyStyles.bodyMedium, color: "#666", alignSelf: "end" }}>
            Years
          </Typography>
        </Box>
        <Slider
          value={inputs.mortgagePeriod}
          onChange={(e, value) => onInputChange("mortgagePeriod", value)}
          min={1}
          max={25}
          step={1}
          {...sliderCommonProps}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "left" }}>1 years</Typography>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "right" }}>25 years</Typography>
        </Box>
      </Box>

      {/* Interest Rate */}
      <Box>
        <Typography sx={{ ...typographyStyles.cardTitle, fontWeight: 600, color: "#005244", mb: 1 }}>
          Interest Rate
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography sx={{ ...typographyStyles.displayMedium, fontSize: { xs: "1.5rem", md: "2rem"}, lineHeight: "normal", textAlign: "left" }}>
            {inputs.interestRate}
          </Typography>
          <Typography sx={{ ...typographyStyles.bodyMedium, color: "#666", alignSelf: "end" }}>
            %
          </Typography>
        </Box>
        <Slider
          value={inputs.interestRate}
          onChange={(e, value) => onInputChange("interestRate", value)}
          min={1}
          max={10}
          step={0.1}
          {...sliderCommonProps}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "left" }}>1%</Typography>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "right" }}>10%</Typography>
        </Box>
      </Box>

      {/* Annual home price growth rate */}
      <Box>
        <Typography sx={{ ...typographyStyles.cardTitle, fontWeight: 600, color: "#005244", mb: 1 }}>
          Annual home price growth rate
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography sx={{ ...typographyStyles.displayMedium, fontSize: { xs: "1.5rem", md: "2rem"}, lineHeight: "normal", textAlign: "left" }}>
            {inputs.homePriceGrowthRate}
          </Typography>
          <Typography sx={{ ...typographyStyles.bodyMedium, color: "#666", alignSelf: "end" }}>
            %
          </Typography>
        </Box>
        <Slider
          value={inputs.homePriceGrowthRate}
          onChange={(e, value) => onInputChange("homePriceGrowthRate", value)}
          min={-50}
          max={50}
          step={1}
          {...sliderCommonProps}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "left" }}>-50%</Typography>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "right" }}>50%</Typography>
        </Box>
      </Box>

      {/* Annual rent growth rate */}
      <Box>
        <Typography sx={{ ...typographyStyles.cardTitle, fontWeight: 600, color: "#005244", mb: 1 }}>
          Annual rent growth rate
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography sx={{ ...typographyStyles.displayMedium, fontSize: { xs: "1.5rem", md: "2rem"}, lineHeight: "normal", textAlign: "left" }}>
            {inputs.rentGrowthRate}
          </Typography>
          <Typography sx={{ ...typographyStyles.bodyMedium, color: "#666", alignSelf: "end" }}>
            %
          </Typography>
        </Box>
        <Slider
          value={inputs.rentGrowthRate}
          onChange={(e, value) => onInputChange("rentGrowthRate", value)}
          min={-50}
          max={50}
          step={1}
          {...sliderCommonProps}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "left" }}>-50%</Typography>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "right" }}>50%</Typography>
        </Box>
      </Box>

      {/* How long are you planning to stay in Dubai? */}
      <Box>
        <Typography sx={{ ...typographyStyles.cardTitle, fontWeight: 600, color: "#005244", mb: 1 }}>
          How long are you planning to stay in Dubai?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography sx={{ ...typographyStyles.displayMedium, fontSize: { xs: "1.5rem", md: "2rem"}, lineHeight: "normal", textAlign: "left" }}>
            {inputs.stayDuration}
          </Typography>
          <Typography sx={{ ...typographyStyles.bodyMedium, color: "#666", alignSelf: "end" }}>
            Years
          </Typography>
        </Box>
        <Slider
          value={inputs.stayDuration}
          onChange={(e, value) => onInputChange("stayDuration", value)}
          min={1}
          max={25}
          step={1}
          {...sliderCommonProps}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "left" }}>1 years</Typography>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "right" }}>25 years</Typography>
        </Box>
      </Box>
    </Stack>
  )
}
