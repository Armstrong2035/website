"use client"

import { Box, Typography, Grid, List, ListItem, ListItemText } from "@mui/material"
import Image from "next/image"

export default function WhyInvestSection() {
  const benefits = [
    {
      title: "Attractive Prices:",
      description: "Secure properties at prices significantly lower than completed units.",
    },
    {
      title: "Flexible Payment Plans:",
      description: "Spread payments across easy installments, making investing more accessible.",
    },
    {
      title: "High Return Potential:",
      description: "Capitalize on rising property values as developments near completion.",
    },
    {
      title: "Diverse Options:",
      description:
        "Choose from a wide range of apartments, villas, and townhouses across Dubai's most sought-after locations.",
    },
    {
      title: "Developer Incentives:",
      description:
        "Enjoy limited-time offers such as post-handover payment plans, DLD fee waivers, and guaranteed rental returns.",
    },
  ]

  return (
    <Box sx={{ py: 8 }} data-aos="fade-up">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "300px", sm: "400px", md: "600px" },
            }}
          >
            <Image
              src="/images/offplan-bottom-img.png"
              alt="Luxury villa with swimming pool"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ pl: { md: 4 } }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 400,
                mb: 2,
              }}
            >
              Why Invest in Off-Plan Properties?
            </Typography>

            <Box
              sx={{
                width: "100%",
                maxWidth: "380px",
                height: "1px",
                bgcolor: "#005244",
                mb: 4,
              }}
            />

            <List sx={{ pl: 0 }}>
              {benefits.map((benefit, index) => (
                <ListItem
                  key={index}
                  alignItems="flex-start"
                  sx={{
                    px: 0,
                    py: 1,
                    display: "flex",
                    alignItems: "baseline",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      display: "inline-block",
                      mr: 1,
                      fontSize: "1.5rem",
                      lineHeight: 1,
                      mt: 0.5,
                    }}
                  >
                    •
                  </Box>
                  <ListItemText
                    primary={
                      <Box component="span" sx={{ display: "inline" }}>
                        <Typography
                          component="span"
                          variant="body1"
                          sx={{
                            fontWeight: 700,
                            display: "inline",
                          }}
                        >
                          {benefit.title}
                        </Typography>
                        <Typography
                          component="span"
                          variant="body1"
                          sx={{
                            display: "inline",
                            ml: 0.5,
                          }}
                        >
                          {benefit.description}
                        </Typography>
                      </Box>
                    }
                    sx={{ m: 0 }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
