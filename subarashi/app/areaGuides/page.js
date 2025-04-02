// app/areaGuides/page.js
import Link from "next/link";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import NavBar from "../components/appBar/AppBar";
import Footer from "../components/footer/Footer";

// Enable ISG with revalidation
export const revalidate = 3600; // Revalidate every hour

// Function to get page title
function getPageTitle(page) {
  const titleProperty = Object.values(page.properties).find(
    (property) => property.type === "title"
  );

  if (titleProperty && titleProperty.title.length > 0) {
    return titleProperty.title.map((t) => t.plain_text).join("");
  }
  return "Untitled";
}

// Function to get page property
function getPageProperty(page, propertyName) {
  const property = page.properties[propertyName];
  if (!property) return null;

  switch (property.type) {
    case "rich_text":
      return property.rich_text.map((t) => t.plain_text).join("");
    case "select":
      return property.select?.name;
    case "url":
      return property.url;
    default:
      return null;
  }
}

// Fetch all guides
async function getAreaGuides() {
  try {
    const response = await fetch(
      `${process.env.SITE_URL}/areaGuides/api/get-area-guides`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching guides:", error);
    return [];
  }
}

export default async function AreaGuides() {
  const guides = await getAreaGuides();

  return (
    <Box>
      <NavBar />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
          Dubai Area Guides
        </Typography>

        {guides.length === 0 ? (
          <Typography>No area guides found</Typography>
        ) : (
          <Grid container spacing={4}>
            {guides.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Link
                  href={`/areaGuides/${post.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={
                        getPageProperty(post, "Featured Image") ||
                        "https://res.cloudinary.com/dulafqaoq/image/upload/v1739812368/Image_17_uijjge.png"
                      }
                      alt={getPageTitle(post)}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {getPageTitle(post)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {getPageProperty(post, "Description") ||
                          "No description available"}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      <Footer />
    </Box>
  );
}
