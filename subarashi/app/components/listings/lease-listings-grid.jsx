"use client";
import {
  Box,
  Grid2,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";
import typographyStyles from "../../styles";

export default function LeaseListingsGrid({
  listings,
  hoveredCardId,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <Grid2
      container
      spacing={3}
      sx={{
        justifyContent: {
          xs: "center",
          md: "flex-start",
        },
      }}
    >
      {listings.map((listing, index) => (
        <Link
          href={`/Listings/lease/${listing.id}`}
          style={{ textDecoration: "none" }}
          key={index}
        >
          <Grid2
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              transition: "filter 0.3s ease, transform 0.3s ease",
              filter:
                hoveredCardId !== null && hoveredCardId !== index
                  ? "blur(3px)"
                  : "none",
              transform: hoveredCardId === index ? "scale(1.02)" : "scale(1)",
              zIndex: hoveredCardId === index ? 3 : 2,
            }}
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={onMouseLeave}
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: "none",
                border: "1px solid transparent",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="225"
                  image={listing.media[0]}
                  alt={listing.location.building}
                  sx={{
                    objectFit: "cover",
                    borderRadius: "0px",
                    aspectRatio: "16/10",
                  }}
                />
              </Box>
              <CardContent sx={{ p: 1, pt: 2 }}>
                <Typography
                  variant="body1"
                  sx={{
                    ...typographyStyles.bodyLarge,
                    color: "#333",
                    fontWeight: 500,
                  }}
                  component="div"
                  gutterBottom
                >
                  {`${listing.location.building},${listing.location.city}, ${listing.location.city} `}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: 1,
                    "& > div": {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mr: 2,
                      pr: 2,
                      borderRight: "2px solid #005244",
                      minHeight: "40px",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: 400 }}
                    >
                      {listing.area}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      sqft
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: 400 }}
                    >
                      0{listing.bedrooms}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      beds
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: 400 }}
                    >
                      0{listing.bathrooms}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      baths
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid2>
        </Link>
      ))}
    </Grid2>
  );
}
