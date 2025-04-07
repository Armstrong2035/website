import { NextResponse } from "next/server";

const LIST_ID = "901805280021";
const API_KEY = process.env.CLICKUP_API_KEY;

const getFieldValue = (fields, fieldName) => {
  const field = fields.find((f) => f.name === fieldName);
  return field && field.value !== null && field.value !== undefined
    ? field.value
    : null;
};

const getFurnishedStatus = (fields) => {
  const furnishedField = fields.find((f) => f.name === "Furnished");
  if (!furnishedField || furnishedField.value === null) return "unknown";
  const options = furnishedField.type_config.options;
  const option = options.find((opt) => opt.orderindex === furnishedField.value);
  return option ? option.name.toLowerCase() : "unknown";
};

const getPropertyType = (fields) => {
  const typeField = fields.find((f) => f.name === "Property Type");
  if (!typeField || typeField.value === null) return "unknown";
  const options = typeField.type_config.options;
  const option = options.find((opt) => opt.orderindex === typeField.value);
  return option ? option.name.toLowerCase() : "unknown";
};

const getRentalFrequency = (fields) => {
  const freqField = fields.find((f) => f.name === "Rental Frequency");
  if (!freqField || freqField.value === null) return "unknown";
  const options = freqField.type_config.options;
  const option = options.find((opt) => opt.orderindex === freqField.value);
  return option ? option.name.toLowerCase() : "unknown";
};

const getMedia = (fields) => {
  const mediaFields = fields.filter((f) => f.name.startsWith("Media "));
  const mediaUrls = mediaFields.map((f) => f.value || null); // Keep nulls for debugging

  console.log(
    `Task media fields (raw):`,
    mediaFields.map((f) => ({ name: f.name, value: f.value }))
  );
  console.log(`Task media URLs (before filter):`, mediaUrls);

  // Filter only truly invalid entries (undefined or empty strings), keep nulls as placeholders
  const filteredMediaUrls = mediaUrls.filter(
    (url) => url !== undefined && url !== ""
  );

  console.log(`Task media URLs (after filter):`, filteredMediaUrls);

  return filteredMediaUrls;
};

export async function GET() {
  try {
    const response = await fetch(
      `https://api.clickup.com/api/v2/list/${LIST_ID}/task?include_closed=false&subtasks=false`,
      {
        method: "GET",
        headers: {
          Authorization: API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`ClickUp API responded with status: ${response.status}`);
    }

    const data = await response.json();

    console.log(
      "Fetched task IDs:",
      data.tasks.map((t) => t.id)
    );
    console.log("Total tasks fetched:", data.tasks.length);

    const parsedListings = data.tasks.map((task) => {
      const fields = task.custom_fields || [];

      console.log(
        `Task ${task.id} custom fields:`,
        fields.map((f) => f.name)
      );

      return {
        id: task.id,
        title: getFieldValue(fields, "Property Title") || task.name,
        titleArabic: getFieldValue(fields, "Property title (Arabic)") || "",
        description: getFieldValue(fields, "Property Description") || "",
        descriptionArabic:
          getFieldValue(fields, "Property Description (Arabic)") || "",
        bedrooms: Number(getFieldValue(fields, "Bedrooms")) || 0,
        bathrooms: Number(getFieldValue(fields, "Bathrooms")) || 0,
        area: Number(getFieldValue(fields, "Built up area (square feet)")) || 0,
        furnished: getFurnishedStatus(fields),
        propertyType: getPropertyType(fields),
        location: {
          city: getFieldValue(fields, "City") || "Dubai",
          locality: getFieldValue(fields, "Locality") || "",
          subLocality: getFieldValue(fields, "Sub locality") || "",
          building: getFieldValue(fields, "Tower name") || "",
        },
        rental: {
          frequency: getRentalFrequency(fields),
          permitNumber: getFieldValue(fields, "Permit Number") || "",
        },
        agent: {
          name: getFieldValue(fields, "Agent") || "",
          email: getFieldValue(fields, "Agent Email") || "",
          phone: getFieldValue(fields, "Agent phone number") || "",
        },
        media: getMedia(fields),
        dateCreated: task.date_created,
        dateUpdated: task.date_updated,
      };
    });

    return NextResponse.json(
      {
        listings: parsedListings,
        total: parsedListings.length,
        lastPage: data.last_page,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching or parsing listings from ClickUp:", error);
    return NextResponse.json(
      { error: "Failed to fetch or parse listings", details: error.message },
      { status: 500 }
    );
  }
}
