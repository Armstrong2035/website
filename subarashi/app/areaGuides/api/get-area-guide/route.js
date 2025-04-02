// app/api/notion/page/[id]/route.js
import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const pageId = params.id;

    // Initialize the Notion client
    const notion = new Client({
      auth: process.env.NOTION_API_KEY,
    });

    // Get page content
    const pageContent = await notion.blocks.children.list({
      block_id: pageId,
    });

    // Get page properties
    const page = await notion.pages.retrieve({
      page_id: pageId,
    });

    return NextResponse.json({
      page,
      content: pageContent.results,
    });
  } catch (error) {
    console.error("Error fetching page content:", error);
    return NextResponse.json(
      { error: "Failed to fetch page content" },
      { status: 500 }
    );
  }
}
