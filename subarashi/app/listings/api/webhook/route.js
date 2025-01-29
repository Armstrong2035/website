// app/listings/api/webhook/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    // Log the structure
    console.log("Webhook data received:");
    console.log("Task ID:", body.payload.id);
    console.log("Task Name:", body.payload.name);

    // Log custom fields in a readable way
    console.log("Custom Fields:");
    body.payload.custom_fields.forEach((field) => {
      console.log(`${field.name}: ${field.value}`);
    });

    return NextResponse.json({
      message: "Data received and logged",
      taskId: body.payload.id,
    });
  } catch (error) {
    console.error("Error parsing webhook:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
