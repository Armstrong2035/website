// app/listings/xmlfiles/[id]/route.js
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = params; // This will be 'SUB-2025-6nj3'

    // For now, let's just return some test XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<Properties>
  <Property>
    <Property_Ref_No><![CDATA[${id}]]></Property_Ref_No>
    <Test>Testing XML Route</Test>
  </Property>
</Properties>`;

    const headers = new Headers();
    headers.set("Content-Type", "application/xml");

    return new NextResponse(xml, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Error serving XML:", error);
    return NextResponse.json({ error: "XML not found" }, { status: 404 });
  }
}
