const { Client } = require("@notionhq/client");

// Initialize the Notion client with your API key
const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_API_KEY,
});

// The ID of your database - use the one we identified
const databaseId = "1c4275a597e38066b285000c7abff6da&pvs";

async function getDatabase() {
  try {
    // Retrieve the database
    const database = await notion.databases.retrieve({
      database_id: databaseId,
    });

    console.log("Database retrieved successfully:");
    console.log(JSON.stringify(database, null, 2));

    console.log(database);

    return database;
  } catch (error) {
    console.error("Error retrieving database:", error.body);
  }
}

// Execute the function
// getDatabase();

export { getDatabase };
