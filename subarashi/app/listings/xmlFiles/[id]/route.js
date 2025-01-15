import { NextResponse } from "next/server";
import { getXML } from "../../lib/xml/utils";
import { headers } from "next/headers";

export async function GET(request, context) {
  try {
    const { id } = context.params;

    const xml = await getXML(id);

    if (!xml) {
      return new NextResponse("XML not found", { state: 404 });
    }

    const headers = new Headers();
    headers.set("Content-Type", "application/xml");

    return new NextResponse(xml, { state: 200, headers });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Error loading XML", { status: 500 });
  }
}
