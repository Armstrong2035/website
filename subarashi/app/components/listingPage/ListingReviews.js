import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Rating,
  Button,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FlagIcon from "@mui/icons-material/Flag";

export default function ListingReviews({ listing }) {
  // Sample reviews (in a real app, these would come from an API)
  const reviews = [
    {
      id: 1,
      name: "Rashed Kabir",
      date: "13 Jun, 23",
      rating: 4.9,
      text: "Lorem ipsum dolor sit amet consectetur. Nulla dui feugiat cras donec quis massa eget habitant.",
      helpfulCount: 13,
      avatar: null, // URL for avatar if available
    },
    {
      id: 2,
      name: "Zubayer Al Hasan",
      date: "17 Aug, 23",
      rating: 4.7,
      text: "Lorem ipsum dolor sit amet consectetur. Pellentesque sed nulla facilisis diam posuere aliquam suscipit quam.",
      helpfulCount: 8,
      avatar: null,
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Review about {listing.location?.building || listing.title} by: Newest
        </Typography>

        <Button
          variant="text"
          sx={{
            color: "#005244",
          }}
        >
          VIEW ALL 120 REVIEWS
        </Button>
      </Box>

      <Box sx={{ mb: 4 }}>
        {reviews.map((review) => (
          <Card
            key={review.id}
            sx={{
              mb: 2,
              borderRadius: 2,
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <CardContent>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar src={review.avatar} sx={{ bgcolor: "#005244" }}>
                    {review.name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      {review.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {review.date}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Rating
                    value={review.rating}
                    precision={0.1}
                    readOnly
                    size="small"
                  />
                  <Typography variant="body2" color="text.secondary">
                    ({review.rating} Rating)
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body2" sx={{ mb: 2 }}>
                {review.text}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Button
                  variant="text"
                  startIcon={<ThumbUpIcon fontSize="small" />}
                  size="small"
                  sx={{ color: "#005244" }}
                >
                  Helpful
                </Button>

                <Button
                  variant="text"
                  startIcon={<FlagIcon fontSize="small" />}
                  size="small"
                  sx={{ color: "text.secondary" }}
                >
                  Flag
                </Button>

                {review.helpfulCount > 0 && (
                  <Typography variant="body2" color="text.secondary">
                    {review.helpfulCount}+
                  </Typography>
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          Post Review
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 2,
            border: "1px solid #e0e0e0",
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Write your review here...
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Avatar sx={{ bgcolor: "#005244" }}>R</Avatar>
              <Typography variant="body2">Rashed Kabir</Typography>
            </Box>
            <Rating defaultValue={0} precision={0.5} />
          </Box>
        </Paper>

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 2 }}
        >
          Sign in to post your comment or signup if you don't have any account.
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          Leave A Reply
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 2,
            border: "1px solid #e0e0e0",
            height: 150,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Sign in to post your comment or signup if you don't have any
            account.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
