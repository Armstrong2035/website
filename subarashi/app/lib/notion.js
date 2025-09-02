// app/lib/notion.js
import { Client } from "@notionhq/client";

// Initialize Notion client only once
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Database ID for area guides
const DATABASE_ID = "1c4275a597e3806490f2db26c65ed1b4";

// Get all area guides
export async function getAllAreaGuides() {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
    });

    // Log the first page structure to help with debugging
    if (response.results.length > 0) {
      // console.log(
      //   "First Notion page property names:",
      //   Object.keys(response.results[0].properties).join(", ")
      // );
    }

    const guides = response.results.map((page) => {
      // Log all property names and their types for the first page
      if (page === response.results[0]) {
        console.log("Property details:");
        Object.entries(page.properties).forEach(([key, value]) => {
          console.log(`${key}: ${value.type}`);
        });
      }

      // Try different property names for the image
      let imageUrl = null;

      // Check for properties containing "image" in their name (case-insensitive)
      const imagePropertyKey = Object.keys(page.properties).find(
        (key) =>
          key.toLowerCase().includes("image") ||
          key.toLowerCase().includes("header")
      );

      if (imagePropertyKey) {
        const imageProperty = page.properties[imagePropertyKey];
        imageUrl = extractPropertyValue(imageProperty);
      }

      if (!imageUrl) {
        // Try specific property names as fallback
        imageUrl =
          getPageProperty(page, "Header image") ||
          getPageProperty(page, "HeaderImage") ||
          getPageProperty(page, "Image") ||
          getPageProperty(page, "Featured Image");
      }

      const guide = {
        id: page.id,
        title: getPageTitle(page),
        description:
          getPageProperty(page, "Text") || getPageProperty(page, "Description"),
        image: imageUrl,
        slug: getPageProperty(page, "Slug") || page.id,
      };

      console.log(`Guide: ${guide.title}, Image URL: ${guide.image}`);
      return guide;
    });

    return guides;
  } catch (error) {
    console.error("Error fetching area guides:", error);
    return [];
  }
}

// Get a single area guide by ID
export async function getAreaGuideById(id) {
  try {
    // Fetch page data
    const page = await notion.pages.retrieve({
      page_id: id,
    });

    // Fetch page content
    const content = await notion.blocks.children.list({
      block_id: id,
    });

    return {
      page,
      content: content.results,
    };
  } catch (error) {
    console.error(`Error fetching guide with ID ${id}:`, error);
    return null;
  }
}

// Helper function to extract page title
export function getPageTitle(page) {
  // In Notion, the title is usually a property of type 'title'
  // But we need to handle the case where it might be named something else, like 'Name'

  // First, try to find a property of type 'title'
  const titleProperty = Object.values(page.properties).find(
    (property) => property.type === "title"
  );

  if (titleProperty && titleProperty.title.length > 0) {
    return titleProperty.title.map((t) => t.plain_text).join("");
  }

  // If not found, try property named 'Name' (case-insensitive)
  const nameProperty =
    page.properties["Name"] ||
    Object.entries(page.properties).find(
      ([key, value]) => key.toLowerCase() === "name"
    )?.[1];

  if (nameProperty) {
    if (nameProperty.type === "title") {
      return nameProperty.title.map((t) => t.plain_text).join("");
    } else if (nameProperty.type === "rich_text") {
      return nameProperty.rich_text.map((t) => t.plain_text).join("");
    }
  }

  return "Untitled";
}

// Helper function to extract page property
export function getPageProperty(page, propertyName) {
  // Try exact match first
  const property = page.properties[propertyName];

  // If no exact match, try case-insensitive match
  if (!property) {
    const propertyKey = Object.keys(page.properties).find(
      (key) => key.toLowerCase() === propertyName.toLowerCase()
    );

    if (propertyKey) {
      return extractPropertyValue(page.properties[propertyKey]);
    }

    return null;
  }

  return extractPropertyValue(property);
}

// Helper function to extract value based on property type
function extractPropertyValue(property) {
  if (!property) return null;

  switch (property.type) {
    case "rich_text":
      return property.rich_text.map((t) => t.plain_text).join("");
      return property.title.map((t) => t.plain_text).join("");
    case "select":
      return property.select?.name;
    case "url":
      return property.url;
    case "text":
      // Custom handling for text type if needed
      return property.text;
    case "files":
      // For file/image properties
      if (property.files.length > 0) {
        return property.files[0].file?.url || property.files[0].external?.url;
      }
      return null;
    default:
      console.log(`Unhandled property type: ${property.type}`, property);
      return null;
  }
}
