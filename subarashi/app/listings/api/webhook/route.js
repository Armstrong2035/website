import { NextResponse } from "next/server";
import { generateXML } from "../../lib/xml/generator";
import { saveXML } from "../../lib/xml/utils";

export async function POST(request) {
  try {
    const body = await request.json();

    const taskId = body.task_id;

    const xml = await generateXML(body);

    await saveXML(taskId, xml);

    return NextResponse.json({
      message: "XML generated",
      url: `/xmlfiles/${taskId}`,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
