"use client"

import { Box, Typography, Button, Avatar, Stack, Paper } from "@mui/material"
import typographyStyles from "../../styles"

export default function NextStepSection() {
  const experts = [
    { 
      name: "Expert 1", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200" 
    },
    { 
      name: "Expert 2", 
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200" 
    },
    { 
      name: "Expert 3", 
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200" 
    },
  ]

  return (
    <Paper elevation={0} sx={{ p: 4, backgroundColor: "#fff", borderRadius: 2 }}>
      <Typography sx={{ ...typographyStyles.cardTitle, fontWeight: 600, color: "#005244", mb: 2 }}>
        Ready to take the next step?
      </Typography>
      <Typography sx={{ ...typographyStyles.bodyMedium, color: "#666", mb: 4 }}>
        Our property experts will connect you with our trusted mortgage partners to help you find the best mortgage rate
        for your home purchase.
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        {experts.map((expert, index) => (
          <Box
            key={index}
            sx={{
              width: 120,
              height: 120,
              borderRadius: 2,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src={expert.image}
              alt={expert.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </Stack>

      <Button
        variant="contained"
        fullWidth
        size="large"
        sx={{
          ...typographyStyles.button,
          backgroundColor: "#005244",
          color: "white",
          py: 2,
          fontSize: "1.1rem",
          fontWeight: "bold",
          borderRadius: 2,
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#004235",
          },
        }}
      >
        Get pre-approved
      </Button>
    </Paper>
  )
}
