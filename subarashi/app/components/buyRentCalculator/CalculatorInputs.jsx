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
      height: 2,
      paddingBottom: 0,
      "& .MuiSlider-thumb": {
        height: 12,
        width: 12,
        backgroundColor: "#005244",
        paddingBottom: 0,
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
        <Typography sx={{ ...typographyStyles.cardTitle, fontWeight: 600, color: "#005244", mb: 1, lineHeight: "normal" }}>
          Annual Rent
        </Typography>
       <Box sx={{ backgroundColor: "#ffffff", paddingBottom: 0, paddingTop: 1.5, borderRadius: "4px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0 }}>
          <Typography sx={{ ...typographyStyles.displayMedium, fontSize: { xs: "1.2rem", md: "1.5rem"}, lineHeight: 0.6, textAlign: "left" }}>
            {formatCurrency(inputs.annualRent)}
          </Typography>
          <Typography sx={{ ...typographyStyles.bodyMedium, color: "#666", alignSelf: "end", lineHeight: 0.6 }}>
            AED
          </Typography>
        </Box>
        <Slider
          value={inputs.annualRent}
          onChange={(e, value) => onInputChange("annualRent", value)}
          min={10000}
          max={1000000}
          step={5000}
          {...sliderCommonProps}
        />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "left" }}>10,000</Typography>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "right" }}>1,000,000</Typography>
        </Box>
      </Box>

      {/* Property Price */}
      <Box>
        <Typography sx={{ ...typographyStyles.cardTitle, fontWeight: 600, color: "#005244", mb: 1, lineHeight: "normal" }}>
          Property Price
        </Typography>
       <Box sx={{ backgroundColor: "#ffffff", paddingBottom: 0, paddingTop: 1.5, borderRadius: "4px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0 }}>
          <Typography sx={{ ...typographyStyles.displayMedium, fontSize: { xs: "1.2rem", md: "1.5rem"}, lineHeight: 0.6, textAlign: "left" }}>
            {formatCurrency(inputs.propertyPrice)}
          </Typography>
          <Typography sx={{ ...typographyStyles.bodyMedium, color: "#666", alignSelf: "end", lineHeight: 0.6 }}>
            AED
          </Typography>
        </Box>
        <Slider
          value={inputs.propertyPrice}
          onChange={(e, value) => onInputChange("propertyPrice", value)}
          min={400000}
          max={150000000}
          step={50000}
          {...sliderCommonProps}
        />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "left" }}>400,000</Typography>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "right" }}>150,000,000</Typography>
        </Box>
      </Box>

      {/* Residency Status */}
    {/*   <Box>
        <Typography sx={{ ...typographyStyles.cardTitle, fontWeight: 600, color: "#005244", mb: 1, lineHeight: "normal" }}>
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
      </Box> */}

      {/* Deposit */}
      <Box>
        <Typography sx={{ ...typographyStyles.cardTitle, fontWeight: 600, color: "#005244", mb: 1, lineHeight: "normal" }}>
          Deposit
        </Typography>
       <Box sx={{ backgroundColor: "#ffffff", paddingBottom: 0, paddingTop: 1.5, borderRadius: "4px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0 }}>
          <Typography sx={{ ...typographyStyles.displayMedium, fontSize: { xs: "1.2rem", md: "1.5rem"}, lineHeight: 0.6, textAlign: "left" }}>
            {formatCurrency(inputs.deposit)}
          </Typography>
          <Typography sx={{ ...typographyStyles.bodyMedium, color: "#666", alignSelf: "end", lineHeight: 0.6 }}>
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
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "left" }}>{formatCurrency(inputs.propertyPrice * 0.05)}</Typography>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "right" }}>{formatCurrency(inputs.propertyPrice * 0.8)}</Typography>
        </Box>
      </Box>

      {/* Mortgage Period */}
      <Box>
        <Typography sx={{ ...typographyStyles.cardTitle, fontWeight: 600, color: "#005244", mb: 1, lineHeight: "normal" }}>
          Mortgage Period
        </Typography>
       <Box sx={{ backgroundColor: "#ffffff", paddingBottom: 0, paddingTop: 1.5, borderRadius: "4px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0 }}>
          <Typography sx={{ ...typographyStyles.displayMedium, fontSize: { xs: "1.2rem", md: "1.5rem"}, lineHeight: 0.6, textAlign: "left" }}>
            {inputs.mortgagePeriod}
          </Typography>
          <Typography sx={{ ...typographyStyles.bodyMedium, color: "#666", alignSelf: "end", lineHeight: 0.6 }}>
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
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "left" }}>1 years</Typography>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "right" }}>25 years</Typography>
        </Box>
      </Box>

      {/* Interest Rate */}
      <Box>
        <Typography sx={{ ...typographyStyles.cardTitle, fontWeight: 600, color: "#005244", mb: 1, lineHeight: "normal" }}>
          Interest Rate
        </Typography>
       <Box sx={{ backgroundColor: "#ffffff", paddingBottom: 0, paddingTop: 1.5, borderRadius: "4px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0 }}>
          <Typography sx={{ ...typographyStyles.displayMedium, fontSize: { xs: "1.2rem", md: "1.5rem"}, lineHeight: 0.6, textAlign: "left" }}>
            {inputs.interestRate}
          </Typography>
          <Typography sx={{ ...typographyStyles.bodyMedium, color: "#666", alignSelf: "end", lineHeight: 0.6 }}>
            %
          </Typography>
        </Box>
        <Slider
          value={inputs.interestRate}
          onChange={(e, value) => onInputChange("interestRate", value)}
          min={1}
          max={5}
          step={0.1}
          {...sliderCommonProps}
        />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "left" }}>1%</Typography>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "right" }}>5%</Typography>
        </Box>
      </Box>

      {/* Annual home price growth rate */}
      <Box>
        <Typography sx={{ ...typographyStyles.cardTitle, fontWeight: 600, color: "#005244", mb: 1, lineHeight: "normal" }}>
          Annual home price growth rate
        </Typography>
       <Box sx={{ backgroundColor: "#ffffff", paddingBottom: 0, paddingTop: 1.5, borderRadius: "4px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0 }}>
          <Typography sx={{ ...typographyStyles.displayMedium, fontSize: { xs: "1.2rem", md: "1.5rem"}, lineHeight: 0.6, textAlign: "left" }}>
            {inputs.homePriceGrowthRate}
          </Typography>
          <Typography sx={{ ...typographyStyles.bodyMedium, color: "#666", alignSelf: "end", lineHeight: 0.6 }}>
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
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "left" }}>-50%</Typography>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "right" }}>50%</Typography>
        </Box>
      </Box>

      {/* Annual rent growth rate */}
{/*       <Box>
        <Typography sx={{ ...typographyStyles.cardTitle, fontWeight: 600, color: "#005244", mb: 1, lineHeight: "normal" }}>
          Annual rent growth rate
        </Typography>
       <Box sx={{ backgroundColor: "#ffffff", paddingBottom: 0, paddingTop: 1.5, borderRadius: "4px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0 }}>
          <Typography sx={{ ...typographyStyles.displayMedium, fontSize: { xs: "1.2rem", md: "1.5rem"}, lineHeight: 0.6, textAlign: "left" }}>
            {inputs.rentGrowthRate}
          </Typography>
          <Typography sx={{ ...typographyStyles.bodyMedium, color: "#666", alignSelf: "end", lineHeight: 0.6 }}>
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
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "left" }}>-50%</Typography>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "right" }}>50%</Typography>
        </Box>
      </Box>
 */}
      {/* How long are you planning to stay in Dubai? */}
      <Box>
        <Typography sx={{ ...typographyStyles.cardTitle, fontWeight: 600, color: "#005244", mb: 1, lineHeight: "normal" }}>
          How long are you planning to stay in Dubai?
        </Typography>
       <Box sx={{ backgroundColor: "#ffffff", paddingBottom: 0, paddingTop: 1.5, borderRadius: "4px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0 }}>
          <Typography sx={{ ...typographyStyles.displayMedium, fontSize: { xs: "1.2rem", md: "1.5rem"}, lineHeight: 0.6, textAlign: "left" }}>
            {inputs.stayDuration}
          </Typography>
          <Typography sx={{ ...typographyStyles.bodyMedium, color: "#666", alignSelf: "end", lineHeight: 0.6 }}>
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
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "left" }}>1 years</Typography>
          <Typography sx={{ ...typographyStyles.caption, textAlign: "right" }}>25 years</Typography>
        </Box>
      </Box>
    </Stack>
  )
}
