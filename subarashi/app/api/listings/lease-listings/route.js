// app/api/listings/route.js
import { NextResponse } from "next/server";

// API key should be in environment variables
const API_KEY = process.env.CLICKUP_API_KEY;
const LIST_ID = process.env.CLICKUP_RENTALS_LIST_ID;

export async function GET() {
  try {
    // Fetch tasks from ClickUp using native fetch
    const response = await fetch(
      `https://api.clickup.com/api/v2/list/${LIST_ID}/task`,
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

    // Transform the raw data into a simplified format
    const listings = data.tasks.map((task) => {
      // Helper function to find custom field value
      const getFieldValue = (name) => {
        const field = task.custom_fields.find((f) => f.name === name);
        return field ? field.value : null;
      };

      // Get media fields (up to 5)
      const media = [];
      for (let i = 1; i <= 5; i++) {
        const mediaField = task.custom_fields.find(
          (f) => f.name === `Media ${i}`
        );
        if (mediaField && mediaField.value) {
          media.push(mediaField.value);
        }
      }

      // Find furnished status
      const furnishedField = task.custom_fields.find(
        (f) => f.name === "Furnished"
      );
      let furnishedStatus = "No";
      if (furnishedField && furnishedField.value !== null) {
        const furnishedOptions = furnishedField.type_config.options;
        furnishedStatus = furnishedOptions[furnishedField.value]?.name || "No";
      }

      // Find property type
      const propertyTypeField = task.custom_fields.find(
        (f) => f.name === "Property Type"
      );
      let propertyType = "Apartment";
      if (propertyTypeField && propertyTypeField.value !== null) {
        const propertyOptions = propertyTypeField.type_config.options;
        propertyType =
          propertyOptions[propertyTypeField.value]?.name || "Apartment";
      }

      // Map rental frequency
      const frequencyField = task.custom_fields.find(
        (f) => f.name === "Rental Frequency"
      );
      let frequency = "Yearly";
      if (frequencyField && frequencyField.value !== null) {
        const frequencyOptions = frequencyField.type_config.options;
        frequency = frequencyOptions[frequencyField.value]?.name || "Yearly";
      }

      // Create the simplified listing object
      return {
        id: task.id,
        title: getFieldValue("Property Title") || task.name,
        titleArabic: getFieldValue("Property title (Arabic)") || "",
        description: getFieldValue("Property Description") || "",
        descriptionArabic: getFieldValue("Property Description (Arabic)") || "",
        bedrooms: getFieldValue("Bedrooms") || 0,
        bathrooms: getFieldValue("Bathrooms") || 0,
        area: getFieldValue("Built up area (square feet)") || 0,
        furnished: furnishedStatus,
        propertyType: propertyType,
        location: {
          city: getFieldValue("City") || "Dubai",
          locality: getFieldValue("Locality") || "",
          subLocality: getFieldValue("Sub locality") || "",
          building: getFieldValue("Tower name") || "",
        },
        rental: {
          frequency: frequency,
          permitNumber: getFieldValue("Permit Number") || "",
        },
        agent: {
          name: getFieldValue("Agent") || "",
          email: getFieldValue("Agent Email") || "",
          phone: getFieldValue("Agent phone number") || "",
        },
        media: media,
        dateCreated: task.date_created,
        dateUpdated: task.date_updated,
      };
    });

    // Return the transformed data
    return NextResponse.json({ listings, count: listings.length });
  } catch (error) {
    console.error("Error fetching listings:", error);
    return NextResponse.json(
      { error: "Failed to fetch listings", message: error.message },
      { status: 500 }
    );
  }
}
