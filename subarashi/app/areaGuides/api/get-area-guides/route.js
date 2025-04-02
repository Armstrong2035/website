import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Initialize the Notion client
    const notion = new Client({
      auth: process.env.NOTION_API_KEY, // Use server-side environment variable
    });

    // Your database ID
    // Try both formats (with and without hyphens)
    let databaseId = "1c4275a597e3806490f2db26c65ed1b4";

    // Log the API key (first few characters only) and database ID for debugging
    console.log("Using database ID:", databaseId);
    console.log(
      "API Key (first 4 chars):",
      process.env.NOTION_API_KEY
        ? process.env.NOTION_API_KEY.substring(0, 4) + "..."
        : "Not found"
    );

    // Try to query the database using the original format
    let response;
    try {
      response = await notion.databases.query({
        database_id: databaseId,
      });
    } catch (error) {
      // If that fails, try with the hyphenated format
      if (error.code === "object_not_found") {
        console.log("First format failed, trying hyphenated format");
        // Convert to hyphenated UUID format
        const hyphenatedId = `${databaseId.slice(0, 8)}-${databaseId.slice(
          8,
          12
        )}-${databaseId.slice(12, 16)}-${databaseId.slice(
          16,
          20
        )}-${databaseId.slice(20)}`;
        console.log("Using hyphenated ID:", hyphenatedId);

        response = await notion.databases.query({
          database_id: hyphenatedId,
        });
      } else {
        // If it's a different error, rethrow it
        throw error;
      }
    }

    // Return the results
    return NextResponse.json(response.results);
  } catch (error) {
    console.error("Error querying Notion:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
