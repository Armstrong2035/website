// app/components/areaGuides/AreaGuideContent.js
import React from "react";
import { Typography, Box, List, ListItem, Divider } from "@mui/material";
import typographyStyles from "../../styles";

// Helper function to render rich text with formatting
const renderRichText = (richText) => {
  if (!richText || richText.length === 0) return null;

  return richText.map((text, index) => {
    const { annotations } = text;
    let style = {};

    if (annotations.bold) style.fontWeight = "bold";
    if (annotations.italic) style.fontStyle = "italic";
    if (annotations.underline) style.textDecoration = "underline";
    if (annotations.strikethrough) style.textDecoration = "line-through";
    if (annotations.code) {
      return (
        <code
          key={index}
          style={{
            backgroundColor: "#f0f0f0",
            padding: "2px 4px",
            borderRadius: "3px",
          }}
        >
          {text.plain_text}
        </code>
      );
    }

    return (
      <span key={index} style={style}>
        {text.plain_text}
      </span>
    );
  });
};

// Function to render individual block content
const renderBlock = (block) => {
  if (!block) return null;

  switch (block.type) {
    case "paragraph":
      return (
        <Typography
          paragraph
          sx={{
            ...typographyStyles.bodyLarge,
            mb: 2,
          }}
        >
          {renderRichText(block.paragraph.rich_text)}
        </Typography>
      );

    case "heading_1":
      return (
        <Typography
          variant="h4"
          component="h2"
          sx={{
            ...typographyStyles.cardHeader,
            color: "#005244",
            fontWeight: 500,
            mt: 4,
            mb: 2,
          }}
        >
          {renderRichText(block.heading_1.rich_text)}
        </Typography>
      );

    case "heading_2":
      return (
        <Typography
          variant="h5"
          component="h3"
          sx={{
            ...typographyStyles.listingTitle,
            color: "#005244",
            fontWeight: 500,
            mt: 3,
            mb: 2,
          }}
        >
          {renderRichText(block.heading_2.rich_text)}
        </Typography>
      );

    case "heading_3":
      return (
        <Typography
          variant="h6"
          component="h4"
          sx={{
            ...typographyStyles.bodyLarge,
            fontWeight: 600,
            mt: 2,
            mb: 1,
          }}
        >
          {renderRichText(block.heading_3.rich_text)}
        </Typography>
      );

    case "bulleted_list_item":
      return (
        <Box sx={{ display: "flex", ml: 2, mb: 1 }}>
          <Box component="span" sx={{ mr: 1 }}>
            •
          </Box>
          <Typography sx={{ ...typographyStyles.bodyLarge }}>
            {renderRichText(block.bulleted_list_item.rich_text)}
          </Typography>
        </Box>
      );

    case "numbered_list_item":
      // We'll handle the numbering at the parent level
      return (
        <Typography sx={{ ...typographyStyles.bodyLarge, ml: 2, mb: 1 }}>
          {renderRichText(block.numbered_list_item.rich_text)}
        </Typography>
      );

    case "image":
      const imageUrl = block.image.file?.url || block.image.external?.url;
      if (!imageUrl) return null;

      return (
        <Box sx={{ my: 3, textAlign: "center" }}>
          <img
            src={imageUrl}
            alt="Area guide image"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "4px",
            }}
          />
          {block.image.caption && block.image.caption.length > 0 && (
            <Typography
              variant="caption"
              sx={{ display: "block", mt: 1, color: "#666" }}
            >
              {renderRichText(block.image.caption)}
            </Typography>
          )}
        </Box>
      );

    case "divider":
      return <Divider sx={{ my: 3 }} />;

    case "quote":
      return (
        <Box
          sx={{
            borderLeft: "4px solid #005244",
            pl: 2,
            py: 1,
            my: 2,
            bgcolor: "rgba(0, 82, 68, 0.05)",
            borderRadius: "0 4px 4px 0",
          }}
        >
          <Typography
            sx={{
              ...typographyStyles.bodyLarge,
              fontStyle: "italic",
            }}
          >
            {renderRichText(block.quote.rich_text)}
          </Typography>
        </Box>
      );

    default:
      return null;
  }
};

// Group blocks by type for better rendering of lists
const groupBlocks = (blocks) => {
  const result = [];
  let currentGroup = null;

  blocks.forEach((block) => {
    // If this is a list item and matches the current group type
    if (currentGroup && block.type === currentGroup.type) {
      currentGroup.blocks.push(block);
    }
    // If it's a different type of block
    else {
      // Close the previous group if there was one
      if (currentGroup) {
        result.push(currentGroup);
      }

      // Start a new group if this is a list item
      if (block.type === "bulleted_list_item") {
        currentGroup = { type: "bulleted_list_item", blocks: [block] };
      } else if (block.type === "numbered_list_item") {
        currentGroup = { type: "numbered_list_item", blocks: [block] };
      } else {
        // This is not a list item, add it directly
        result.push({ type: "single", blocks: [block] });
        currentGroup = null;
      }
    }
  });

  // Add the last group if there is one
  if (currentGroup) {
    result.push(currentGroup);
  }

  return result;
};

// Main component to render all content blocks
export default function AreaGuideContent({ content }) {
  if (!content || content.length === 0) {
    return (
      <Typography sx={{ ...typographyStyles.bodyLarge }}>
        No content available for this area guide yet.
      </Typography>
    );
  }

  // Group the blocks by type to handle lists
  const groupedBlocks = groupBlocks(content);

  return (
    <>
      {groupedBlocks.map((group, groupIndex) => {
        // Render bulleted lists
        if (group.type === "bulleted_list_item") {
          return (
            <Box key={`group-${groupIndex}`} sx={{ my: 2 }}>
              {group.blocks.map((block, blockIndex) => (
                <Box key={block.id || `block-${blockIndex}`}>
                  {renderBlock(block)}
                </Box>
              ))}
            </Box>
          );
        }

        // Render numbered lists
        if (group.type === "numbered_list_item") {
          return (
            <Box key={`group-${groupIndex}`} sx={{ my: 2 }}>
              {group.blocks.map((block, blockIndex) => (
                <Box
                  key={block.id || `block-${blockIndex}`}
                  sx={{ display: "flex", mb: 1 }}
                >
                  <Box
                    component="span"
                    sx={{ minWidth: "24px", textAlign: "right", mr: 1 }}
                  >
                    {blockIndex + 1}.
                  </Box>
                  {renderBlock(block)}
                </Box>
              ))}
            </Box>
          );
        }

        // Render regular blocks
        return (
          <Box key={`group-${groupIndex}`}>
            {group.blocks.map((block, blockIndex) => (
              <Box key={block.id || `block-${blockIndex}`}>
                {renderBlock(block)}
              </Box>
            ))}
          </Box>
        );
      })}
    </>
  );
}
