// app/api/test/route.js
import { NextResponse } from "next/server";
import { generateXML } from "../../lib/xml/generator";

export async function GET() {
  // Mock data object that matches Bayut requirements
  const mockListing = {
    task_id: "TEST123",
    permit_number: "PRN-12345",
    purpose: "Rent",
    property_type: "Apartment",
    size: "1500",
    plot_area: "2000",
    bedrooms: "2",
    bathrooms: "2",
    features: ["Swimming Pool", "Gym"],
    off_plan: false,
    title: "Luxury 2BR Apartment",
    description: "Beautiful apartment with sea view",
    price: "120000",
    furnished: "Yes",
    city: "Dubai",
    locality: "Dubai Marina",
    tower_name: "Marina Heights",
    agent_name: "John Doe",
    agent_phone: "+971-XX-XXXXXXX",
    agent_email: "john@test.com",
    images: ["http://example.com/image1.jpg", "http://example.com/image2.jpg"],
  };

  try {
    // Generate XML
    const xml = await generateXML(mockListing);

    // Set XML content type header
    const headers = new Headers();
    headers.set("Content-Type", "application/xml");

    return new NextResponse(xml, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Error generating XML:", error);
    return NextResponse.json(
      {
        error: "Failed to generate XML",
        details: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
