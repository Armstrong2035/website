// app/areaGuides/[id]/page.js
import { getAreaGuideById, getPageTitle } from "../../lib/notion";
import { Box, Typography, Container, Divider } from "@mui/material";
import NavBar from "../../components/appBar/AppBar";
import Footer from "../../components/footer/new-footer";
import { notFound } from "next/navigation";
import Image from "next/image";

// Generate static page with revalidation
export const revalidate = 3600; // Revalidate every hour

// Function to render Notion block content
function renderBlock(block) {
  if (!block) return null;

  switch (block.type) {
    case "paragraph":
      return (
        <Typography paragraph>
          {block.paragraph.rich_text.map((text) => text.plain_text).join("")}
        </Typography>
      );
    case "heading_1":
      return (
        <Typography variant="h3" component="h1" gutterBottom>
          {block.heading_1.rich_text.map((text) => text.plain_text).join("")}
        </Typography>
      );
    case "heading_2":
      return (
        <Typography variant="h4" component="h2" gutterBottom>
          {block.heading_2.rich_text.map((text) => text.plain_text).join("")}
        </Typography>
      );
    case "heading_3":
      return (
        <Typography variant="h5" component="h3" gutterBottom>
          {block.heading_3.rich_text.map((text) => text.plain_text).join("")}
        </Typography>
      );
    case "bulleted_list_item":
      return (
        <Typography component="li" sx={{ ml: 4 }}>
          {block.bulleted_list_item.rich_text
            .map((text) => text.plain_text)
            .join("")}
        </Typography>
      );
    case "image":
      const imageUrl = block.image.file?.url || block.image.external?.url;
      if (!imageUrl) return null;

      return (
        <Box sx={{ my: 3 }}>
          <img
            src={imageUrl}
            alt="Content image"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "4px" }}
          />
        </Box>
      );
    default:
      return null;
  }
}

// This is a Server Component
export default async function AreaGuidePage({ params }) {
  // Use the params object directly from the component props
  // Next.js passes the dynamic segment as params.id
  if (!params || !params.id) {
    console.error("Missing ID parameter");
    notFound();
  }

  // Log the ID to verify what we're receiving
  console.log("Received guide ID:", params.id);

  const guideData = await getAreaGuideById(params.id);

  if (!guideData || !guideData.page) {
    console.error("Guide data not found for ID:", params.id);
    notFound();
  }

  const title = getPageTitle(guideData.page);

  // Get featured image from properties
  const featuredImage = Object.values(guideData.page.properties).find(
    (prop) => prop.type === "url" && prop.name === "Featured Image"
  )?.url;

  return (
    <Box>
      <NavBar
        color="#005244"
        hoverColor="#005244"
        hoverBackground={"#FFFFFF"}
      />

      <Container maxWidth="lg" sx={{ py: 8, mt: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {title}
        </Typography>

        {featuredImage && (
          <Box sx={{ my: 4 }}>
            <img
              src={featuredImage}
              alt={title}
              style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
        )}

        <Divider sx={{ my: 4 }} />

        {/* Page Content */}
        <Box sx={{ my: 4 }}>
          {guideData.content.map((block, index) => (
            <Box key={block.id || index}>{renderBlock(block)}</Box>
          ))}
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
