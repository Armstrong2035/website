"use client"

import { Typography, Card, CardMedia, CardContent } from "@mui/material"
import typographyStyles from "../../styles"



export default function ProjectCard({ imageUrl, title }) {
  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        borderRadius: 0,
        width: "360px",
      }}
    >
      <CardMedia
        component="img"
        image={imageUrl}
        alt={title}
        sx={{
          width: "360px",
          height: "auto",
          aspectRatio: "4/5",
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ px: 0, pt: 2, pb: 0 }}>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            color: "#196956",
            fontWeight: 500,
            fontSize: "1.25rem",
            ...typographyStyles.cardTitle,
          }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  )
}
