export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const pageId = searchParams.get("id");

  if (!pageId) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const pageContent = await notion.blocks.children.list({ block_id: pageId });
    const page = await notion.pages.retrieve({ page_id: pageId });

    return NextResponse.json({ page, content: pageContent.results });
  } catch (error) {
    console.error("Error fetching page content:", error);
    return NextResponse.json(
      { error: "Failed to fetch page content" },
      { status: 500 }
    );
  }
}
