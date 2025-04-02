// app/areaGuides/[id]/page.js
import { Box, Typography, Container } from "@mui/material";
import NavBar from "../../components/appBar/AppBar";
import Footer from "../../components/footer/Footer";
import { notFound } from "next/navigation";

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

// Function to render block content
function renderBlockContent(block) {
  if (!block) return null;

  switch (block.type) {
    case "paragraph":
      return (
        <p>{block.paragraph.rich_text.map((t) => t.plain_text).join("")}</p>
      );
    case "heading_1":
      return (
        <h1>{block.heading_1.rich_text.map((t) => t.plain_text).join("")}</h1>
      );
    case "heading_2":
      return (
        <h2>{block.heading_2.rich_text.map((t) => t.plain_text).join("")}</h2>
      );
    case "heading_3":
      return (
        <h3>{block.heading_3.rich_text.map((t) => t.plain_text).join("")}</h3>
      );
    case "bulleted_list_item":
      return (
        <li>
          {block.bulleted_list_item.rich_text.map((t) => t.plain_text).join("")}
        </li>
      );
    case "numbered_list_item":
      return (
        <li>
          {block.numbered_list_item.rich_text.map((t) => t.plain_text).join("")}
        </li>
      );
    case "image":
      return block.image.file ? (
        <img
          src={block.image.file.url}
          alt="Content"
          style={{ maxWidth: "100%" }}
        />
      ) : null;
    default:
      return null;
  }
}

// Fetch the page data
async function getPageData(id) {
  try {
    const response = await fetch(
      `${process.env.SITE_URL}/areaGuides/api/get-area-guide`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
}

export default async function AreaGuidePage({ params }) {
  const pageData = await getPageData(params.id);

  if (!pageData || !pageData.page) {
    notFound();
  }

  return (
    <Box>
      <NavBar />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {getPageTitle(pageData.page)}
        </Typography>

        {/* Featured Image */}
        {getPageProperty(pageData.page, "Featured Image") && (
          <Box sx={{ my: 4 }}>
            <img
              src={getPageProperty(pageData.page, "Featured Image")}
              alt={getPageTitle(pageData.page)}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        )}

        {/* Page Content */}
        <Box sx={{ my: 4 }}>
          {pageData.content.map((block, index) => (
            <Box key={block.id || index}>{renderBlockContent(block)}</Box>
          ))}
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
