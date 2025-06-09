"use client";

import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import typographyStyles from "../../styles";

export default function WhyInvestSection() {
  const benefits = [
    {
      title: "Attractive Prices",
      description:
        "Secure your dream property at a fraction of the cost, locking in today's prices before Dubai's market climbs higher. It's your chance to own a piece of the future at unbeatable value.",
    },
    {
      title: "Flexible Payment Plans",
      description:
        "Investing shouldn't feel out of reach. With easy, tailored installments, you can spread payments over time, making it simple to own a stunning home in Dubai without the financial strain.",
    },
    {
      title: "High Return Potential",
      description:
        "Imagine watching your investment grow as Dubai's skyline takes shape. Off-plan properties often surge in value as projects near completion, offering you impressive returns in one of the world's most dynamic cities.",
    },
    {
      title: "Diverse Options",
      description:
        "From sleek apartments to sprawling villas and charming townhouses, you'll discover the perfect home or investment in Dubai's most coveted neighborhoods. It's not just a property; it's a lifestyle crafted for you.",
    },
    {
      title: "Developer Incentives",
      description:
        "Exclusive offers like post-handover payment plans, waived DLD fees, and guaranteed rental returns make your investment even sweeter. These limited-time perks transform your vision of owning a Dubai property into an exhilarating reality.",
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
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
                fontWeight: 400,
                mb: 2,
                ...typographyStyles.sectionTitle,
                fontSize: { xs: "2rem", md: "3.5rem" },
                lineHeight: { xs: "2.5rem", md: "4rem" },
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
                            display: "inline",
                            ...typographyStyles.bodyLarge,
                            fontWeight: 700,
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
                            ...typographyStyles.bodyLarge,
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
  );
}
